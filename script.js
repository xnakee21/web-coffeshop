/*
   Aroma Haven Coffee Shop
   JavaScript Functionality
*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ------------- Navigation & Mobile Menu -------------
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle navigation menu
    function toggleNav() {
        // Toggle navigation
        nav.classList.toggle('nav-active');
        
        // Animate links with delay
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');
    }
    
    burger.addEventListener('click', toggleNav);
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleNav();
            }
        });
    });
    
    // ------------- Menu Tabs -------------
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuContents = document.querySelectorAll('.menu-content');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const tabId = tab.getAttribute('data-tab');
            menuContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId + '-menu') {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Create menu content for other tabs that aren't visible initially
    const menuSection = document.querySelector('.menu-content');
    
    // Pastries menu content
    const pastriesMenu = document.createElement('div');
    pastriesMenu.id = 'pastries-menu';
    pastriesMenu.className = 'menu-content';
    pastriesMenu.innerHTML = `
        <div class="menu-items">
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="/api/placeholder/150/150" alt="Croissant" />
                </div>
                <div class="menu-item-info">
                    <h3>Butter Croissant</h3>
                    <p>Flaky, buttery pastry made from French recipe</p>
                    <span class="price">$3.75</span>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="/api/placeholder/150/150" alt="Chocolate Muffin" />
                </div>
                <div class="menu-item-info">
                    <h3>Chocolate Muffin</h3>
                    <p>Rich chocolate muffin with chocolate chips</p>
                    <span class="price">$4.25</span>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="/api/placeholder/150/150" alt="Cinnamon Roll" />
                </div>
                <div class="menu-item-info">
                    <h3>Cinnamon Roll</h3>
                    <p>Warm spiced roll with cream cheese frosting</p>
                    <span class="price">$4.50</span>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="/api/placeholder/150/150" alt="Almond Danish" />
                </div>
                <div class="menu-item-info">
                    <h3>Almond Danish</h3>
                    <p>Flaky pastry filled with sweet almond paste</p>
                    <span class="price">$4.75</span>
                </div>
            </div>
        </div>
    `;
    
    // Specials menu content
    const specialsMenu = document.createElement('div');
    specialsMenu.id = 'specials-menu';
    specialsMenu.className = 'menu-content';
    specialsMenu.innerHTML = `
        <div class="menu-items">
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="/api/placeholder/150/150" alt="Seasonal Latte" />
                </div>
                <div class="menu-item-info">
                    <h3>Seasonal Latte</h3>
                    <p>Our signature espresso with seasonal flavors</p>
                    <span class="price">$5.50</span>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="/api/placeholder/150/150" alt="Signature Blend" />
                </div>
                <div class="menu-item-info">
                    <h3>Signature Blend</h3>
                    <p>Our house specialty coffee blend, rich and bold</p>
                    <span class="price">$4.00</span>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="/api/placeholder/150/150" alt="Coffee Flight" />
                </div>
                <div class="menu-item-info">
                    <h3>Coffee Flight</h3>
                    <p>Sample four different brewing methods</p>
                    <span class="price">$9.25</span>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="/api/placeholder/150/150" alt="Barista Special" />
                </div>
                <div class="menu-item-info">
                    <h3>Barista Special</h3>
                    <p>Ask about our daily barista creation</p>
                    <span class="price">$5.75</span>
                </div>
            </div>
        </div>
    `;
    
    // Append the created menu contents
    menuSection.parentNode.appendChild(pastriesMenu);
    menuSection.parentNode.appendChild(specialsMenu);
    
    // ------------- Sticky Navigation -------------
    const header = document.querySelector('header');
    let scrollPosition = window.scrollY;
    
    window.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // ------------- Smooth Scrolling -------------
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ------------- Active Navigation Links on Scroll -------------
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.querySelector('a').classList.remove('active');
            if (link.querySelector(`a[href="#${current}"]`)) {
                link.querySelector(`a[href="#${current}"]`).classList.add('active');
            }
        });
    });
    
    // ------------- Form Validation -------------
    const contactForm = document.querySelector('.contact-form form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && email && message) {
                // Form validation passed
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                alert('Please enter your email address.');
            }
        });
    }
    
    // ------------- Gallery Animation -------------
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.zIndex = '1';
        });
    });
    
    // ------------- Testimonial Carousel (Optional) -------------
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    // Only initialize carousel for mobile view
    function initTestimonialCarousel() {
        if (window.innerWidth <= 768 && testimonials.length > 1) {
            // Hide all testimonials except the first one
            testimonials.forEach((testimonial, index) => {
                if (index !== 0) {
                    testimonial.style.display = 'none';
                }
            });
            
            // Auto-rotate testimonials
            setInterval(() => {
                testimonials[currentTestimonial].style.display = 'none';
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                testimonials[currentTestimonial].style.display = 'block';
            }, 5000);
        } else {
            // Show all testimonials for desktop view
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'block';
            });
        }
    }
    
    // Call on page load and window resize
    initTestimonialCarousel();
    window.addEventListener('resize', initTestimonialCarousel);
    
    // ------------- Add Animation on Scroll Effect -------------
    function checkVisibility() {
        const elements = document.querySelectorAll('.special-item, .about-content, .menu-item, .gallery-item, .testimonial');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // Check if element is in viewport
            if (elementTop < window.innerHeight && elementBottom >= 0) {
                element.classList.add('show');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.special-item, .about-content, .menu-item, .gallery-item, .testimonial');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-in-out';
    });
    
    // Check visibility on load and scroll
    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    
    // Initialize page
    checkVisibility();
});