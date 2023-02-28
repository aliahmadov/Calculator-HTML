

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