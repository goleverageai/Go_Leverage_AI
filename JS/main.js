<script>
        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.getElementById('navMenu');

        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Tab functionality
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });

        // Form submission
        document.getElementById('heroForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.card, .section').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });


document.addEventListener("DOMContentLoaded", function () {
    const heroVideo = document.getElementById('assets/161917-824623504_tiny.mp4');
    if (heroVideo) {
        heroVideo.playbackRate = 0.2; // Adjust speed (0.5 = half speed)
    }
});





















// Testimonials Carousel JavaScript
class TestimonialsCarousel {
    constructor(selector) {
        this.carousel = document.querySelector(selector);
        if (!this.carousel) return;
        
        this.track = this.carousel.querySelector('.carousel-track');
        this.cards = this.carousel.querySelectorAll('.testimonial-card');
        this.prevButton = this.carousel.querySelector('.carousel-arrow-prev');
        this.nextButton = this.carousel.querySelector('.carousel-arrow-next');
        this.paginationDots = this.carousel.querySelectorAll('.pagination-dot');
        
        this.currentIndex = 0;
        this.totalCards = this.cards.length;
        this.autoplayInterval = null;
        this.autoplayDelay = 4000; // 4 seconds
        this.isTransitioning = false;
        this.isPaused = false;
        
        this.init();
    }
    
    init() {
        if (this.totalCards === 0) return;
        
        // Set initial state
        this.updateActiveCard(0);
        
        // Bind event listeners
        this.bindEvents();
        
        // Start autoplay
        this.startAutoplay();
        
        // Remove loading state
        setTimeout(() => {
            this.carousel.classList.remove('loading');
        }, 100);
    }
    
    bindEvents() {
        // Navigation arrows
        this.prevButton?.addEventListener('click', () => this.goToPrevious());
        this.nextButton?.addEventListener('click', () => this.goToNext());
        
        // Pagination dots
        this.paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Hover pause/resume
        this.carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.carousel.addEventListener('mouseleave', () => this.resumeAutoplay());
        
        // Touch/swipe support for mobile
        this.bindTouchEvents();
        
        // Keyboard navigation
        this.carousel.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Focus management for accessibility
        this.carousel.setAttribute('tabindex', '0');
    }
    
    bindTouchEvents() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        this.carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = startX - endX;
            const deltaY = startY - endY;
            
            // Only trigger swipe if horizontal movement is greater than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.goToNext();
                } else {
                    this.goToPrevious();
                }
            }
        }, { passive: true });
    }
    
    handleKeydown(e) {
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.goToPrevious();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.goToNext();
                break;
            case ' ':
                e.preventDefault();
                this.isPaused ? this.resumeAutoplay() : this.pauseAutoplay();
                break;
        }
    }
    
    goToNext() {
        if (this.isTransitioning) return;
        const nextIndex = (this.currentIndex + 1) % this.totalCards;
        this.goToSlide(nextIndex);
    }
    
    goToPrevious() {
        if (this.isTransitioning) return;
        const prevIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        this.goToSlide(prevIndex);
    }
    
    goToSlide(index) {
        if (this.isTransitioning || index === this.currentIndex) return;
        
        this.isTransitioning = true;
        
        const currentCard = this.cards[this.currentIndex];
        const nextCard = this.cards[index];
        
        // Add fade-out animation to current card
        currentCard.classList.add('fade-out');
        currentCard.classList.remove('active', 'fade-in');
        
        // Prepare next card for fade-in
        nextCard.classList.remove('fade-out', 'prev');
        
        // After fade-out completes, show next card
        setTimeout(() => {
            currentCard.classList.remove('fade-out');
            currentCard.classList.add('prev');
            
            nextCard.classList.add('active', 'fade-in');
            
            this.currentIndex = index;
            this.updatePagination();
            
            // Remove fade-in class after animation completes
            setTimeout(() => {
                nextCard.classList.remove('fade-in');
                this.isTransitioning = false;
            }, 800);
        }, 400);
    }
    
    updateActiveCard(index) {
        this.cards.forEach((card, i) => {
            card.classList.remove('active', 'prev', 'fade-in', 'fade-out');
            if (i === index) {
                card.classList.add('active');
            } else if (i < index) {
                card.classList.add('prev');
            }
        });
        
        this.currentIndex = index;
        this.updatePagination();
    }
    
    updatePagination() {
        this.paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    startAutoplay() {
        if (this.autoplayInterval) return;
        
        this.autoplayInterval = setInterval(() => {
            if (!this.isPaused && !this.isTransitioning) {
                this.goToNext();
            }
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    pauseAutoplay() {
        this.isPaused = true;
        this.carousel.classList.add('paused');
    }
    
    resumeAutoplay() {
        this.isPaused = false;
        this.carousel.classList.remove('paused');
    }
    
    // Public methods for external control
    pause() {
        this.pauseAutoplay();
        this.stopAutoplay();
    }
    
    resume() {
        this.resumeAutoplay();
        this.startAutoplay();
    }
    
    destroy() {
        this.stopAutoplay();
        // Remove event listeners would go here if needed
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the testimonials carousel
    const testimonialsCarousel = new TestimonialsCarousel('.testimonials-carousel');
    
    // Optional: Make carousel globally accessible
    window.testimonialsCarousel = testimonialsCarousel;
    
    // Optional: Add intersection observer for performance
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    testimonialsCarousel.resume();
                } else {
                    testimonialsCarousel.pause();
                }
            });
        }, {
            threshold: 0.5
        });
        
        if (testimonialsCarousel.carousel) {
            observer.observe(testimonialsCarousel.carousel);
        }
    }
});

// Additional utility functions
function createTestimonialsCarousel(selector, options = {}) {
    const carousel = new TestimonialsCarousel(selector);
    
    // Apply custom options
    if (options.autoplayDelay) {
        carousel.autoplayDelay = options.autoplayDelay;
    }
    
    return carousel;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TestimonialsCarousel, createTestimonialsCarousel };
}







        

    </script>
