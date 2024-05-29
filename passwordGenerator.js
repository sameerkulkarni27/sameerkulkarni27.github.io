function passwordGenerator() {
    var size = parseInt(document.getElementById("size").value);
    var result = "";

    if (size <= 0) {
        window.alert("Invalid: Enter a positive number for password size.");
        return;
    }

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
    }

    function getNumbers() {
        var length1 = Math.floor(Math.random() * 10) + 48;
        return String.fromCharCode(length1);
    }

    function getLETTERS() {
        var length2 = Math.floor(Math.random() * 25) + 65;
        return String.fromCharCode(length2);
    }

    function getLetters() {
        var length3 = Math.floor(Math.random() * 25) + 97;
        return String.fromCharCode(length3);
    }

    function getSymbols() {
        var symbols = "!#$%&()*/?@_";
        var length4 = Math.floor(Math.random() * 12) + 0;
        return symbols.charAt(length4);
    }

    document.getElementById("psadword").innerHTML = result;
}

function copyText() {
    var text = document.getElementById("psadword").innerText;

    text.select();
    text.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
}
