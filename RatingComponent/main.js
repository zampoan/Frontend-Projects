const submitBtn = document.getElementById("submit-btn")
const ratingBtn = document.querySelectorAll(".rating-btn")
const choiceEl = document.querySelector("#choice-el")
let activeButton = null;
console.log(submitBtn)
console.log(ratingBtn)
console.log(choiceEl)

function print() {
    console.log("Working...")
}

//Hover over button
ratingBtn.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = '#7C8894';
        item.style.color = '#DBDCDE';
    })

    //Stop hovering over button
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = "";
        item.style.color = "";
    })

    //Clicks it
    item.addEventListener('click', () => {
        item.style.backgroundColor = "#FA7712"
    })
})


//Next page
submitBtn.addEventListener("click", function() {
    console.log("Go to thankyou page")
    window.location.href = "thanks.html";
})

//output choice
