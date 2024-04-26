export function validarEmailGmail(correo) {
  // Expresión regular para correo electrónico
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Validar formato de correo electrónico
  if (!emailRegex.test(correo)) {
    return {
      valido: false,
      mensajeError: "Formato de correo electrónico no válido"
    };
  }

  // Separar partes del correo
  const partesCorreo = correo.split("@");
  const dominio = partesCorreo[1];

  // Validar si el dominio es gmail.com (sin verificar si la cuenta existe)
  if (dominio.toLowerCase() === "gmail.com") {
    return {
      valido: true,
      esGmail: true,
      mensajeExito: "Correo electrónico válido y con formato Gmail"
    };
  } else {
    return {
      valido: true,
      esGmail: false,
      mensajeExito: "Correo electrónico válido, pero no es Gmail"
    };
  }
}
