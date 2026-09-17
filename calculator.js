function calculator(){
    var validoperators = ["+", "-", "*", "/", "%"];
    var results = [];
    document.write("<table>");
    document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
    while (true){
        // Prompt the user
        var x = prompt("Enter the first number: ");
        if (x === null) break;
        var y = prompt("Enter the second number: ");
        if (y === null) break;
        var operator = prompt("Enter operator, addition (+), subtraction (-), modulus (%), division (/), or multiplication (*): ");
        if (operator === null) break;

        // Clean and verify input
        x = x.trim();
        y = y.trim();
        operator = operator.trim();

        var isXNum = !isNaN(x) && x !== "";
        var isYNum = !isNaN(y) && y !== "";
        var isOpValid = validoperators.indexOf(operator) !== -1;

        var result;
        var isError = false;

        // Calculate input
        if (!isXNum || !isYNum){
            result = "Non-numeric input.";
            isError = true;
        } else if (!isOpValid){
            result = "Non-valid operator.";
            isError = true;
        } else {
            var x = Number(x);
            var y = Number(y);
            var computed;
            switch(operator){
                case "+": computed = x + y; break;
                case "-": computed = x - y; break;
                case "*": computed = x * y; break;
                case "/": computed = (y === 0) ? "Error: divide by zero" : x / y; break;
                case "%": computed = (y === 0) ? "Error: divide by zero" : x % y; break;
            }
            //Validation for division by 0
            if (typeof computed === "number") {
                result = computed.toString();
                results.push(computed);
            } else {
                result = computed;
                isError = true;
            }
        }
        document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
    }
    document.write("</table>");
        //Compute 
    var min, max, avg, total;
    if (results.length > 0){
        min = results[0];
        max = results[0];
        total = 0;
        for (var i = 0; i < results.length; i++){
            if (results[i] < min) min = results[i];
            if (results[i] > max) max = results[i];
            total += results[i];
        }
        avg = total / results.length;
    }
    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
calculator();