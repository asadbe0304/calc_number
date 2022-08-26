ism = window.prompt("Ismingizni Kiriting")
console.log(ism)
// yig'indisi 
document.getElementById("submitButton").onclick = function () {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = a + b;
    document.getElementById("cLabel").innerHTML = "Sonlaringiz yig'indis: "  + c;

}
// kvadrat formulasi
document.getElementById("submitButton2").onclick = function () {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = a ** b;
    document.getElementById("cLabel2").innerHTML = "Sonlaringiz kvadrati: "  + c;
}
// ayirmasi formulasi
document.getElementById("submitButton3").onclick = function () {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = a - b;
    document.getElementById("cLabel3").innerHTML = "Sonlaringiz ayirmasi: "  + c;
}
// bo'lish formulasi
document.getElementById("submitButton4").onclick = function () {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = a / b;
    document.getElementById("cLabel4").innerHTML = "Sonlaringiz bo'linamasi: "  + c;
}
// ko'paytmasi formulasi
document.getElementById("submitButton5").onclick = function () {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = a * b;
    document.getElementById("cLabel5").innerHTML = "Sonlaringiz ko'paytmasi: "  + c;
}
