function closeNav() {
    let burgerBtn = document.getElementById("burger");
    let navbar = document.getElementById("responsive");
    burgerBtn.classList.add("collapsed");
    navbar.classList.remove("show");
}

function testEmail() {

    let regex = /.+@.+\..+/;
    let resultElt = document.createElement("div");
    let result = regex.test(email.value);

    if (result === false) {
        if (testEmailIndex === false) {
            resultElt.classList.add("alert", "alert-danger");
            resultElt.setAttribute("role", "alert");
            resultElt.textContent = "Email address invalid";
            resultElt.id = "email-invalid";
            email.after(resultElt);
            testEmailIndex = true;
        }
    } else {
        document.getElementById("email-invalid").remove();
        testEmailIndex = false;
    }

}
