document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("testimonyForm");

  const modal = document.getElementById("warningModal");
  const closeBtn = document.getElementById("closeModal");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      modal.style.display = "block";
    });
  }

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const applyButtons = document.querySelectorAll(".apply-button");
  const modal = document.getElementById("applicationModal");
  const form = document.getElementById("jobForm");
  const cancelBtn = document.getElementById("cancelBtn");

  const cancelWarningModal = document.getElementById("cancelWarningModal");
  const acceptTermsBtn = document.getElementById("acceptTermsBtn");

  // Open form modal when "Apply" is clicked
  applyButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  });

  // Submit the form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you. Your mandatory application has been received, starting pay for most positions is around 15 cents but you can make up to a dollar per hour.");
    modal.style.display = "none";
  });

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    cancelWarningModal.style.display = "block";
  });

  // Accepting the warning brings back the form
  acceptTermsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cancelWarningModal.style.display = "none";
    modal.style.display = "block"; 
  });

  // Clicking outside closes modals
  window.addEventListener("click", (event) => {
    if (event.target === modal) modal.style.display = "none";
    if (event.target === cancelWarningModal) cancelWarningModal.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const trainingLink = document.getElementById("trainingWarning");
  if (trainingLink) {
    trainingLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("⚠️ This section is still in development.\n\nDisclaimer: Our labor does not require any training, usually prisoners will figure things out as they work the job.");
    });
  }
});

document.getElementById("hotline-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your submission. Your message has been sent into the void.");
    this.reset();
});

document.getElementById("hotline-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your submission. Your message has been forwarded to the appropriate circular file.");
    this.reset();
});