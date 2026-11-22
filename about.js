var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var loading = document.querySelector(".loading");
window.onload = function () {
  loading.style.display = "none";
};

let mainPhone = "0535944272";
let whatsappNumber = "0535944272";
let whatsappLink = "https://wa.me/+9660535944272";
let callLink = "tel:966500450712";

let whatsappButton = document.querySelectorAll(".whatsapp-button");
let callButton = document.querySelectorAll(".call-button");
whatsappButton.forEach((element) => {
  element.innerHTML = `<a
    class="num-container"
    style="
      border: none;
      background-color: white;
      padding: 11px 20px;
      text-decoration: none;
    "
    href="${whatsappLink}"
    target="_blank"
    onclick="return gtag_report_conversion('${whatsappLink}');"
  >
    <i class="fab fa-whatsapp mr-2"></i>
    <h5 style="font-size:20px;">تواصل معنا عبر الواتساب</h5>
  </a>`;
});
callButton.forEach((element) => {
  element.innerHTML = ` <a
    class="num-container"
    style="
      border: none;
      background-color: white;
      padding: 11px 20px;
      text-decoration: none;
     
    "
    href="${callLink}"
    onclick="return gtag_report_conversion('${callLink}');"
  >
    <i class="fas fa-phone-alt mr-2"></i>
    <h5 style="font-size:20px;">تواصل معنا عبر الاتصال</h5>
  </a>`;
});
