async function generatePass(chars, length) {
  let clave = "";
  while (!(clave.length === length)) {
    let array = chars.split("");
    var random = array[Math.floor(Math.random() * array.length)];
    clave += random;
  }
  return clave;
}
/*Chars tiene que ser una CADENA,
cualquier caracter que coloques tendra una probabilidad de aparecer en el resultado*/
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-@";
generatePass(chars, 20).then((pass) => console.log(pass));
// El número no tiene limite, así que puedes hacerlo hasta mucho más de 10k caracteres (No es recomendable ya que da una cadena de texto gigante)
