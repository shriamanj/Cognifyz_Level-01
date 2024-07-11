const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    console.log("Color has been changed");
    btn.style.backgroundColor = "black";
});

let curDate = new Date(2024, 7, 11, 20);
curDate = curDate.getHours();
let greetings = " ";

function displayGreetings() {
    if (curDate >= 6 && curDate < 12) {
        greetings = "Good Morning";
    } else if (curDate >= 12 && curDate < 17) {
        greetings = "Good Afternoon";
    } else if (curDate >= 17 && curDate < 23) {
        greetings = "Good Evening";
    } else {
        greetings = "Good Night";
    }
    alert(greetings);
}
displayGreetings();

const addBtn = document.getElementById("addButton");
addBtn.addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)) {
        const result = number1 + number2;
        document.getElementById("result").textContent = "Result : " + result;
    } else {
        document.getElementById("result").textContent =
            "Please enter valid numbers";
    }
});
