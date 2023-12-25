// Pop-up notification when "Add to Cart" button in product.html was clicked
function addToCart(){
    alert("Successfully added to cart!")
}

// Pop-up notification when "Submit" button in contact.html was clicked
// Show different text based on presence check of all inputs and email must include "@"
function checkMessage(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    if (name != "" && email != "" && subject != "" && message !=""){
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
        }
        else{
            alert("Your message was sent successfully!");
        }
    }
    else{
        alert("Please fill in all parts in the form.");
    }
}

// Pop-up notification when "Submit" button in recycle.html was clicked
// Show different text based on presence check of all inputs.
function checkRecycle(){
    var image = document.getElementById("uploadBtn").value;
    var text = document.getElementById("Input").value;
    
    if(image != "" && text != ""){
        alert("Submitted. Thanks for saving the planet! :)")
    }
    else{
        alert("Please provide the phone image and description.")
    }
}