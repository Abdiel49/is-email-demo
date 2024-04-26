


import { saludar } from './index.js'
import { validarEmailGmail } from './isEmail.js';

const correo = "abdiel@gmail.com"
const isValid = validarEmailGmail(correo)
console.log('isvalid', isValid);
// const saludo = saludar("carlos")

// console.log(saludo)