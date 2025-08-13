// Get elements
const modal = document.getElementById("tournamentModal");
const closeBtn = document.querySelector(".close-btn");
const modalBanner = document.getElementById("modalBanner");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const registrationForm = document.getElementById("registrationForm");
const paymentSection = document.getElementById("paymentSection");
const tngQr = document.getElementById("tngQr");
const tngLink = document.getElementById("tngLink");

// Tournament cards listener
document.querySelectorAll(".tournament-card").forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "block";

        // Get tournament details from dataset attributes
        modalBanner.src = card.dataset.banner;
        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;

        // Set payment details
        tngQr.src = card.dataset.qr;
        tngLink.href = card.dataset.paylink;

        // Reset form & payment section
        registrationForm.style.display = "block";
        paymentSection.style.display = "none";
    });
});

// Close modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// Handle form submission
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration details saved. Please proceed with payment.");
    registrationForm.style.display = "none";
    paymentSection.style.display = "block";
});
