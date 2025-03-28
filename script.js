document.addEventListener("DOMContentLoaded", function () {
    // Login Function
    window.login = function () {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let errorMessage = document.getElementById("error-message");

        if (username === "admin" && password === "1234") {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        } else {
            errorMessage.textContent = "Invalid Username or Password!";
        }
    };
});