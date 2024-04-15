document.getElementById("verificarBtn").addEventListener("click", function() {
    var idade = document.getElementById("idade").value;
    var resultado = document.getElementById("resultado");
  
    if (idade >= 18) {
      resultado.textContent = "Você é maior de idade.";
    } else {
      resultado.textContent = "Você é menor de idade.";
    }
  });
  