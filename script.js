console.log("EmailJS Loaded:", emailjs);
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

     emailjs.init("fsz3EHuIq8qZBxX_Z");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let templateParams = {
        to_name:"Ravindu Wickramasinghe",
        from_name: name,
        from_email: email,
        message: message,
    };

    emailjs.send("service_heo39nm", "template_wszilh8", templateParams)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("status").innerHTML = "Message sent successfully!";
        }, function (error) {
            console.log("FAILED...", error);
            document.getElementById("status").innerHTML = "Failed to send message. Try again!";
        });

    document.getElementById("contact-form").reset();
});
