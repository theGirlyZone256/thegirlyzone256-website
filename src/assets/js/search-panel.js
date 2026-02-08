// SEARCH PANEL FUNCTIONALITY - WITH FUZZY MATCHING & AUTOCORRECT
class SearchPanel {
    constructor() {
        this.panel = document.getElementById('searchPanel');
        this.input = document.getElementById('searchInputMain');
        this.suggestions = document.getElementById('searchSuggestionsMain');
        this.searchButton = document.getElementById('searchButton');
        this.overlay = document.getElementById('searchPanelOverlay');
        
        this.isSearchActive = false;
        this.isExecutingSearch = false;
        this.originalState = null;

        this.init()
    }
    
    init() {
    // Open search panel when search icon clicked
    document.querySelectorAll('[data-open-search]').forEach(btn => {
        btn.addEventListener('click', () => this.show());
    });
    
    // Close search panel
    document.querySelector('.close-search').addEventListener('click', () => this.hide());
    this.overlay.addEventListener('click', () => this.hide());
    
    // Real-time suggestions
    this.input.addEventListener('input', (e) => this.handleInput(e));
    
    // Execute search
    this.searchButton.addEventListener('click', () => this.executeSearch());
    this.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.executeSearch();
    });
    
    // 🎯 KEEP ONLY THIS ONE SUGGESTION CLICK HANDLER:
    this.suggestions.addEventListener('click', (e) => {
        console.log('🎯 Click event on suggestions container');
        
        let target = e.target;
        
        // Traverse up to find the suggestion element
        while (target && target !== this.suggestions) {
            if (target.classList && target.classList.contains('suggestion')) {
                console.log('✅ Suggestion element found:', target.dataset.term);
                
                // Prevent multiple executions
                if (this.isExecutingSearch) {
                    console.log('🛑 Search in progress, skipping');
                    return;
                }
                
                e.preventDefault();
                e.stopPropagation();
                
                const searchTerm = target.dataset.term;
                console.log('🔍 Setting input to:', searchTerm);
                this.input.value = searchTerm;
                
                // Small delay to ensure input is updated
                setTimeout(() => {
                    this.executeSearch();
                }, 50);
                
                return;
            }
            target = target.parentElement;
        }
        
        console.log('❌ No suggestion element found in click path');
    });
    
    // Handle browser back button
    window.addEventListener('popstate', (e) => {
        if (this.isSearchActive) {
            this.clearSearchFilter();
        }
    });
}

    // 🆕 DEBOUNCE METHOD to prevent multiple rapid executions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // FUZZY MATCHING FUNCTION - finds closest matching term
    findClosestMatch(searchTerm) {
        if (!window.searchData) return null;
        
        const searchTerms = Object.keys(window.searchData);
        let bestMatch = null;
        let bestScore = 0;
        
        // Convert search term to lowercase for comparison
        const cleanSearchTerm = searchTerm.toLowerCase().trim();
        
        // First, try exact match
        if (window.searchData[cleanSearchTerm]) {
            return cleanSearchTerm;
        }
        
        // If no exact match, find the closest match
        for (const term of searchTerms) {
            let score = this.calculateSimilarity(cleanSearchTerm, term);
            
            // Bonus points for containing the search term
            if (term.includes(cleanSearchTerm)) {
                score += 0.3;
            }
            
            // Bonus points for starting with the search term
            if (term.startsWith(cleanSearchTerm)) {
                score += 0.2;
            }
            
            if (score > bestScore) {
                bestScore = score;
                bestMatch = term;
            }
        }
        
        // Only return if we have a reasonably good match
        return bestScore > 0.4 ? bestMatch : null;
    }
    
    // Calculate similarity between two strings (0 to 1)
    calculateSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        // If the shorter string is empty, return 0
        if (shorter.length === 0) return 0;
        
        // Calculate Levenshtein distance-based similarity
        const distance = this.levenshteinDistance(str1, str2);
        const maxLength = Math.max(str1.length, str2.length);
        
        return 1 - distance / maxLength;
    }
    
    // Levenshtein distance algorithm for fuzzy matching
    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        // Initialize matrix
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        // Fill matrix
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        matrix[i][j - 1] + 1,     // insertion
                        matrix[i - 1][j] + 1      // deletion
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }
    
    show() {
        this.panel.classList.add('active');
        this.overlay.classList.add('active');
        
        // 🆕 RESET EXECUTION STATE WHEN PANEL OPENS
        this.isExecutingSearch = false;
        console.log('🔍 Search panel opened - execution state reset');
        
        this.input.focus();
        document.body.style.overflow = 'hidden';
        document.body.classList.add('search-panel-blur');

        if (!this.originalState) {
            this.originalState = {
                title: document.title,
                url: window.location.href
            };
        }
    }
    
    hide() {
        this.panel.classList.remove('active');
        this.overlay.classList.remove('active');
        this.input.value = '';
        
        // Smoother suggestions fade out
        this.suggestions.style.transition = 'opacity 0.3s ease';
        this.suggestions.style.opacity = '0';
        
        setTimeout(() => {
            this.suggestions.innerHTML = '';
            this.suggestions.style.opacity = '1';
            this.suggestions.style.transition = '';
        }, 300);
        
        document.body.style.overflow = '';
        document.body.classList.remove('search-panel-blur');
        
        this.isExecutingSearch = false;
        
        console.log('🔍 Search panel closed smoothly');
    }
    
    handleInput(event) {
        const searchTerm = event.target.value.toLowerCase().trim();
        
        if (searchTerm.length < 1) {
            this.suggestions.innerHTML = '';
            return;
        }
        
        if (!window.searchData) {
            this.suggestions.innerHTML = '<div class="no-suggestions">Search data not loaded</div>';
            return;
        }
        
        // Find matching search terms
        const matches = Object.keys(window.searchData).filter(term => 
            term.toLowerCase().includes(searchTerm)
        );
        
        this.displaySuggestions(matches, searchTerm);
    }
    
    displaySuggestions(matches, currentInput) {
        if (matches.length === 0) {
            // Show "Did you mean?" suggestion
            const closestMatch = this.findClosestMatch(currentInput);
            if (closestMatch) {
                this.suggestions.innerHTML = `
                    <div class="no-suggestions">No exact matches. Did you mean:</div>
                    <div class="suggestion did-you-mean" data-term="${closestMatch}">
                        <strong>${closestMatch}</strong>
                        <small>(Click to search)</small>
                    </div>
                `;
            } else {
                this.suggestions.innerHTML = '<div class="no-suggestions">No matches found. Try "dress", "black", or "party"</div>';
            }
            return;
        }
        
        // Show top 5 matches
        const topMatches = matches.slice(0, 5);
        this.suggestions.innerHTML = topMatches.map(term => 
        `<div class="suggestion" data-term="${term}" style="cursor: pointer; padding: 12px 16px; border-bottom: 1px solid #f0f0f0;">
            <strong>${term}</strong>
            <small>(${(window.searchData[term] || []).length} products)</small>
        </div>`
    ).join('');
    }
    
    // 🆕 ENHANCED METHOD: Clear ALL filters when search is executed
    clearAllFilters() {
        // Safely check if categories panel instance exists
        if (window.categoriesPanelInstance) {
            // Reset ALL filter states
            window.categoriesPanelInstance.isPriceFilterActive = false;
            window.categoriesPanelInstance.hasAnyFilter = false;
            window.categoriesPanelInstance.currentFilters = {
                category: 'any',
                mood: 'any',
                occasion: 'any',
                price: 100000
            };
            
            // Reset UI elements
            if (window.categoriesPanelInstance.priceSlider) {
                window.categoriesPanelInstance.priceSlider.value = 100000;
            }
            if (window.categoriesPanelInstance.priceDisplay) {
                window.categoriesPanelInstance.priceDisplay.textContent = 'UGX 100,000';
            }
            
            // Reset filter options to "any"
            document.querySelectorAll('.filter-option[data-value="any"]').forEach(option => {
                const filterType = option.dataset.filter;
                document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
            });
            
            // Update UI indicators
            if (window.categoriesPanelInstance.filterIndicator) {
                window.categoriesPanelInstance.filterIndicator.classList.remove('active');
            }
            if (window.categoriesPanelInstance.headerFilterDots) {
                window.categoriesPanelInstance.headerFilterDots.forEach(dot => {
                    dot.style.display = 'none';
                });
            }
            
            // Hide main clear filters button
            if (window.categoriesPanelInstance.mainClearContainer) {
                window.categoriesPanelInstance.mainClearContainer.style.display = 'none';
            }
            
            console.log('🔍 Search: All category filters cleared');
        }
    }
    
    executeSearch() {

        if (this.isExecutingSearch) {
            console.log('🛑 Search already in progress, skipping...');
            return;
        }
    
    this.isExecutingSearch = true;

        const searchTerm = this.input.value.trim();

        if (!searchTerm) {
            this.suggestions.innerHTML = '<div class="no-suggestions">Please enter a search term</div>';
            return;
        }
        
        if (!window.searchData) {
            return;
        }
        
        // Try exact match first
        let finalSearchTerm = searchTerm.toLowerCase();
        let productIds = window.searchData[finalSearchTerm];
        
        // If no exact match, try fuzzy matching
        if (!productIds || productIds.length === 0) {
            const closestMatch = this.findClosestMatch(searchTerm);
            if (closestMatch) {
                finalSearchTerm = closestMatch;
                productIds = window.searchData[closestMatch];
                
                // Update the input field with the corrected term
                this.input.value = closestMatch;
            }
        }
        
        if (!productIds || productIds.length === 0) {
            this.suggestions.innerHTML = `
                <div class="no-suggestions">
                    No products found for "${searchTerm}"
                    ${finalSearchTerm !== searchTerm.toLowerCase() ? `<br><small>We tried "${finalSearchTerm}" but found nothing.</small>` : ''}
                </div>
            `;
            return;
        }
        
        // 🆕 CLEAR ALL FILTERS when search is executed
        this.clearAllFilters();
        
        // Show success message for autocorrect
        if (finalSearchTerm !== searchTerm.toLowerCase()) {
            this.suggestions.innerHTML = `
                <div class="success-message">
                    Searching for "<strong>${finalSearchTerm}</strong>" instead of "${searchTerm}"
                </div>
            `;
            
            // 🆕 SMOOTHER TIMING SEQUENCE
            setTimeout(() => {
                this.hide();
                
                // Small pause before showing results
                setTimeout(() => {
                    this.filterProductsOnHomepage(finalSearchTerm, productIds);
                    
                    // Gentle scroll after results are displayed
                    setTimeout(() => {
                        this.scrollToSearchResults();
                    }, 200);
                    
                }, 150);
                
                // Reset execution flag
                setTimeout(() => {
                    this.isExecutingSearch = false;
                    console.log('✅ Search completed smoothly');
                }, 800);
                
            }, 800); // 🆕 LONGER PAUSE TO READ THE MESSAGE

        } else {
            // 🆕 SMOOTHER ACTION FOR EXACT MATCHES
            this.hide();
            
            // Small delay for better UX
            setTimeout(() => {
                this.filterProductsOnHomepage(finalSearchTerm, productIds);
                
                // Gentle scroll
                setTimeout(() => {
                    this.scrollToSearchResults();
                }, 250);
                
            }, 150);
            
            // Reset execution flag
            setTimeout(() => {
                this.isExecutingSearch = false;
                console.log('✅ Search completed smoothly (exact match)');
            }, 600);
        }
    }

    // 🆕 IMPROVED SMOOTH SCROLL METHOD
