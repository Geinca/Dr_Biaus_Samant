document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});




// nav section
document.addEventListener("DOMContentLoaded", function () {
    // Load navbar component dynamically
    fetch("components/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav").innerHTML = data;
            inithammenu();
        });
});

function inithammenu(){

    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Change icon
        const icon = this.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
}






// hero
document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/hero.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("hero").innerHTML = data;
            initheroc();  // Initialize carousel after loading hero section
        });
});

function initheroc() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    const prevArrow = document.querySelector('.arrow-left');
    const nextArrow = document.querySelector('.arrow-right');
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to show slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // Next slide function
    function nextSlide() {
        let newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }

    // Previous slide function
    function prevSlide() {
        let newIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Auto slide every 5 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Event listeners
    nextArrow.addEventListener('click', nextSlide);
    prevArrow.addEventListener('click', prevSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            clearInterval(autoSlideInterval);
            showSlide(parseInt(this.getAttribute('data-slide')));
            startAutoSlide();
        });
    });

    // Pause auto slide on hover
    document.querySelector('.hero-carousel').addEventListener('mouseenter', function() {
        clearInterval(autoSlideInterval);
    });

    // Resume auto slide when mouse leaves
    document.querySelector('.hero-carousel').addEventListener('mouseleave', startAutoSlide);

    // Start auto slide
    startAutoSlide();
}




document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});



// infodr
document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/infodr.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("info").innerHTML = data;
             // Initialize carousel after loading hero section
        });
});


document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/service.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("service").innerHTML = data;
            // Initialize carousel after loading hero section
        });
});

document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/blog.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("blog").innerHTML = data;
           // Initialize carousel after loading hero section
        });
});



document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/video.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("video").innerHTML = data;
            initvideo()// Initialize carousel after loading hero section
        });
});

// video Slider functionality
function initvideo(){

    const carousel = document.querySelector('.video-carousel');
    const items = document.querySelectorAll('.video-item');
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    const itemCount = items.length;
    let itemWidth = items[0].offsetWidth + 25; // width + gap
    
    // Create dots
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    function updateSlider() {
        // For infinite loop
        if (currentIndex >= itemCount) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = itemCount - 1;
        }
        
        carousel.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % itemCount;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateSlider();
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Handle window resize
    function handleResize() {
        itemWidth = items[0].offsetWidth + 25;
        updateSlider();
    }
    
    window.addEventListener('resize', handleResize);
    
    // Initialize
    updateSlider();
    
    
    let slideInterval = setInterval(nextSlide, 5000);
    
    carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

}


document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/testimonial.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("test").innerHTML = data;
            inittest();  // Initialize carousel after loading hero section
        });
});











function inittest(){

    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = slides.length;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentSlide = index;
    }

    function moveSlide(index) {
        showSlide(index);
        resetAutoSlide(); // Restart auto-slide on manual navigation
    }

    function nextSlide() {
        let newIndex = (currentSlide + 1) % totalSlides;
        showSlide(newIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000); // Change slide every 5 seconds
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Initialize slider
    showSlide(currentSlide);
    startAutoSlide();

    // Attach event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => moveSlide(index));
    });

}



document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/aboutdr.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("aboutdr").innerHTML = data;
            inittest();  // Initialize carousel after loading hero section
        });
});


document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/whatsapp.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("whatsapp").innerHTML = data;  // Initialize carousel after loading hero section
           
        });
});

document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/threebox.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("box").innerHTML = data;  // Initialize carousel after loading hero section
        });
});


document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/appointment.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("appointment").innerHTML = data;  // Initialize carousel after loading hero section
        });
});


document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/qualification.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("qualification").innerHTML = data;  // Initialize carousel after loading hero section
        });
});








function toggleEmergency(event) {
    const emergencyContent = document.getElementById('emergencyContent');

    // Prevent toggle if click happens inside the emergency content
    if (event && event.target.closest('.emergency-content')) return;

    if (emergencyContent.style.display === 'block') {
        emergencyContent.style.display = 'none';
    } else {
        emergencyContent.style.display = 'block';
    }
}





