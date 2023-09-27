const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) 
{
    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("websiteError").textContent = "";
    document.getElementById("messageError").textContent = "";

    document.getElementById("name").classList.remove("invalid-input");
    document.getElementById("email").classList.remove("invalid-input");
    document.getElementById("website").classList.remove("invalid-input");
    document.getElementById("message").classList.remove("invalid-input");

    const nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") 
    {
        document.getElementById("nameError").textContent = "This field is required";
        nameInput.classList.add("invalid-input");
        valid = false;
    }

    const emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailInput.value.trim() === "") 
    {
        document.getElementById("emailError").textContent = "This field is required";
        emailInput.classList.add("invalid-input");
        valid = false;
    } 
    else if (!emailPattern.test(emailInput.value.trim())) 
    {
        document.getElementById("emailError").textContent = "A valid email address is required";
        emailInput.classList.add("invalid-input");
        valid = false;
    }

    const websiteInput = document.getElementById("website");
    const websitePattern = /^(https?:\/\/)?([\da-zA-Z.-]+)\.([a-zA-Z.]{2,6})([\/\w.-]*)*\/?$/;
    if(websiteInput.value.trim() === "")
    {
        document.getElementById("websiteError").textContent = "This field is required";
        websiteInput.classList.add("invalid-input");
        valid = false;
    }
    else if (websiteInput.value.trim() !== "" && !websitePattern.test(websiteInput.value.trim())) 
    {
        document.getElementById("websiteError").textContent = "A valid URL is required";
        websiteInput.classList.add("invalid-input");
        valid = false;
    }

    const messageInput = document.getElementById("message");
    if (messageInput.value.trim() === "") 
    {
        document.getElementById("messageError").textContent = "This field is required";
        messageInput.classList.add("invalid-input");
        valid = false;
    }

    if (!valid) 
    {
        event.preventDefault(); 
    }
});
