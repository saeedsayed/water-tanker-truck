
let typed = new Typed('.typed-text', {
    strings: ["نحن نقدم خدمات 24 ساعة", " وايت مياه صالحة للشرب", "معنا ستشعر بالفرق"],
    typeSpeed: 50, // سرعة الكتابة بالمللي ثانية
    startDelay: 500, // تأخير قبل بدء الكتابة
    backSpeed: 30, // سرعة المسح بالمللي ثانية
    backDelay: 1000, // تأخير قبل بدء المسح والانتقال للنص التالي
    loop: true, // تكرار الكتابة
    showCursor: false,
    smartBackspace: true // يمسح فقط الأحرف غير المتطابقة مع النص التالي
});
gsap.registerPlugin(ScrollTrigger);

// // Animation for #woman element

let loading = document.querySelector(".loading")
window.onload = function () {
    loading.style.display = 'none';
}

let mainPhone = "0500450712"
let whatsappNumber = "0500450712"
let whatsappLink = "https://wa.me/+9660500450712"
let callLink = `tel:${mainPhone}`

let whatsappButton = document.querySelectorAll(".whatsapp-button")
let callButton = document.querySelectorAll(".call-button")
whatsappButton.forEach(element => {
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
  >
    <i class="fab fa-whatsapp mr-2"></i>
    <h5 style="font-size:20px;">تواصل معنا عبر الواتساب</h5>
  </a>`
});
callButton.forEach(element => {
    element.innerHTML = ` <a
    class="num-container"
    style="
      border: none;
      background-color: white;
      padding: 11px 20px;
      text-decoration: none;
     
    "
    href=${callLink}
  >
    <i class="fas fa-phone-alt mr-2"></i>
    <h5 style="font-size:20px;">تواصل معنا عبر الاتصال</h5>
  </a>`
});
