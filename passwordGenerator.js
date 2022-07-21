function myDate() {
    document.getElementById("demo").innerHTML = "Lil Chungus";
}

function myStupid() {
    document.getElementById("stupid").innerHTML = "dumbo";
}

function passwordGenerator() {
    var size = parseInt(document.getElementById("size").value);
    var result = "";
    for (let i = 0; i < size; i++) {
        var set = Math.floor(Math.random() * 4);

        if (set ==  0) {
            result += getLETTERS();
        }
        if (set ==  1) {
            result += getLetters();
        }
        if (set ==  2) {
            result += getSymbols();
        }
        if (set ==  3) {
            result += getNumbers();
        }

        function getNumbers() {
            var length1 = Math.floor(Math.random() * 10) + 48;
            // return parseChar(length1);
            return String.fromCharCode(length1);
        }

        function getLETTERS() {
            var length2 = Math.floor(Math.random() * 25) + 65;
            //return parseChar(length2);
            return String.fromCharCode(length2);
        }

        function getLetters() {
            var length3 = Math.floor(Math.random() * 25) + 97;
            // return parseChar(length3);
            return String.fromCharCode(length3);
        }

        function getSymbols() {
            var symbols = "!#$%&()*/?@_";
            var length4 = Math.floor(Math.random() * 12) + 0;
            // return parseChar(symbols.charAt(length4));
            return symbols.charAt(length4);
        }
    }

    document.getElementById("psadword").innerHTML = result;
}