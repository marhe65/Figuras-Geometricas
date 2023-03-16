/*Area y perimetro de un cuadrado
  Area y perimetro de un triángulo
  Diámetro, perimetro y Area
 */


function areaCuadrado(){
    const lado = document.querySelector('#side').value;
    console.log(lado);
    let area = lado*lado;
    let dato = document.querySelector('#answer');
    dato.textContent = 'El área del cuadrado es: ' + area + 'cm2';
}
function perimetroCuadrado(){
    const lado = document.querySelector('#side').value;
    console.log(lado);
    let perimetro = lado*4;
    let dato = document.querySelector('#answer');
    dato.textContent = 'El perimetro del cuadrado es: ' + perimetro + 'cm';
}
console.log(areaCuadrado());
console.log(perimetroCuadrado());