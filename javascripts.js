$(document).ready(function(){
    clickHandler();

});

var input = [''];
var result ;
var indexOne;
var indexTwo;
var decimal = false;
var last_number_press;

function clickHandler(){
    $(".number_buttons").click(numbers);
    $(".operator_buttons").click(operators);
    $("#equal").click(NC);
    $('.buttons_c').click(clear);
    $('#point').click(decimalPress);
    console.log(input);
}

function clear(){
    input = [''];
    console.log(input);
}

function numbers() {
    var numberInputs = $(this).text();
    if(input[0] === "0" && input.length === 1){
        input = [''];
    }
    if(equalCount >= 1){
        input = [''];
    }
    // for(var d = 0; d = input[input.length-1];d++){
    //     if()
    // }
    // if(!isNaN(input[input.length-1])){
    // }
    input[input.length-1] += numberInputs;
    console.log(input);
    equalCount = 0;
}
function decimalPress(){
    if(decimal === true){
        return;
    }
    var decimalInputs = $(this).text();
    input[input.length-1] += decimalInputs;
    console.log(input);
    decimal = true;
}

function operators() {
    decimal = false;
    var operatorInputs = $(this).text();
    if(input[0] === ''){
        return;
    }
        //doMath();
        //input.splice(0, 2, result);
        // input.pop();
        // input.pop(input[input_index-1]);

    if(isNaN(input[input.length-2]) && input.length > 1 && input[input.length-1] == ''){
        input[input.length-2] = operatorInputs;
        console.log(input);
        return;
    }
        input.push('');
        input[input.length-1] += operatorInputs;
        input.push('');
        console.log(input);
        equalCount = 0;

}

function OoO() {
    take_out_last_oper = input[input.length - 2];
    for (var i = 0; i <= input.length - 1; i++) {
        if (input[i] == '*') {
            indexOne = parseFloat(input[(i-1)]);
            indexTwo = parseFloat(input[(i+1)]);
            result = indexOne * indexTwo;
            input.splice((i-1), 3, result);
            i--;
          //  console.log(input);
        }
        if (input[i] == '/') {
            indexOne = parseFloat(input[(i-1)]);
            indexTwo = parseFloat(input[(i+1)]);
            result = indexOne / indexTwo;
            input.splice((i-1), 3, result);
            i--;
          //  console.log(input);
        }
    }
    for(var i = 0; i <= input.length - 1; i++){

        if (input[i] == '+') {
            indexOne = parseFloat(input[(i-1)]);
            indexTwo = parseFloat(input[(i+1)]);
            result = indexOne + indexTwo;
            input.splice((i-1), 3, result);
            i--;
           // console.log(input);
        }
        if (input[i] == '-') {
            indexOne = parseFloat(input[(i-1)]);
            indexTwo = parseFloat(input[(i+1)]);
            result = indexOne - indexTwo;
            input.splice((i-1), 3, result);
            i--;
          //  console.log(input);
        }
        result = input;
    }
    decimal = false;
    if(input == 'Infinity' || input == '-Infinity'){
        input = ('Error');

    }
    if (input.length ===  1){
       // console.log(input);
    }
    // if (input == ''){
    //     input.push('0');
    //     input.splice((i-1),1);
    //    // console.log(input);
    //}
    console.log(input);
}
var last;
var addThis;
var takeOutLastOper;
var equalCount = 0;
var take_out_last_oper;
// var take_out_last_oper = takeOutLastOper;
// function equal(){
//     equalCount++;
//     NC()
// }
function NC(){
    equalCount++;
   // takeOutLastOper = input[input.length - 2];
    for (var i = 0; i <= input.length - 1; i++) {
        if (input[input.length - 1] === '') {
            //takeOutLastOper = input[input.length - 2];
            if (input.length === 1) {
                input.splice((i - 1));
                input.push('0')
            } else {
                //마지막에 emptystring이면 거기에 숫자를 너어줌
                //last = input[input.length - 1];
                takeOutLastOper = input[input.length - 2];
                input.splice((i - 2),2);
                OoO();
                input.push(takeOutLastOper);
                input.push(result);
                // addThis = input[input.length - 3];
                // input.splice((i - 1));
                // input.push(addThis);
            }
        }
    }
    // 0 누르고 = 누르면 이상해지는거 고치기.

    if(equalCount >= 2){
        input.push(take_out_last_oper);
        input.push(result);
    }
    OoO();
}




// function numbers() {
//     var numberInputs = $(this).text();
//     if(input[1]){
//         input_index++;
//         input.push('');
//         if(input[2]){
//             input_index--;
//             input.pop();
//             // input.pop(input[input_index-1]);
//         }
//     }
//     input[input_index] += numberInputs;
//     console.log(input);
// }
// function operators() {
//     var operatorInputs = $(this).text();
//     if(input[2]){
//         input_index = 1;
//         //doMath();
//         //input.splice(0, 2, result);
//     }
//     if(input[1]){
//         input.pop();
//         // input.pop(input[input_index-1]);
//         input_index--;
//     }
//     input_index++;
//     input.push('');
//     input[input_index] += operatorInputs;
//     console.log(input);
//     //
// }

// function doMath(num1,op,num2){
//     num1 = parseFloat(input[0]);
//     num2 = parseFloat(input[2]);
//     var plus = num1 + num2;
//     var minus = num1 - num2;
//     var mult = num1 * num2;
//     var divid = num1 / num2;
//     if(input[1] === '+'){
//         result = plus;
//     } else if(input[1] === '-'){
//         result = minus;
//     } else if(input[1] === '*'){
//         result = mult;
//     } else if(input[1] === '/'){
//         result = divid;
//     }
//     console.log(result);
//     // var save = result;
// }





// function numbers(){
//     var numberInputs = $(this).text();
//     input[input_index] += numberInputs;
//     console.log(input);
// }

//
// if (input_index <= 3) {
//     function numbers() {
//         var numberInputs = $(this).text();
//         if (input[1]) {
//             input_index++;
//             input[input_index] += numberInputs;
//             console.log(input);
//         } else {
//             input[input_index] += numberInputs;
//             console.log(input);
//         }
//     }
//
//     function operators() {
//         var operatorInputs = $(this).text();
//         input_index++;
//         input[input_index] += operatorInputs;
//         console.log(input);
//     }
// }