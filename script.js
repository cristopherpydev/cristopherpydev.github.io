const texto = "Hola, soy Cristopher, alias R3D";
    const h1 = document.getElementById("typed-text");
    let i = 0;

    function escribir() {
      if (i < texto.length) {
        h1.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 75);
      }
    }
    escribir();