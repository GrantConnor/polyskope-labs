document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    // Basic form validation
    if (name === "" || age === "" || dob === "" || height === "" || weight === "") {
      alert("Please fill out all fields.");
    } else {
      // Display an alert when the form is submitted
      alert("Thank you for signing up! We will message you shortly.");
    }
}

function submitMessage() {
  var form = document.getElementById("messageForm");
  form.style.display = 'none';

  var message = document.getElementById("messageLabel");
  message.textContent = "Thank you! We will try and get back to you as soon as possible!"
}