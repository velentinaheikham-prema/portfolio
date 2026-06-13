function showMessage() {
  const messageEl = document.getElementById("message");
  messageEl.innerText = "Thank you for reaching out! I will contact you soon 😊";
  messageEl.classList.add("show");
  
  // Hide message after 5 seconds
  setTimeout(() => {
    messageEl.classList.remove("show");
  }, 5000);
}
