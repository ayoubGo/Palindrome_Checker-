const txtInput = document.querySelector(".inputs input");
const checkbutton = document.querySelector(".inputs button");
textInfo = document.querySelector(".text-info");

// you need to declare a variable before if you want to use it at least call it 
let filterText;

checkbutton.addEventListener("click", () => {
    // here we created a variable to split the filterText.value reverse it
    // and join it again so we can compare it with the filterText 
    textInfo.style.display = "block";
    let reverseText = filterText.split("").reverse().join("");
    
    // If the text is not a palindrome
    if (filterText !== reverseText) {
        document.body.style.backgroundColor = "red";

        // Update innerHTML with the span
        textInfo.innerHTML = `No, <span>'${txtInput.value}'</span> is not a palindrome`;

        // Select the span and change its color to red
        const spanElement = textInfo.querySelector("span");
        spanElement.style.color = "red";
        
        return;
    }
    
    // If the text is a palindrome
    textInfo.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome`;
    document.body.style.backgroundColor = "green";

    // Select the span and change its color to green
    const spanElement = textInfo.querySelector("span");
    spanElement.style.color = "green";
});

txtInput.addEventListener("keyup", () => {
    // removing all the space and special characters
    filterText = txtInput.value.replace(/[^a-zA-Z0-9]/g, "")
    if (filterText) {
        return checkbutton.classList.add("active");
    }
    checkbutton.classList.remove("active");
    textInfo.style.display = "none";
});