emailjs.init({
  publicKey: "d2EW-5E-3Lv66bkPj",
});

const openContact = document.getElementById("open-contact");
const closeContact = document.getElementById("close-contact");
const contactModal = document.getElementById("contact-modal");
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

openContact.addEventListener("click", (event) => {
  event.preventDefault();
  contactModal.classList.remove("hidden");
});

closeContact.addEventListener("click", () => {
  contactModal.classList.add("hidden");
});

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  contactStatus.textContent = "Sending...";

  emailjs.sendForm(
      "service_zq4sg0o",
      "template_06o99ce",
      this,
  ).then(() => {
    contactStatus.textContent = "Message sent. Thank you!";
    contactForm.reset();
  }).catch((error) => {
    contactStatus.textContent = "Something went wrong. Please try again.";
    console.error(error);
  });
});