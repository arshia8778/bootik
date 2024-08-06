var product_item = document.getElementById("product-item");
var product = document.getElementById("Product");
var search_icon = document.getElementById("search-icon");
var left_item = document.getElementById("left-item");
var search_box = document.getElementById("search-box");
var close_btn = document.getElementById("close-btn");
var search_input = document.getElementById("search-input");
var search_btn = document.getElementById("search-btn");
var search_icon2 = document.getElementById("search-icon2");
var search_box2 = document.getElementById("search-box2");
var close_btn2 = document.getElementById("close-btn2");
var search_input2 = document.getElementById("search-input2");
var search_btn2 = document.getElementById("search-btn2");

// نمایش منوی محصولات
product.addEventListener("mouseover", function () {
  product_item.style.visibility = "visible";
  product.style.color = "#009ae5";
});
product.addEventListener("mouseout", function () {
  product_item.style.visibility = "hidden";
  product.style.color = "#000";
});

// نمایش منوی محصولات هنگام ماوس‌اور روی آن
product_item.addEventListener("mouseover", function () {
  product_item.style.visibility = "visible";
  product.style.color = "#009ae5";
});
product_item.addEventListener("mouseout", function () {
  product_item.style.visibility = "hidden";
  product.style.color = "#000";
});

// نمایش جعبه جستجو
search_icon.addEventListener("click", function () {
  left_item.style.visibility = "hidden";
  search_box.style.visibility = "visible";
});

// بستن جعبه جستجو
close_btn.addEventListener("click", function () {
  left_item.style.visibility = "visible";
  search_box.style.visibility = "hidden";
  search_input.value = "";
  search_btn.style.backgroundColor = "#e8e8e8"; // برگرداندن رنگ دکمه به حالت قبلی
  search_btn.style.color = "#B9B9B9"; // برگرداندن رنگ متن دکمه به حالت قبلی
  search_btn.style.cursor = "not-allowed"; // تغییر شکل ماوس به not-allowed
});

// تغییر رنگ دکمه بر اساس ورودی
search_input.addEventListener("input", function () {
  var search_input_value = search_input.value; // دریافت مقدار ورودی

  if (search_input_value !== "") {
    // اگر ورودی خالی نیست
    search_btn.style.backgroundColor = "#0095e0"; // تغییر رنگ دکمه
    search_btn.style.color = "#ffffff"; // تغییر رنگ متن دکمه
    search_btn.style.cursor = "pointer"; // تغییر شکل ماوس به pointer
  } else {
    // اگر ورودی خالی است
    search_btn.style.backgroundColor = "#e8e8e8"; // برگرداندن رنگ دکمه به حالت قبلی
    search_btn.style.color = "#B9B9B9"; // برگرداندن رنگ متن دکمه به حالت قبلی
    search_btn.style.cursor = "not-allowed"; // تغییر شکل ماوس به not-allowed
  }
});

// تغییر شکل ماوس به not-allowed وقتی ماوس روی دکمه است و ورودی خالی است
search_btn.addEventListener("mouseover", function () {
  if (search_input.value === "") {
    search_btn.style.cursor = "not-allowed"; // تغییر شکل ماوس به not-allowed
  }
});

// تغییر شکل ماوس به pointer وقتی ماوس روی دکمه است و ورودی خالی نیست
search_btn.addEventListener("mouseover", function () {
  if (search_input.value !== "") {
    search_btn.style.cursor = "pointer"; // تغییر شکل ماوس به pointer
  }
});

// تنظیمات Swiper
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

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

search_icon2.addEventListener("click", function () {
  search_icon2.style.visibility = "hidden";
  search_box2.style.visibility = "visible";
});

close_btn2.addEventListener("click", function () {
  search_icon2.style.visibility = "visible";
  search_box2.style.visibility = "hidden";
  search_input2.value = "";
  search_btn2.style.backgroundColor = "#e8e8e8"; // برگرداندن رنگ دکمه به حالت قبلی
  search_btn2.style.color = "#B9B9B9"; // برگرداندن رنگ متن دکمه به حالت قبلی
  search_btn2.style.cursor = "not-allowed"; // تغییر شکل ماوس به not-allowed
});

// تغییر رنگ دکمه بر اساس ورودی
search_input2.addEventListener("input", function () {
  var search_input2_value = search_input2.value; // دریافت مقدار ورودی

  if (search_input2_value !== "") {
    // اگر ورودی خالی نیست
    search_btn2.style.backgroundColor = "#0095e0"; // تغییر رنگ دکمه
    search_btn2.style.color = "#ffffff"; // تغییر رنگ متن دکمه
    search_btn2.style.cursor = "pointer"; // تغییر شکل ماوس به pointer
  } else {
    // اگر ورودی خالی است
    search_btn2.style.backgroundColor = "#e8e8e8"; // برگرداندن رنگ دکمه به حالت قبلی
    search_btn2.style.color = "#B9B9B9"; // برگرداندن رنگ متن دکمه به حالت قبلی
    search_btn2.style.cursor = "not-allowed"; // تغییر شکل ماوس به not-allowed
  }
});

// تغییر شکل ماوس به not-allowed وقتی ماوس روی دکمه است و ورودی خالی است
search_btn2.addEventListener("mouseover", function () {
  if (search_input2.value === "") {
    search_btn2.style.cursor = "not-allowed"; // تغییر شکل ماوس به not-allowed
  }
});

// تغییر شکل ماوس به pointer وقتی ماوس روی دکمه است و ورودی خالی نیست
search_btn2.addEventListener("mouseover", function () {
  if (search_input2.value !== "") {
    search_btn2.style.cursor = "pointer"; // تغییر شکل ماوس به pointer
  }
});

var swiper = new Swiper(".featured-slider", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
      item.classList.toggle('active');
  });
});