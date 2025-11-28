document.addEventListener('DOMContentLoaded', function() {
    console.log('theGirlyZone loaded');
    
    // Mobile menu toggle (keep this if you need it)
    document.querySelector('.mobile-menu-toggle')?.addEventListener('click', function() {
        alert('Mobile menu would open');
    });
    
    // REMOVE the old favourite buttons code - cart-favourites.js handles this now
    // The old code would show alerts and conflict with the new system
    
    console.log('Cart & Favourites system will be handled by cart-favourites.js');
});
