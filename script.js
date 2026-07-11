function checkPassword() {
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (password === "25/9") {
        window.location.href = "home.html";
    } else {
        error.textContent = "❌ كلمة السر غير صحيحة";
    }
}
