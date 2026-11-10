const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

});

/* Close Menu When Link Clicked */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {


hamburger.classList.remove("active");

navLinks.classList.remove("active");

    });

});

const modal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

function openModal(imageSrc) {
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal)
    {
        closeModal();
    }
}

const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(button => {

    button.addEventListener("click", function() {

        const content =
        this.closest(".content");

        const additionalContent = 
        content.querySelector(
            ".additional-content"
        );

        additionalContent.classList.toggle("show");

        const isExpanded = additionalContent.classList.contains("show");

        if(isExpanded) {

            this.textContent =
            "Read less";

        }else {

            this.textContent =
            "Read more";
        }

    });

});

const WHATSAPP_NUMBER = "2348163813309";

const form = document.getElementById("waForm");
const statusEI = document.getElementById("status");

const rules = {
    name:  v => v.trim().length >= 2,
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    phone: v => /^\+?[0-9\s\-()]{7,20}$/.test(v.trim()),
    message: v => v.trim().length >= 5
};

function check(field) {
    const input = form.elements[field]
    const ok = rules[field](input.value);
    input.closest(".field").classList.toggle("invalid", !ok);
    return ok;
}

// Clear the error as soon as the field becomes valid
Object.keys(rules).forEach(f => {
    form.elements[f].addEventListener("input", () => {
        if (form.elements[f].closest(".field").classList.contains("invalid")) check(f);
    });
    form.elements[f].addEventListener("blur", () => check(f));
});

form.addEventListener("submit", e => {
    e.preventDefault();

    const allValid = Object.keys(rules).map(check).every(Boolean);
    if (!allValid) {
        statusEI.style.color = "var(--error)";
        statusEI.textContent = "Please fix the highlighted fields.";
        return;
    }

    const d = Object.fromEntries(new FormData(form));
    const text =
      "*New website enquiry*\n\n" +
      "*Name:* " + d.name.trim() + "\n" +
      "*Email:* " + d.email.trim() + "\n" +
      "*Phone:* " + d.phone.trim() + "\n\n" +
      "*Message:*\n" + d.message.trim();

    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);

    statusEI.style.color = "var(--brand)";
    statusEI.textContent = "Opening WhatsApp...";
    window.open(url, "_blank", "noopener");
    form.reset();
});