// Enhanced Category click handler for index.html and categories.html
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to category cards on index.html
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add visual feedback
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);

            // Get category from the card
            const categoryIcon = card.querySelector('.category-icon').textContent;
            const categoryName = card.querySelector('.category-name').textContent;
            
            // Map category names to URL parameters
            const categoryMapping = {
                'Electronics': 'electronics',
                'Fashion': 'fashion',
                'Home & Garden': 'home-garden',
                'Sports': 'sports',
                'Art & Collectibles': 'art-collectibles',
                'Automotive': 'automotive'
            };
            
            const categoryKey = categoryMapping[categoryName];
            
            if (categoryKey) {
                // Check if we're on categories.html or index.html
                if (window.location.pathname.includes('categories.html')) {
                    // On categories page - update URL and show products
                    const url = new URL(window.location);
                    url.searchParams.set('category', categoryKey);
                    window.history.pushState(null, '', url);
                    
                    // Trigger category product display
                    if (typeof showCategoryProducts === 'function') {
                        showCategoryProducts(categoryKey);
                    }
                } else {
                    // On index page - redirect to categories page
                    window.location.href = `categories.html?category=${categoryKey}`;
                }
            }
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
    });

    // Handle "Categories" navigation link click
    const categoriesNavLink = document.querySelector('a[href="categories.html"]');
    if (categoriesNavLink) {
        categoriesNavLink.addEventListener('click', function(e) {
            // If we're already on categories.html, prevent default and show overview
            if (window.location.pathname.includes('categories.html')) {
                e.preventDefault();
                if (typeof showCategoriesOverview === 'function') {
                    showCategoriesOverview();
                }
            }
        });
    }
});