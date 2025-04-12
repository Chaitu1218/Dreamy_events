let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};

document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".swiper-slide");
  photos.forEach(photo => {
      photo.addEventListener("click", () => {
          window.location.href = "gallery.html"; 
      });
  });
});

const swiper1 = new Swiper('.swiper-container', {
  loop: true, // Enables looping
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
  },
});




var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


AOS.init({
  duration:800,
  delay:400
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slideElements = document.querySelectorAll(".slide");
    const slideCount = slideElements.length;

    // Clone the first slide and last slide for seamless transitions
    const firstSlideClone = slideElements[0].cloneNode(true);
    const lastSlideClone = slideElements[slideCount - 1].cloneNode(true);
    slides.insertBefore(lastSlideClone, slideElements[0]);
    slides.appendChild(firstSlideClone);

    let currentIndex = 1; // Start from the "real" first slide
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    function nextSlide() {
        currentIndex++;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Reset to the "real" first slide after transitioning to the cloned first slide
        if (currentIndex === slideCount + 1) {
            setTimeout(() => {
                slides.style.transition = "none";
                currentIndex = 1;
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 500); // Match the transition duration
        }
    }

    function prevSlide() {
        currentIndex--;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Reset to the "real" last slide after transitioning to the cloned last slide
        if (currentIndex === 0) {
            setTimeout(() => {
                slides.style.transition = "none";
                currentIndex = slideCount;
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 500); // Match the transition duration
        }
    }

    // Automatically transition slides every 3 seconds
    setInterval(nextSlide, 3000);
});

AOS.init(); // Initialize AOS animations
document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default button behavior

    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const phone = encodeURIComponent(document.getElementById('phone').value);
    const date = encodeURIComponent(document.getElementById('date').value);
    const address = encodeURIComponent(document.getElementById('address').value);
    const plan = encodeURIComponent(document.getElementById('plan').value);
    const msg = encodeURIComponent(document.getElementById('msg').value);

    const message = `Hello!%0A%0AHere are the details submitted through Dreamy Events:%0A%0A` +
                    `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ADate: ${date}%0A` +
                    `Address: ${address}%0APlan: ${plan}%0AMessage: ${msg}`;

    const whatsappURL = `https://wa.me/919714507646?text=${message}`;
    window.open(whatsappURL, '_blank');
});



 function saveData() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        address: document.getElementById("address").value,
        plan: document.getElementById("plan").value,
        msg: document.getElementById("msg").value
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "contact.html";
}


  window.onload = function() {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
        document.getElementById("name").value = formData.name;
        document.getElementById("email").value = formData.email;
        document.getElementById("phone").value = formData.phone;
        document.getElementById("date").value = formData.date;
        document.getElementById("address").value = formData.address;
        document.getElementById("plan").value = formData.plan;
        document.getElementById("msg").value = formData.msg;
    }
};

function loadContent(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '<div class="loading">Loading...</div>'; // Show loading message
    
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found.');
            }
            return response.text();
        })
        .then(data => {
            mainContent.innerHTML = data; // Insert the fetched HTML content
        })
        .catch(error => {
            mainContent.innerHTML = `<p class="error">Error: ${error.message}</p>`; // Handle errors
        });
};

function handleActions() {
    saveData(); // Call the first function
    loadContent('contact.html'); // Call the second function
 }