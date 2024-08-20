const $ = document;
var product_item = $.getElementById("product-item");
var product = $.getElementById("Product");
var search_icon = $.getElementById("search-icon");
var left_item = $.getElementById("left-item");
var search_box = $.getElementById("search-box");
var close_btn = $.getElementById("close-btn");
var search_input = $.getElementById("search-input");
var search_btn = $.getElementById("search-btn");
var search_icon2 = $.getElementById("search-icon2");
var search_box2 = $.getElementById("search-box2");
var close_btn2 = $.getElementById("close-btn2");
var search_input2 = $.getElementById("search-input2");
var search_btn2 = $.getElementById("search-btn2");
var carts_item_num = $.getElementById("carts-item");
const scrollToTopBtn = $.getElementById("scrollToTopBtn");
const number_item = $.getElementById("number-item");
const login_icon = $.getElementById("login-icon");
const login_form = $.getElementById("form");
const form_close = $.getElementById("form-close");
const sign_section_btn = $.getElementById("sign-section-btn");
const login_section_btn = $.getElementById("login-section-btn");
const login_pages = $.getElementById("login-pages");
const sign_up_pages = $.getElementById("sign-up-pages");
const back_btn = $.getElementById("back-btn");
const product_section_all = $.getElementById("product-section-all");
const shop_cart = $.getElementById("shop-cart");
const back_carts = $.getElementById("back-carts");
const shop_icon2 = $.getElementById("shop-icon2");
const login_signin2 = $.getElementById("login-signin2");

window.addEventListener("load", function() {
  const loader = document.querySelector('.loader-container');
  document.body.style.overflowY = "hidden";
  // نمایش لودر به مدت 5 ثانیه
  setTimeout(function() {
    document.body.style.overflowY = "auto";
    loader.style.display = 'none'; // پنهان کردن لودر
  }, 5000); // 5000 میلی‌ثانیه = 5 ثانیه
});

shop_cart.addEventListener("click", function () {
  product_section_all.style.display = "block";
});

shop_icon2.addEventListener("click", function () {
  product_section_all.style.display = "block";
});

back_carts.addEventListener("click", function () {
  product_section_all.style.display = "none";
});

back_btn.addEventListener("click", function (params) {
  sign_up_pages.style.display = "none";
  login_pages.style.display = "none";
  login_section_btn.style.visibility = "visible";
  sign_section_btn.style.visibility = "visible";
  back_btn.style.display = "none";
});

sign_section_btn.addEventListener("click", function () {
  sign_up_pages.style.display = "flex";
  login_section_btn.style.visibility = "hidden";
  sign_section_btn.style.visibility = "hidden";
  back_btn.style.display = "block";
  back_btn.style.background = "#007BFF";
});

login_section_btn.addEventListener("click", function () {
  login_pages.style.display = "flex";
  login_section_btn.style.visibility = "hidden";
  sign_section_btn.style.visibility = "hidden";
  back_btn.style.display = "block";
  back_btn.style.background = "#00d131";
});

form_close.addEventListener("click", function () {
  login_form.style.display = "none";
  sign_up_pages.style.display = "none";
  login_pages.style.display = "none";
  back_btn.style.display = "none";
});

login_icon.addEventListener("click", function () {
  login_form.style.display = "block";
  login_section_btn.style.visibility = "visible";
  sign_section_btn.style.visibility = "visible";
});

login_signin2.addEventListener("click", function () {
  login_form.style.display = "block";
  login_section_btn.style.visibility = "visible";
  sign_section_btn.style.visibility = "visible";
});

