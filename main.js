// tady je místo pro náš program
ctverecek = document.querySelector(".ctverecek");
function zelena() {
  ctverecek.style.backgroundColor = "green";
}
function zluta() {
  ctverecek.style.backgroundColor = "yellow";
}


/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}
function vysledek() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  ctverecek.innerHTML = "Gratulace";
  alert("Gratulace, právě jsi spustila tuto funkci!");
}
