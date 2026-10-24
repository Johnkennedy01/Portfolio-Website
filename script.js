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

function sendWhatsApp() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value; 

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    let phoneNumber = '2348163813309'; // CHANGE TO YOUR WHATSAPP NUMBER
    let whatsappMessage = "Hello, my name is "+ name + "%0AEmail: " + email + "%0AMessage: " + message;
    let whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage;

    window.open(whatsappURL, '_blank');
}

const modal =
document.getElementById("imageModal");

const modalImage =
document.getElementById("modalImage");

function openModal(imageSrc)
{
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closeModal()
{
    modal.style.display = "none";
}

window.onclick = function(event)
{
    if(event.target == modal)
    {
        closeModal();
    }
}

const readMoreButtons =
document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(button => {

    button.addEventListener("click", function() {

        const content =
        this.closest(".content");

        const additionalContent = 
        content.querySelector(
            ".additional-content"
        );

        additionalContent.classList.toggle("show"
        );

        const isExpanded = 
        additionalContent.classList.contains("show"
        );

        if(isExpanded) {

            this.textContent =
            "Read less";

        }else {

            this.textContent =
            "Read more";
        }

    });

});