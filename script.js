// Typed.js Initialization
if (document.querySelector(".typed-text")) {
  new Typed(".typed-text", {
    strings: [
      "نحن نقدم خدمات 24 ساعة",
      "وايت مياه صالحة للشرب",
      "معنا ستشعر بالفرق",
    ],
    typeSpeed: 50,
    startDelay: 500,
    backSpeed: 30,
    backDelay: 1200,
    loop: true,
    showCursor: false,
    smartBackspace: true,
  });
}

// Loading Screen Handler with Smooth Fadeout & Fallback
function hideLoading() {
  const loading = document.querySelector(".loading");
  if (loading && loading.style.display !== "none") {
    loading.style.transition = "opacity 0.4s ease";
    loading.style.opacity = "0";
    setTimeout(() => {
      loading.style.display = "none";
    }, 400);
  }
}
window.addEventListener("load", hideLoading);
setTimeout(hideLoading, 2500); // Fallback in case of slow CDN response

// Phone Numbers & Contact Links
const mainPhone = "0535944272";
const whatsappNumber = "966535944272"; // Standard WhatsApp format without '+' or leading zero
const whatsappLink = `https://wa.me/${whatsappNumber}`;
const callLink = `tel:${mainPhone}`;

// Safe Conversion Tracking Function
function triggerConversion(url, isNewTab = false) {
  let navigated = false;
  function proceed() {
    if (navigated) return;
    navigated = true;
    if (!url) return;
    if (isNewTab) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  }

  try {
    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-18573249446/_dMrCMvkrr0dEKaXtZhF",
        event_callback: proceed,
      });
    }
  } catch (err) {
    console.warn("Analytics tracking bypassed:", err);
  }

  // Fallback timeout to ensure user is never blocked
  setTimeout(proceed, 300);
}

// Populate WhatsApp Buttons
const whatsappButtons = document.querySelectorAll(".whatsapp-button");
whatsappButtons.forEach((element) => {
  element.innerHTML = `
    <a
      class="num-container whatsapp-container"
      href="${whatsappLink}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر الواتساب"
    >
      <i class="fab fa-whatsapp"></i>
      <h5>تواصل معنا عبر الواتساب</h5>
    </a>`;

  const link = element.querySelector("a");
  if (link) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      triggerConversion(whatsappLink, true);
    });
  }
});

// Populate Call Buttons
const callButtons = document.querySelectorAll(".call-button");
callButtons.forEach((element) => {
  element.innerHTML = `
    <a
      class="num-container call-container"
      href="${callLink}"
      aria-label="تواصل معنا عبر الاتصال المباشر"
    >
      <i class="fas fa-phone-alt"></i>
      <h5>تواصل معنا عبر الاتصال</h5>
    </a>`;

  const link = element.querySelector("a");
  if (link) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      triggerConversion(callLink, false);
    });
  }
});
