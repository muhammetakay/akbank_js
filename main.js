function oddishOrEvenish(num) {
    var text = num.toString();
    var total = 0;
    for(var i = 0; i < text.length; i++) {
        total += parseInt(text[i]);
    }
    return total % 2 === 1 ? "Odd" : "Even";
}
