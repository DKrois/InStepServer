export function initTOC() {
    const main = document.querySelector('main');
    const tocContainer = document.getElementById('toc-content');

    if (!main || !tocContainer) return;

    // 1. Generate TOC from headings (h2, h3)
    const headings = main.querySelectorAll('h2, h3');
    if (headings.length === 0) {
        tocContainer.innerHTML = '<p style="opacity:0.5; font-size:0.8rem;">No subsections</p>';
        return;
    }

    headings.forEach(heading => {
        const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        heading.id = id || ''; // Ensure ID exists

        const link = document.createElement('a');
        link.href = `#${id}`;
        link.textContent = heading.textContent;
        link.className = 'toc-link';
        // Indent h3
        if (heading.tagName === 'H3') link.style.paddingLeft = '20px';

        tocContainer.appendChild(link);
    });

    // 2. Scroll Spy logic
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -60% 0px', // Active when heading is near top
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all
                document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));

                // Add active to current
                const id = entry.target.id;
                const activeLink = document.querySelector(`.toc-link[href="#${id}"]`);
                activeLink?.classList.add('active');
            }
        });
    }, observerOptions);

    headings.forEach(h => observer.observe(h));
}