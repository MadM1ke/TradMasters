// Form
jQuery(document).ready(function () {
   jQuery("form").submit(function () {
      var form_data = jQuery(this).serialize();
      jQuery.ajax({
         type: "POST", //
         url: "sendform.php",
         data: form_data,
         success: swal({
            title: "Спасибо за заявку!",
            type: "success",
            showConfirmButton: false,
            timer: 2000,
         }),
      });
      $(this).find("input, textarea").prop("disabled", true);
      event.preventDefault();
   });
});

//Marquee
$(document).ready(function () {
   $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 520,
            settings: {
               slidesToShow: 3,
            },
         },
      ],
   });
});

// Burger - меню
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".header__link");
let headerBlock = document.querySelector(".header");

burger.addEventListener("click", function () {
   burger.classList.toggle("burger--active");
   menu.classList.toggle("header__nav--active");
});

headerBlock.addEventListener("click", function () {
   headerBlock.classList.toggle("header-full");
});

menuLinks.forEach((link) =>
   link.addEventListener("click", () => {
      burger.classList.remove("burger--active");
      menu.classList.remove("header__nav--active");
      burger.classList.remove("header-full");
   })
);

// Аккордеон
$(".accordion").accordion({
   heightStyle: "content",
   collapsible: true,
   active: null,
});

// Hero - slider

// startBlocksAnimation();
// function startBlocksAnimation() {
//    let blocks = $(".hero__item-slide");
//    if (blocks.length < 2) return false;
//    let i = 0;
//    setInterval(function () {
//       let currentElement = blocks.eq(i);
//       let nextElement = blocks.eq(i + 1);
//       if (!nextElement.length) {
//          i = 0;
//          nextElement = blocks.eq(i);
//       } else {
//          i++;
//       }
//       hideBlock(currentElement, 400);
//       setTimeout(function () {
//          showBlock(nextElement, 400);
//       }, 401);
//    }, 10000);
// }
// function hideBlock(element, duration) {
//    if (!element || !element.length) return false;
//    element.fadeOut(duration || 400);
// }
// function showBlock(element, duration) {
//    if (!element || !element.length) return false;
//    element.fadeIn(duration || 400);
// }

const slider = document.querySelector(".slider");
const sliderItems = Array.from(slider.children);
const nextBtn = document.querySelector(".pagination__btn-next");
const prevBtn = document.querySelector(".pagination__btn-prev");

sliderItems.forEach(function (slide, index) {
   if (index !== 0) slide.classList.add("slide-hidden");
   slide.dataset.index = index;
   sliderItems[0].setAttribute("data-active", "");
   slide.addEventListener("click", function () {
      showNextSlide("next");
   });
});

nextBtn.onclick = function () {
   showNextSlide("next");
};

prevBtn.onclick = function () {
   showNextSlide("prev");
};

function showNextSlide(direction) {
   const currentSlide = slider.querySelector("[data-active]");
   const currentSlideIndex = +currentSlide.dataset.index;
   currentSlide.classList.add("slide-hidden");
   currentSlide.removeAttribute("data-active");

   let nextSlideIndex;
   if (direction === "next") {
      nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
   } else if (direction === "prev") {
      nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
   }

   const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
   nextSlide.classList.remove("slide-hidden");
   nextSlide.setAttribute("data-active", "");
}

// Open-block

const steps = document.querySelectorAll(".steps__item");
const stepInfo = document.querySelector(".steps__item-info");

for (let step of steps) {
   step.addEventListener("click", () => {
      step.classList.toggle("steps__item--active");

      let activeClick = document.querySelector(".steps__item");
      if (activeClick > 1) {
         activeClick.classList.remove("steps__item--active");
      }
   });
}

const impItem = document.querySelectorAll(".important__item");
const impText = document.querySelector(".important__text");

for (let impBlock of impItem) {
   impBlock.addEventListener("click", () => {
      impBlock.classList.toggle("important__item--active");

      let openClick = document.querySelector(".important__item");
      if (openClick > 1) {
         openClick.classList.remove("important__item--active");
      }
   });
}
