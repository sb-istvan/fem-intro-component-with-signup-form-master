const button = document.querySelector("button");
const inputsArr = document.querySelectorAll("input");

button.addEventListener("click", () => {
    inputsArr.forEach(input => {
        if (!input.validity.valid) {
            input.classList.add("invalid");
            input.nextElementSibling.style.display = "block";
        } else {
            input.classList.remove("invalid");
            input.nextElementSibling.style.display = "none";
        }
    });
});