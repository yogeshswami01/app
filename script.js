
// LEARNSCREW Interactive Logic
document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Animated Reveal on Scroll
    // This makes the feature cards "pop in" as you scroll down
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // 3. Fake "AI" Personalization Button Logic
    const ctaBtn = document.querySelector('.btn-primary');
    if(ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            const userName = prompt("Welcome to Learnscrew! What is your name?");
            if(userName) {
                alert(`Hello ${userName}! We are analyzing 500+ internships and hackathons to build your custom learning path.`);
                // Here you would typically redirect to a dashboard
                console.log("Initializing AI engine for user:", userName);
            }
        });
    }

    // 4. Logo Error Handling
    const logoImg = document.querySelector('.logo-area img');
    logoImg.onerror = function() {
        console.error("Warning: 'logo.jpeg' not found in root folder.");
        this.src = "https://via.placeholder.com/50x50?text=LS"; // Fallback placeholder
    };
});