let cartItems = 0;
function addToCart() {
  ++cartItems;
  carts_item_num.innerHTML = cartItems;
  number_item.innerHTML = cartItems;
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      carts_item_num.classList.add("vibrate");
      number_item.classList.add("vibrate");
      setTimeout(() => {
        carts_item_num.classList.remove("vibrate");
        number_item.classList.remove("vibrate");
      }, 100); // مدت زمان ویبره
    }, i * 100); // فاصله بین ویبره‌ها
  }
}

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function menuhandle() {
  var x = document.getElementsByClassName("all-items")[0];
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

product.addEventListener("mouseover", function () {
  product_item.style.visibility = "visible";
  product.style.color = "#0073d0";
});
product.addEventListener("mouseout", function () {
  product_item.style.visibility = "hidden";
  product.style.color = "#000";
});

product_item.addEventListener("mouseover", function () {
  product_item.style.visibility = "visible";
  product.style.color = "#0073d0";
});
product_item.addEventListener("mouseout", function () {
  product_item.style.visibility = "hidden";
  product.style.color = "#000";
});

search_icon.addEventListener("click", function () {
  left_item.style.visibility = "hidden";
  search_box.style.visibility = "visible";
});

close_btn.addEventListener("click", function () {
  left_item.style.visibility = "visible";
  search_box.style.visibility = "hidden";
  search_input.value = "";
  search_btn.style.backgroundColor = "#e8e8e8";
  search_btn.style.color = "#B9B9B9";
  search_btn.style.cursor = "not-allowed";
});

search_input.addEventListener("input", function () {
  var search_input_value = search_input.value;

  if (search_input_value !== "") {
    search_btn.style.backgroundColor = "#0095e0";
    search_btn.style.color = "#ffffff";
    search_btn.style.cursor = "pointer";
  } else {
    search_btn.style.backgroundColor = "#e8e8e8";
    search_btn.style.color = "#B9B9B9";
    search_btn.style.cursor = "not-allowed";
  }
});

search_btn.addEventListener("mouseover", function () {
  if (search_input.value === "") {
    search_btn.style.cursor = "not-allowed";
  }
});

search_btn.addEventListener("mouseover", function () {
  if (search_input.value !== "") {
    search_btn.style.cursor = "pointer";
  }
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

search_icon2.addEventListener("click", function () {
  search_icon2.style.visibility = "hidden";
  search_box2.style.visibility = "visible";
});

close_btn2.addEventListener("click", function () {
  search_icon2.style.visibility = "visible";
  search_box2.style.visibility = "hidden";
  search_input2.value = "";
  search_btn2.style.backgroundColor = "#e8e8e8";
  search_btn2.style.color = "#B9B9B9";
  search_btn2.style.cursor = "not-allowed";
});

search_input2.addEventListener("input", function () {
  var search_input2_value = search_input2.value;

  if (search_input2_value !== "") {
    search_btn2.style.backgroundColor = "#0095e0";
    search_btn2.style.color = "#ffffff";
    search_btn2.style.cursor = "pointer";
  } else {
    search_btn2.style.backgroundColor = "#e8e8e8";
    search_btn2.style.color = "#B9B9B9";
    search_btn2.style.cursor = "not-allowed";
  }
});

search_btn2.addEventListener("mouseover", function () {
  if (search_input2.value === "") {
    search_btn2.style.cursor = "not-allowed";
  }
});

search_btn2.addEventListener("mouseover", function () {
  if (search_input2.value !== "") {
    search_btn2.style.cursor = "pointer";
  }
});
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  // به روز رسانی currentSlide
  currentSlide += direction;

  // اگر به آخرین اسلاید رسید، به اسلاید اول بروید
  if (currentSlide >= totalSlides) {
    currentSlide = 0; // به اسلاید اول بروید
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // به آخرین اسلاید بروید
  }

  const slider = document.querySelector(".slider");
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

// قابلیت لمسی
let startX;
let endX;

const sliderElement = document.querySelector(".slider");

sliderElement.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

sliderElement.addEventListener("touchmove", (event) => {
  endX = event.touches[0].clientX;
});

sliderElement.addEventListener("touchend", () => {
  if (startX > endX + 50) {
    moveSlide(1); // به اسلاید بعدی بروید
  } else if (startX < endX - 50) {
    moveSlide(-1); // به اسلاید قبلی بروید
  }
});
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
