// smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// sticky nav on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// add animation classes to feature cards on load
window.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Checkout Modal Logic
const modal = document.getElementById('checkout-modal');
const closeBtn = document.querySelector('.modal-close');
const productTitle = document.getElementById('checkout-product');
const productPrice = document.getElementById('checkout-price');
const checkoutSubmit = document.querySelector('.checkout-submit');

document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // update modal data
        productTitle.textContent = btn.getAttribute('data-product');
        productPrice.textContent = btn.getAttribute('data-price');
        
        // show modal
        modal.classList.add('active');
    });
});

const closeModal = () => {
    modal.classList.remove('active');
};

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

checkoutSubmit.addEventListener('click', () => {
    const discord = document.getElementById('discord').value;
    const email = document.getElementById('email').value;
    
    if (!discord || !email) {
        alert('Please fill out all required fields.');
        return;
    }
    
    checkoutSubmit.textContent = 'Processing...';
    checkoutSubmit.style.opacity = '0.7';
    
    // Simulate redirect to payment gateway
    setTimeout(() => {
        alert('This is a mock UI. Here you would redirect the user to Sell.gg / Sellpass!');
        checkoutSubmit.textContent = 'Proceed to Payment';
        checkoutSubmit.style.opacity = '1';
        closeModal();
    }, 1500);
});
