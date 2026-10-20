const modal = document.getElementById("newsletterModal");
const openButton = document.getElementById("openModal");
const closeButton = document.getElementById("closeModal");
const overlay = document.getElementById("modalOverlay");
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

let modalTimer;
let modalDismissed = false;

function openModal() {
    if (modalDismissed) return;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    emailInput.focus();
}

function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modalDismissed = true;
    clearTimeout(modalTimer);
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});

// Automatically display the modal after 3 seconds.
modalTimer = setTimeout(openModal, 3000);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    errorMessage.textContent = "";
    successMessage.textContent = "";

    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        emailInput.focus();
        return;
    }

    successMessage.textContent =
        "🎉 Thank you for subscribing! Your email is validated.";

    form.reset();
});
