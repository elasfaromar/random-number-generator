document.getElementById("submit").onclick = function() {
    let min = Number(document.getElementById("min").value);
    let max = document.getElementById("max").value;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("answer").innerHTML = "Random Number: " + random;
}