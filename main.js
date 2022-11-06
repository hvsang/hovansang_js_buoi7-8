var array = [];

function btnResult() {
    var number = document.getElementById("number").value * 1;
    array.push(number);
    document.getElementById("infoResult").innerHTML = array;
}

function btnResult1() {
    var sum = 0;
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        } else {
            sum += 0;
        }
    }
    document.getElementById("infoResult1").innerHTML = sum;
}

function btnResult2() {
    var count = 0;
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }
    document.getElementById("infoResult2").innerHTML = count;
}

function btnResult3() {
    var length = array.length;
    var min = array[0];
    for (var i = 1; i < length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    document.getElementById("infoResult3").innerHTML = min;
}

var array1 = [];

function btnResult4() {
    var number1 = 0;
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (array[i] > 0) {
            number1 = array[i];
            array1.push(number1);
        }
    }
    var min1 = array1[0];
    for (var j = 1; j < array1.length; j++) {
        if (min1 > array1[i]) {
            min1 = array1;
        }
    }
    document.getElementById("infoResult4").innerHTML = min1;
}

function btnResult5() {
    var length = array.length;
    var num = array[length - 1];
    for (var i = length - 1; i >= 0; i--) {
        if (array[i] % 2 === 0) {
            num = array[i];
        } else {
            num = -1;
        }
    }
    document.getElementById("infoResult5").innerHTML = num;
}

function btnResult6() {
    var number1 = document.getElementById("number2").value * 1;
    var number2 = document.getElementById("number3").value * 1;

    var temp = array[number1];
    array[number1] = array[number2];
    array[number2] = temp;

    console.log(array);
    document.getElementById("infoResult6").innerHTML = array;
}

function btnResult7() {
    var length = array.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = i + 1; j < length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    document.getElementById("infoResult7").innerHTML = array;
}

function primeNumber(n) {
    if (n < 2) {
        return 1;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return 1;
        }
    }
    return 0;
}

function btnResult8() {
    var length = array.length;
    var prime = "";
    for (var i = 0; i < length; i++) {
        if (primeNumber(array[i]) === 0) {
            prime += array[i];
            break;
        } else {
            prime += -1;
        }
    }
    document.getElementById("infoResult7").innerHTML = prime;
}

var array2 = [];

function addNumber() {
    var number = document.getElementById("number1").value * 1;
    array2.push(number);
    document.getElementById("addNumber").innerHTML = array2;
}

function btnResult9() {
    var length = array2.length;
    var count = 0;
    for (var i = 0; i < length; i++) {
        if (Number.isInteger(array2[i])) {
            count++;
        }
    }
    document.getElementById("infoResult9").innerHTML = count;
}

function btnResult10() {
    var length = array.length;
    var soDuong = 0;
    var soAm = 0;
    var result = "";

    for (var i = 0; i < length; i++) {
        if (array[i] > 0) {
            soDuong++;
        } else {
            soAm++;
        }
    }

    if (soDuong > soAm) {
        result += "Số dương > Số âm";
    } else {
        result += "Số âm > Số dương";
    }

    document.getElementById("infoResult10").innerHTML = result;
}