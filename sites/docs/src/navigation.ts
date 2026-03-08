export function setupSidebarToggles() {
    const STORAGE_KEY = 'instep-sidebar-collapsed';
    const raw = localStorage.getItem(STORAGE_KEY);
    let collapsedKeys: string[] = raw ? JSON.parse(raw) : [];

    // helper to save current state
    const saveState = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(collapsedKeys));

    // restore state
    document.querySelectorAll('.nav-group').forEach(el => {
        const group = el as HTMLElement;
        const key = group.dataset.key;
        if (key && collapsedKeys.includes(key)) group.classList.add('collapsed');
    });

    // auto-expand active path
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        let parentGroup = activeLink.closest('.nav-group');

        while (parentGroup) {
            // expand
            parentGroup.classList.remove('collapsed');

            // remove from stored "collapsed" list so it stays open next time
            const key = (parentGroup as HTMLElement).dataset.key;
            if (key) collapsedKeys = collapsedKeys.filter(k => k !== key);

            // move up to next parent (for nested folders)
            parentGroup = parentGroup.parentElement?.closest('.nav-group') || null;
        }
        saveState();
    }

    const folders = document.querySelectorAll('.nav-folder');
    folders.forEach(folder =>
        folder.addEventListener('click', e => {
            const group = (e.currentTarget as HTMLElement).parentElement;
            if (!group) return;

            const key = group.dataset.key;
            if (!key) return;

            const isNowCollapsed = group.classList.toggle('collapsed');

            // update state array
            if (isNowCollapsed) {
                if (!collapsedKeys.includes(key)) collapsedKeys.push(key);
            } else {
                collapsedKeys = collapsedKeys.filter(k => k !== key);
            }

            saveState();
        })
    );
}

export function generateTOC() {
    const content = document.getElementById('main-content');
    const tocContainer = document.getElementById('toc-container');
    if (!content || !tocContainer) return;

    // only use h2 and h3 (h1 is usually page title)
    const headings = content.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    const tocList = document.createElement('div');
    const links: { id: string, el: HTMLAnchorElement, header: Element }[] = [];

    headings.forEach((heading) => {
        // 1. Ensure Heading has an ID
        if (!heading.id) {
            heading.id = (heading.textContent || '')
                .trim()
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]/g, '');
        }

        // 2. Create TOC Link
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.className = 'toc-link';

        // Visual indent for H3
        if (heading.tagName === 'H3') {
            link.style.paddingLeft = '1.5rem';
        }

        // Smooth scroll override
        link.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth' });
            // Update URL without jump
            history.pushState(null, '', `#${heading.id}`);
        });

        tocList.appendChild(link);
        links.push({ id: heading.id, el: link, header: heading });
    });

    tocContainer.appendChild(tocList);

    // 3. Scroll Spy (Highlight active TOC item)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Clear all active
                links.forEach(l => l.el.classList.remove('active'));
                // Set current active
                const active = links.find(l => l.id === entry.target.id);
                if (active) active.el.classList.add('active');
            }
        });
    }, {
        root: null,
        rootMargin: '-10% 0px -80% 0px', // Active when header is near top
        threshold: 0
    });

    headings.forEach(h => observer.observe(h));
}