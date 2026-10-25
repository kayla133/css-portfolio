/**
 * Theme preference: restore on load (before paint) and persist on change.
 * Load in <head> WITHOUT defer or async.
 */
(() => {
    const ALLOWED = new Set(['light', 'system', 'dark']);

    let stored = null;
    try {
        stored = localStorage.getItem('theme-preference');
    } catch {
        /* storage may be disabled */
    }

    const value = ALLOWED.has(stored) ? stored : 'system';
    document.documentElement.dataset.theme = value;

    const syncRadios = () => {
        document.querySelectorAll('input[name="theme-preference"]').forEach((input) => {
            input.checked = input.value === value;
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', syncRadios, { once: true });
    } else {
        syncRadios();
    }

    document.addEventListener('change', (e) => {
        if (!(e.target instanceof HTMLInputElement) ||
            e.target.name !== 'theme-preference' ||
            !ALLOWED.has(e.target.value)) {
            return;
        }

        document.documentElement.dataset.theme = e.target.value;
        try {
            localStorage.setItem('theme-preference', e.target.value);
        } catch {
            /* storage may be disabled */
        }
    });
})();