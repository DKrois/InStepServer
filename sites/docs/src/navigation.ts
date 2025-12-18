export function initNavigation() {
    // Handle Sidebar Folder Toggling
    const groups = document.querySelectorAll('.nav-group-title');

    groups.forEach(group => {
        group.addEventListener('click', (e) => {
            const parent = (e.currentTarget as HTMLElement).parentElement;
            parent?.classList.toggle('expanded');
        });
    });

    // Auto-expand active path
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        let parent = activeLink.parentElement;
        while(parent && !parent.classList.contains('sidebar-left')) {
            if (parent.classList.contains('nav-group')) {
                parent.classList.add('expanded');
            }
            parent = parent.parentElement;
        }
    }
}