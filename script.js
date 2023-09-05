let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let myForm = document.querySelector("#myForm");
let demo = document.querySelector("#demo");
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let input3 = document.querySelector("#input3")
let input4 = document.querySelector("#input4")
function checkValidation() {
    if (!myForm.checkValidity()) {
        if (!input1.checkValidity()) {
            demo.textContent = "Wrong Input: Fill Name";
        } else if (!input2.checkValidity()) {
            demo.textContent = "Wrong Input: Fill Email";
        } else if (!input3.checkValidity()) {
            demo.textContent = "Wrong Number: Password must be at least 8 characters”";
        } else if (!input4.checkValidity()) {
            demo.textContent = "Wrong Number: "+input4.validationMessage;
        }
        demo.classList.remove("change");
        // demo.textContent = "Wrong Input";
    } else {
        demo.classList.add("change");
        demo.textContent = "Submitted";
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    checkValidation()
})
btn2.addEventListener("click", (e) => {
    location.reload()
})