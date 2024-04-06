
function myFunction() {
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand1").value;
    var luongtong = document.getElementById("result").value;
    var luongthang = parseInt(operand1)*parseInt(operand2);
    luongtong.textContent = luongthang.toString();
}

