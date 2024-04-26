Documentación para la función validarEmailGmail

## instalacion

```bash
npm install is-email-demo
```

## Descripción:

La función validarEmailGmail toma una dirección de correo electrónico como entrada y verifica si tiene un formato válido y si pertenece a un dominio de Gmail (sin verificar si la cuenta existe).

## Argumentos:

correo: Una cadena de texto que representa la dirección de correo electrónico a validar.
Retorno:

La función devuelve un objeto con las siguientes propiedades:

- `valido`: Un valor booleano que indica si la dirección de correo electrónico tiene un formato `válido` (true) o no (false).
`mensajeError`: Una cadena de texto que contiene un mensaje de error en caso de que el formato de la dirección de correo electrónico no sea válido.
`esGmail`: Un valor booleano que indica si la dirección de correo electrónico pertenece a un dominio de Gmail (true) o no (false).
- `mensajeExito`: Una cadena de texto que contiene un mensaje de éxito en caso de que la dirección de correo electrónico tenga un formato válido y sea de Gmail.
Ejemplo de uso:

```javascript
import { validarEmailGmail } from './isEmail.js'
const resultadoValidacion = validarEmailGmail("micorreo@gmail.com");

if (resultadoValidacion.valido) {
  if (resultadoValidacion.esGmail) {
    console.log("¡El correo electrónico es válido y pertenece a Gmail!");
  } else {
    console.log("¡El correo electrónico es válido, pero no pertenece a Gmail!");
  }
} else {
  console.error("Error: " + resultadoValidacion.mensajeError);
}
```

## Explicación:

Expresión regular: La función define una expresión regular (emailRegex) para validar el formato general de un correo electrónico. Esta expresión regular coincide con patrones comunes de direcciones de correo electrónico, como "[dirección de correo electrónico eliminada]".
Validación de formato: La función utiliza el método test() de la expresión regular para verificar si la dirección de correo electrónico (correo) ingresada coincide con el formato esperado. Si no coincide, la función retorna un objeto indicando que el formato no es válido.
Separar partes del correo: Si el formato es válido, la función separa la dirección de correo electrónico en partes (partesCorreo) utilizando el símbolo "@". La parte después del "@" se guarda como dominio.
Validación de Gmail (sin verificación completa): La función verifica si el dominio en minúsculas (dominio.toLowerCase()) es igual a "gmail.com". Si coincide, la función retorna un objeto indicando que la dirección de correo electrónico es válida y probablemente sea de Gmail. Si no coincide, la función retorna un objeto indicando que la dirección de correo electrónico es válida, pero no es de Gmail.

## Consideraciones:

Esta función no verifica si la cuenta de correo electrónico realmente existe en Gmail. Solo realiza una validación básica del formato y dominio.
Existen servicios de terceros que ofrecen la verificación completa de direcciones de correo electrónico, incluyendo la existencia de la cuenta. Sin embargo, su uso generalmente implica la creación de una cuenta y/o la utilización de planes pagos.