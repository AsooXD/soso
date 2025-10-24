// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Height of fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sample data for news (in a real app, this would come from an API)
    const newsData = [
        {
            title: 'ورشة عمل حول كتابة المقترحات البحثية',
            date: '15 أكتوبر 2025',
            excerpt: 'ورشة متخصصة في كتابة المقترحات البحثية للمبتدئين',
            image: 'images/news-1.jpg'
        },
        {
            title: 'إطلاق المنصة الجديدة للباحثين',
            date: '1 أكتوبر 2025',
            excerpt: 'منصة متكاملة لخدمات البحث العلمي والتدريب',
            image: 'images/news-2.jpg'
        },
        {
            title: 'دورة تدريبية في استخدام SPSS',
            date: '25 سبتمبر 2025',
            excerpt: 'تعلم أساسيات تحليل البيانات باستخدام برنامج SPSS',
            image: 'images/news-3.jpg'
        }
    ];

    // Sample data for workshops
    const workshopsData = [
        {
            title: 'كتابة المقترحات البحثية',
            date: '20 نوفمبر 2025',
            duration: '3 أيام',
            instructor: 'د. أحمد محمد',
            seats: 25
        },
        {
            title: 'إدارة المراجع البحثية',
            date: '5 ديسمبر 2025',
            duration: 'يومين',
            instructor: 'أ. سارة أحمد',
            seats: 20
        },
        {
            title: 'تحليل البيانات باستخدام SPSS',
            date: '15 يناير 2026',
            duration: '4 أيام',
            instructor: 'د. خالد عبدالله',
            seats: 30
        }
    ];

    // Function to create news cards
    function createNewsCards() {
        const newsGrid = document.querySelector('.news-grid');
        if (!newsGrid) return;

        newsData.forEach(news => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            newsCard.innerHTML = `
                <div class="news-image" style="background-image: url('${news.image}')"></div>
                <div class="news-content">
                    <span class="news-date">${news.date}</span>
                    <h3>${news.title}</h3>
                    <p>${news.excerpt}</p>
                    <a href="#" class="read-more">اقرأ المزيد</a>
                </div>
            `;
            newsGrid.appendChild(newsCard);
        });
    }

    // Function to create workshop cards
    function createWorkshopCards() {
        const workshopsContainer = document.querySelector('.workshops-container');
        if (!workshopsContainer) return;

        workshopsData.forEach(workshop => {
            const workshopCard = document.createElement('div');
            workshopCard.className = 'workshop-card';
            workshopCard.innerHTML = `
                <h3>${workshop.title}</h3>
                <div class="workshop-meta">
                    <span><i class="far fa-calendar-alt"></i> ${workshop.date}</span>
                    <span><i class="far fa-clock"></i> ${workshop.duration}</span>
                </div>
                <p class="instructor"><i class="fas fa-chalkboard-teacher"></i> ${workshop.instructor}</p>
                <div class="workshop-footer">
                    <span class="seats"><i class="fas fa-users"></i> ${workshop.seats} مقعد متبقي</span>
                    <button class="btn btn-primary">سجل الآن</button>
                </div>
            `;
            workshopsContainer.appendChild(workshopCard);
        });
    }

    // Handle expert form submission
    const expertForm = document.getElementById('expertForm');
    if (expertForm) {
        expertForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const question = document.getElementById('question').value;
            
            // Here you would typically send this data to a server
            console.log('Expert Question Submitted:', { name, email, question });
            
            // Show success message
            alert('شكراً لتواصلك معنا! سنقوم بالرد على استفسارك في أقرب وقت ممكن.');
            
            // Reset form
            expertForm.reset();
        });
    }

    // Add active class to current section in navigation
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Initialize functions
    createNewsCards();
    createWorkshopCards();
    
    // Add scroll event listener for active navigation
    window.addEventListener('scroll', setActiveNavLink);
    
    // Set initial active nav link
    setActiveNavLink();

    // Mobile menu toggle (will be added when implementing responsive design)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    if (nav) {
        nav.prepend(mobileMenuToggle);
        
        mobileMenuToggle.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .workshop-card, .news-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Initial animation check
animateOnScroll();
