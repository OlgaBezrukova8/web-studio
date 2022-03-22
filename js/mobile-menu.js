(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    
    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
        
        menuBtnRef.classList.toggle('is-open');
        menuBtnRef.setAttribute('aria-expanded', !expanded);

        const menuMenuRef = document.querySelector('[data-mobile-menu]');
        menuMenuRef.classList.toggle('is-open');
    });
})();
    
    
  

