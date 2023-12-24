function addToCart(){
    alert("Successfully add to cart!")
}

function checkMessage(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    if (name != "" && email != "" && subject != "" && message !=""){
        if (!email.includes("@")) {
            alert("please enter a valid email address.");
        }
        else{
            alert("Your message was sent successfully!");
        }
    }
    else{
        alert("Please fill in all parts in the form.");
    }
}

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