  // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.service-card, .testimonial-card, .about-image');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Set initial state for animated elements
        document.querySelectorAll('.service-card, .testimonial-card, .about-image').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);


        //home page testimonials----//
        const carousel = document.querySelector('.testimonial-carousel');

let scrollAmount = 0;
const scrollStep = 310; // card width + gap
const delay = 3000; // 3 seconds

setInterval(() => {
    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth){
        scrollAmount = 0;
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        scrollAmount += scrollStep;
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
}, delay);



//home page blog----------------------//
 const categoryButtons = document.querySelectorAll('.category-btn');
        const blogCards = document.querySelectorAll('.blog-card');

        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all
                categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const category = btn.getAttribute('data-category');

                blogCards.forEach(card => {
                    if(category === 'all' || card.getAttribute('data-category') === category){
                        card.style.display = 'flex';
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

///About page timeline

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => {
    observer.observe(item);
  });
});


// Services section service page

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".servicesPage-card");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));
  });

//specialized care services service page

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".glass-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200); // stagger delay (200ms apart)
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
  });


  //js for dropdown control

   document.addEventListener("DOMContentLoaded", function () {
    const servicesLink = document.getElementById("servicesDropdown");
    const dropdownMenu = servicesLink.nextElementSibling;

    // Handle click
    servicesLink.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        // Mobile → block dropdown, go directly to services.html
        e.preventDefault();
        window.location.href = servicesLink.getAttribute("href");
      } else {
        // Desktop → allow hover for dropdown, redirect on click
        window.location.href = servicesLink.getAttribute("href");
      }
    });

    // Prevent Bootstrap default toggle on mobile
    if (window.innerWidth < 992 && dropdownMenu) {
      dropdownMenu.remove(); // remove dropdown completely on mobile
    }
  });

  //shrunk navbar
  window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    });
