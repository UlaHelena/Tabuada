function multiply() {
  var n = document.getElementById("num").value;
  var out = `Tabuada de ${n} é: ` + "<br/>";
  for (var i = 1; i <= 10; i++) {
    out = out + i + " * " + n + " = " + i * n + "<br/>";
  }
  document.getElementById("result").innerHTML = out;
}
