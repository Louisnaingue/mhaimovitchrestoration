const formData = new FormData();
formData.append("access_key", "28ef737b-7bd1-40cd-b50a-53f4d304b2bf");
formData.append("name", "John Doe");
formData.append("email", "john@example.com");
formData.append("message", "Hello World!");

const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formData
});