// Form submission
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector("button[type='submit']");
    const originalText = submitButton.innerHTML;
    const formData = new FormData(form);

    try {
      submitButton.innerHTML = "Sending...";
      submitButton.disabled = true;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  });