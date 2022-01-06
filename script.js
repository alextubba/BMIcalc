let Firstname = document.getElementById("FirstName")
let Lastname = document.getElementById("LastName")
let Phone = document.getElementById("Phone")
let Height = document.getElementById("Height")
let Weight = document.getElementById("Weight")
let bmiLabel = document.getElementById("bmi")
let messageLabel = document.getElementById("message")

function Submit() {
    console.log(Height.value)
    let bmi = Math.floor((Weight.value/Height.value/Height.value * 703)*10)/10

    bmiLabel.innerHTML = "Your BMI: " + bmi
    let message = ""
    if (bmi < 18.5) {
        message = "Underweight"
    } else if(bmi < 25) {
        message = "Healthy Weight"
    } else if(bmi < 30) {
        message = "Overweight"
    } else {
        message = "Obesity"
    }

    messageLabel.innerHTML = message
}


function Clear() {
    Firstname.value = "";
    Lastname.value = "";
    Phone.value = "";
    Height.value = "";
    Weight.value = "";
    bmiLabel.innerHTML = "Your BMI:";
    messageLabel.innerText = "Message";
}