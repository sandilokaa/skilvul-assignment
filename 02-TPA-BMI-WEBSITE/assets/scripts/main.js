const resultCalculating = document.getElementById("resultCalculating");
const btnCount = document.getElementById("btn-count");
const resultBMI = document.getElementById("resultBMI");
const resultIndicator = document.getElementById("resultIndicator");

resultCalculating.style.display = "none";

/* ------ Add Function To Find BMI ------ */

btnCount.addEventListener('click', function(){

    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    

    /* ------ Formula ------ */

    const result = weight / ((height/100) ** 2);

    console.log(result);

    resultCalculating.style.display = "block";

    resultBMI.innerText = result;

    if (result > 30){
        resultIndicator.innerText = "Obesity"
    } else if (result >= 25 && result <= 29.9){
        resultIndicator.innerText = "Overweight"
    } else if (result >= 18.5 & result <= 24.9){
        resultIndicator.innerText = "Normal weight"
    } else {
        resultIndicator.innerText = "Underweight"
    }

    /* ------ End Formula ------ */

});