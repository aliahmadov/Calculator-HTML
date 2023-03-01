

let lightMode = false;




function Turn(id) {
    let btn = document.getElementById(id);
    lightMode = !lightMode;
    let numbtns = document.getElementsByClassName("button-style dark-gray basefont");
    let operatorbtns = document.getElementsByClassName("button-style orange basefont")
    let subcontainer = document.getElementById("sub-container");
    let uplabel = document.getElementById("uplabel");
    let num_text = document.getElementById("num-text");
    let container = document.getElementById("container");
    let title=document.getElementById("title");
    let border = document.getElementById("border");
    if (lightMode) {
        btn.innerHTML = "Light Mode";
        btn.classList.add("light-btn");
        container.classList.add("bg-white");
        title.classList.add("text-dark");
        for (let i = 0; i < numbtns.length; i++) {

            numbtns[i].classList.add("white");
            numbtns[i].addEventListener("mouseover", function () {
                numbtns[i].classList.add("light");
            });

        }
        for (let i = 0; i < operatorbtns.length; i++) {
            operatorbtns[i].classList.add("darkorange");
            operatorbtns[i].addEventListener("mouseover", function () {
                operatorbtns[i].classList.add("light");
            });
        }
        subcontainer.classList.add("bg-white");
        border.classList.add("bg-black");
        uplabel.classList.add("text-gray");
        num_text.classList.add("text-dark");
    }
    else {
        btn.innerHTML = "Dark Mode";
        btn.classList.remove("light-btn");
        container.classList.remove("bg-white");
        title.classList.remove("text-dark");
        for (let i = 0; i < numbtns.length; i++) {
            numbtns[i].classList.remove("white");
            numbtns[i].addEventListener("mouseover", function () {
                numbtns[i].classList.remove("light");
            });
        }

        for (let i = 0; i < operatorbtns.length; i++) {
            operatorbtns[i].classList.remove("darkorange");
            operatorbtns[i].addEventListener("mouseover", function () {
                operatorbtns[i].classList.remove("light");
            });
        }

        subcontainer.classList.remove("bg-white");
        border.classList.remove("bg-black");
        uplabel.classList.remove("text-gray");
        num_text.classList.remove("text-dark");
    }

}


OperatorClicked = false;
ResultValue = 0;

OperationSign = "";

isEqualCLicked = false;

function Number_Click(id) {
    var uplabel = document.getElementById("uplabel")
    var display = document.getElementById("num-text");
    let num_element = document.getElementById(id);

    if (display.innerHTML == "0" || OperatorClicked || isEqualCLicked) {

        display.innerHTML = "";
    }

    if (display.innerHTML == ".") {
        if (!display.innerHTML.includes(".")) {
            display.innerHTML += ".";
        }

    }
    else {
        display.innerHTML += num_element.innerHTML;
        OperatorClicked = false;
        isEqualCLicked = false;
    }

}


function Operator_Click(id) {
    let operator = document.getElementById(id);

    var uplabel = document.getElementById("uplabel")
    var display = document.getElementById("num-text");

    if (!OperatorClicked) {
        if (ResultValue != 0 && !isEqualCLicked) {
            var equalbtn = document.getElementById("equal");
            equalbtn.click();
            if (operator.innerHTML == "/") {
                OperationSign = "/";
                uplabel.innerHTML += display.innerHTML + "÷";
            }

            else if (operator.innerHTML == "X") {
                OperationSign = "*";
                uplabel.innerHTML += display.innerHTML + "x";
            }
            else {
                OperationSign = operator.innerHTML;
                uplabel.innerHTML = display.innerHTML + operator.innerHTML;
            }

            OperatorClicked = true;

        }

        else {
            if (operator.innerHTML == "/") {

                OperationSign = "/";
                uplabel.innerHTML += display.innerHTML + "÷";
                ResultValue = display.innerHTML;
            }

            else if (operator.innerHTML == "X") {
                OperationSign = "*";
                uplabel.innerHTML += display.innerHTML + "x";
                ResultValue = display.innerHTML;
            }

            else {
                OperationSign = operator.innerHTML;
                uplabel.innerHTML += display.innerHTML + operator.innerHTML;
                ResultValue = display.innerHTML;
            }
        }
    }

    OperatorClicked = true;
}


function Equal_Click(id) {
    var uplabel = document.getElementById("uplabel")
    var display = document.getElementById("num-text");
    equalbtn = document.getElementById("equal");
    let result = 0;
    switch (OperationSign) {
        case "+":
            result = Number(ResultValue) + Number(display.innerHTML);
            if (result.toString().includes("."))
                display.innerHTML = result.toFixed(5);
            else
                display.innerHTML = result;
            break;
        case "*":
            result = (Number(ResultValue) * Number(display.innerHTML));
            if (result.toString().includes("."))
                display.innerHTML = result.toFixed(5);
            else
                display.innerHTML = result;
            break
        case "-":
            result = Number(ResultValue) - Number(display.innerHTML);
            if (result.toString().includes("."))
                display.innerHTML = result.toFixed(5);
            else
                display.innerHTML = result;
            break
        case "/":
            result = (Number(ResultValue) / Number(display.innerHTML));
            if (result.toString().includes("."))
                display.innerHTML = result.toFixed(5);
            else
                display.innerHTML = result;
            break;
        case "%":

            result = ((Number(ResultValue) / 100) * Number(display.innerHTML));
            if (result.toString().includes("."))

                display.innerHTML = result.toFixed(5);
            else
                display.innerHTML = result;;

            break;

        default:
            break;

    }

    ResultValue = display.innerHTML;
    uplabel.innerHTML = "";
    isEqualCLicked = true;
}



function Clear_Click(id) {
    var uplabel = document.getElementById("uplabel")
    var display = document.getElementById("num-text");
    display.innerHTML = "";
    uplabel.innerHTML = "";
    ResultValue = 0;

}