scrollToSearchResults() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) {
        console.log('❌ Product grid not found for scrolling');
        return;
    }
    
    console.log('🎯 Preparing smooth scroll to search results...');
    
    // Use requestAnimationFrame for smoother timing
    setTimeout(() => {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 70; // Fallback height
        
        // Get the product grid section instead of just the grid
        const productGridSection = document.querySelector('.product-grid-section');
        const targetElement = productGridSection || productGrid;
        
        if (!targetElement) {
            console.log('❌ No target element found for scrolling');
            return;
        }
        
        const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const targetPosition = elementTop - headerHeight - 30;
        
        console.log('✨ Scrolling to position:', targetPosition, 'Header height:', headerHeight);
        
        // Use smooth scroll with proper error handling
        if (targetPosition > 0 && targetPosition < document.body.scrollHeight) {
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        } else {
            console.log('⚠️ Invalid scroll position, using fallback');
            productGrid.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }, 400);
}
    
    filterProductsOnHomepage(searchTerm, productIds) {
        const productGrid = document.getElementById('productGrid');
        const sectionTitle = document.getElementById('sectionTitle');
        const sectionSubtitle = document.getElementById('sectionSubtitle');
        
        if (!productGrid || !sectionTitle || !sectionSubtitle) {
            return;
        }
        
        // Mark search as active
        this.isSearchActive = true;

        if (window.categoriesPanelInstance && window.categoriesPanelInstance.mainClearContainer) {
        window.categoriesPanelInstance.mainClearContainer.style.display = 'none';
        }
        
        // Add to browser history for back button support
        history.pushState({ searchActive: true }, '', window.location.pathname);
        
        // Get all products from data attributes
        const allProducts = [];
        const productCards = productGrid.querySelectorAll('.product-card[data-product-data]');
        
        productCards.forEach(card => {
            try {
                const productData = JSON.parse(card.dataset.productData);
                allProducts.push({ card, data: productData });
            } catch (e) {
                console.error('Error parsing product data:', e);
            }
        });
        
        // Hide all products first
        productCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Show only matching products
        let foundCount = 0;
        allProducts.forEach(({ card, data }) => {
            if (productIds.includes(data.id)) {
                card.style.display = 'block';
                foundCount++;
            }
        });
        
        // Update section headers
        sectionTitle.textContent = `Search Results for "${searchTerm}"`;
        sectionSubtitle.textContent = `Found ${foundCount} product${foundCount !== 1 ? 's' : ''}`;
        
        
        
        // Add "Clear Search" button
        this.addClearSearchButton();
    }
    
    addClearSearchButton() {
        // Remove existing clear button if any
        const existingButton = document.getElementById('clearSearchButton');
        if (existingButton) {
            existingButton.remove();
        }
        
        // Add new clear button
        const sectionHeader = document.querySelector('.section-header');
        const clearButton = document.createElement('button');
        clearButton.id = 'clearSearchButton';
        clearButton.innerHTML = '&times; Clear Search';
        clearButton.style.cssText = `
            background: #f0f0f0;
            border: 1px solid #ddd;
            padding: 0.5rem 1rem;
            margin-left: 1rem;
            cursor: pointer;
            border-radius: 4px;
            font-size: 0.9rem;
        `;
        
        clearButton.addEventListener('click', () => {
            this.clearSearchFilter();
        });
        
        sectionHeader.appendChild(clearButton);
    }
    
    clearSearchFilter() {
        const productGrid = document.getElementById('productGrid');
        const sectionTitle = document.getElementById('sectionTitle');
        const sectionSubtitle = document.getElementById('sectionSubtitle');
        const clearButton = document.getElementById('clearSearchButton');
        
        if (productGrid) {
            // Show all products
            const productCards = productGrid.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.style.display = 'block';
            });
        }
        
        // Reset section headers
        if (sectionTitle && sectionSubtitle) {
            sectionTitle.textContent = 'New Arrivals';
            sectionSubtitle.textContent = 'Latest additions to our collection';
        }
        
        // Remove clear button
        if (clearButton) {
            clearButton.remove();
        }
        
        // Mark search as inactive
        this.isSearchActive = false;
        
        if (this.originalState && window.location.pathname !== new URL(this.originalState.url).pathname) {
            history.replaceState(null, '', this.originalState.url);
        }

        if (window.categoriesPanelInstance && window.categoriesPanelInstance.hasAnyFilter) {
        if (window.categoriesPanelInstance.mainClearContainer) {
            window.categoriesPanelInstance.mainClearContainer.style.display = 'block';
        }
    }

    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.searchPanel = new SearchPanel();
    
    // Handle page load with search parameters in URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    const productIds = urlParams.get('ids');
    
    if (searchTerm && productIds) {
        const searchPanel = new SearchPanel();
        const idsArray = productIds.split(',').map(id => parseInt(id));
        searchPanel.filterProductsOnHomepage(searchTerm, idsArray);
    }
});