import { PI, somar, subtrair } from "./matematica.js";
import saudarUsuario from "./saudacao.js";
import { formatar as enfeitarTexto } from "./utilitarios.js";

console.log("===== EXERCÍCIO 1: MATEMÁTICA =====");

console.log("Valor de PI:", PI);
console.log("15 + 30 =", somar(15, 30));
console.log("15 - 30 =", subtrair(15, 30));

console.log("\n===== EXERCÍCIO 2: SAUDAÇÃO =====");

console.log(saudarUsuario("Igor"));

console.log("\n===== EXERCÍCIO 3: UTILITÁRIOS =====");

console.log(enfeitarTexto("Node.js Módulos"));