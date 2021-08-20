import { moneda, cambio } from './data/data.js';

// Seleccionamos los elementos html que vamos a manipular para la app
const $formulario = document.getElementById('formulario');
// <form>
const $listaMoneda = document.getElementById('moneda');
// <select id="moneda">
const $listaCambio = document.getElementById('criptomoneda');
// <select id="criptomoneda">
const $alerta = document.getElementById('principal');
// <div id="principal">

document.addEventListener('click', e =>{
     if(e.target.matches('#borrar')){
          window.location.reload()
     }
})


const $fragmento = document.createDocumentFragment();
const $fragmento2 = document.createDocumentFragment();

// En este forEach le solicitamos 2 parámetros, el primero es el "valor" de cada posición, y segundo el "index" 
// Nota. si le pasaramos un tercer parámetro, adicionalmente retornaría el arreglo entero en cada iteración
moneda.forEach((data,index)=>{
     const $item = document.createElement('option');
     // <option>
     $item.setAttribute('value',index)
     // Se establecen su atributo "value" y le decimos que va ser igual a  ="index"
     // <option value="index">
     $item.textContent = data.name;
     // <option value="index"> data </option>
     $fragmento.appendChild($item) 
     // Lo guardamos como hijo de un documentFragment()
})

cambio.forEach((data,index)=>{
     const $item = document.createElement('option');
     $item.setAttribute('value',index)
     $item.textContent = data.name;
     $fragmento2.appendChild($item)   
})

$listaMoneda.appendChild($fragmento);
$listaCambio.appendChild($fragmento2);
// <select id="moneda">
     // <option value="index"> data </option>
// </select>

$formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     const $valor = document.querySelector('#valorAConvertir').value
     // <input id="valorAConvertir">

     console.log($valor);

     // leer la moneda seleccionada
     const $monedaEntrada = $listaMoneda.options[$listaMoneda.selectedIndex].value;
   
     // leer la criptomoneda seleccionada
     const $monedaSalida = $listaCambio.options[$listaCambio.selectedIndex].value;
 
     const $divMensaje = document.createElement('div');
     $divMensaje.classList.add('text-center', 'alert');
     // <div class="text-center alert"> </div>

     // comprobar que ambos campos tengan algo seleccionado
     if($monedaEntrada == 0 || $monedaSalida == 0) {   
          $divMensaje.classList.add('alert-danger');
          $divMensaje.appendChild(document.createTextNode('Es requisito escoger las monedas'));
          // <div class="text-center alert alert-danger">Es requisito escoger las monedas</div>
          $alerta.appendChild($divMensaje)
          // <div id="principal">
               // <div class="text-center alert alert-danger">Es requisito escoger las monedas</div>
          // </div>

          setTimeout(function() {
               document.querySelector('#principal .alert').remove();
               $formulario.reset();
          }, 3000);
          // Pasados 3 seg removemos la anterior estructura html usando un temporizador
     } 

     const imprimirResultado = (result)=>{
          $divMensaje.classList.add('alert-success');
          $divMensaje.appendChild(document.createTextNode(result));
          $alerta.appendChild($divMensaje)
          let 
          scroll = document.documentElement.scrollTo,
          incrementoScroll =+ (scroll + 50)
          console.log(document.documentElement.scrollTo);
     }


     const convertirDivisa = (a,b,c)=>{
          let
          tasa = ((a * 100) / b) / 100,
          result = Math.round(c * tasa)
          console.log(result);
          imprimirResultado(result)
     }    

     switch ($monedaEntrada) {
          case "1":
               console.log('Dolar')
               switch ($monedaSalida) {
                    case "1":
                         console.log('A: Dolar')
                         convertirDivisa(moneda[1].TasaUSD,cambio[1].TasaUSD,$valor)
                         break;
                    case "2":
                         console.log('A: Peso Mexicano')
                         convertirDivisa(moneda[1].TasaUSD,cambio[2].TasaUSD,$valor)
                         break;
                    case "3":
                         console.log('A: Peso Colombiano')
                         convertirDivisa(moneda[1].TasaUSD,cambio[3].TasaUSD,$valor)
                         break;
                    case "4":
                         console.log('A: Euros')
                         convertirDivisa(moneda[1].TasaUSD,cambio[4].TasaUSD,$valor)
                         break;
                    case "5":
                         console.log('A: Dolar Canadiense')
                         convertirDivisa(moneda[1].TasaUSD,cambio[5].TasaUSD,$valor)
                         break;
                    case "6":
                         console.log('A: Libra Esterlina')
                         convertirDivisa(moneda[1].TasaUSD,cambio[6].TasaUSD,$valor)
                         break;
          
                    default:
                         console.log('opción invalida ')
                         break;
               }
               break;
          case "2":
               console.log('Peso Mexicano ')
               switch ($monedaSalida) {
                    case "1":
                         console.log('A: Dolar')
                         convertirDivisa(moneda[2].TasaUSD,cambio[1].TasaUSD,$valor)
                         break;
                    case "2":
                         console.log('A: Peso Mexicano ')
                         convertirDivisa(moneda[2].TasaUSD,cambio[2].TasaUSD,$valor)
                         break;
                    case "3":
                         console.log('A: Peso Colombiano ')
                         convertirDivisa(moneda[2].TasaUSD,cambio[3].TasaUSD,$valor)
                         break;
                    case "4":
                         console.log('A: Euros')
                         convertirDivisa(moneda[2].TasaUSD,cambio[4].TasaUSD,$valor)
                         break;
                    case "5":
                         console.log('A: Dolar Canadiense')
                         convertirDivisa(moneda[2].TasaUSD,cambio[5].TasaUSD,$valor)
                         break;
                    case "6":
                         console.log('A: Libra Esterlina')
                         convertirDivisa(moneda[2].TasaUSD,cambio[6].TasaUSD,$valor)
                         break;
          
                    default:
                         console.log('opción invalida ')
                         break;
               }
               break;
          case "3":
               console.log('Peso Colombiano ')
               switch ($monedaSalida) {
                    case "1":
                         console.log('A: Dolar')
                         convertirDivisa(moneda[3].TasaUSD,cambio[1].TasaUSD,$valor)
                         break;
                    case "2":
                         console.log('A: Peso Mexicano ')
                         convertirDivisa(moneda[3].TasaUSD,cambio[2].TasaUSD,$valor)
                         break;
                    case "3":
                         console.log('A: Peso Colombiano ')
                         convertirDivisa(moneda[3].TasaUSD,cambio[3].TasaUSD,$valor)
                         break;
                    case "4":
                         console.log('A: Euros')
                         convertirDivisa(moneda[3].TasaUSD,cambio[4].TasaUSD,$valor)
                         break;
                    case "5":
                         console.log('A: Dolar Canadiense')
                         convertirDivisa(moneda[3].TasaUSD,cambio[5].TasaUSD,$valor)
                         break;
                    case "6":
                         console.log('A: Libra Esterlina')
                         convertirDivisa(moneda[3].TasaUSD,cambio[6].TasaUSD,$valor)
                         break;
          
                    default:
                         console.log('opción invalida ')
                         break;
               }
               break;
          case "4":
               console.log('Euros')
               switch ($monedaSalida) {
                    case "1":
                         console.log('A: Dolar')
                         convertirDivisa(moneda[4].TasaUSD,cambio[1].TasaUSD,$valor)
                         break;
                    case "2":
                         console.log('A: Peso Mexicano ')
                         convertirDivisa(moneda[4].TasaUSD,cambio[2].TasaUSD,$valor)
                         break;
                    case "3":
                         console.log('A: Peso Colombiano ')
                         convertirDivisa(moneda[4].TasaUSD,cambio[3].TasaUSD,$valor)
                         break;
                    case "4":
                         console.log('A: Euros')
                         convertirDivisa(moneda[4].TasaUSD,cambio[4].TasaUSD,$valor)
                         break;
                    case "5":
                         console.log('A: Dolar Canadiense')
                         convertirDivisa(moneda[4].TasaUSD,cambio[5].TasaUSD,$valor)
                         break;
                    case "6":
                         console.log('A: Libra Esterlina')
                         convertirDivisa(moneda[4].TasaUSD,cambio[6].TasaUSD,$valor)
                         break;
          
                    default:
                         console.log('opción invalida ')
                         break;
               }
               break;
          case "5":
               console.log('Dolar Canadiense')
               switch ($monedaSalida) {
                    case "1":
                         console.log('A: Dolar')
                         convertirDivisa(moneda[5].TasaUSD,cambio[1].TasaUSD,$valor)
                         break;
                    case "2":
                         console.log('A: Peso Mexicano ')
                         convertirDivisa(moneda[5].TasaUSD,cambio[2].TasaUSD,$valor)

                         break;
                    case "3":
                         console.log('A: Peso Colombiano ')
                         convertirDivisa(moneda[5].TasaUSD,cambio[3].TasaUSD,$valor)

                         break;
                    case "4":
                         console.log('A: Euros')
                         convertirDivisa(moneda[5].TasaUSD,cambio[4].TasaUSD,$valor)
                         break;
                    case "5":
                         console.log('A: Dolar Canadiense')
                         convertirDivisa(moneda[5].TasaUSD,cambio[5].TasaUSD,$valor)
                         break;
                    case "6":
                         console.log('A: Libra Esterlina')
                         convertirDivisa(moneda[5].TasaUSD,cambio[6].TasaUSD,$valor)
                         break;
          
                    default:
                         console.log('opción invalida ')
                         break;
               }
               break;
          case "6":
               console.log('Libra Esterlina')
               switch ($monedaSalida) {
                    case "1":
                         console.log('A: Dolar')
                         convertirDivisa(moneda[6].TasaUSD,cambio[1].TasaUSD,$valor)
                         break;
                    case "2":
                         console.log('A: Peso Mexicano ')
                         convertirDivisa(moneda[6].TasaUSD,cambio[2].TasaUSD,$valor)
                         break;
                    case "3":
                         console.log('A: Peso Colombiano ')
                         convertirDivisa(moneda[6].TasaUSD,cambio[3].TasaUSD,$valor)
                         break;
                    case "4":
                         console.log('A: Euros')
                         convertirDivisa(moneda[6].TasaUSD,cambio[4].TasaUSD,$valor)
                         break;
                    case "5":
                         console.log('A: Dolar Canadiense')
                         convertirDivisa(moneda[6].TasaUSD,cambio[5].TasaUSD,$valor)
                         break;
                    case "6":
                         console.log('A: Libra Esterlina')
                         convertirDivisa(moneda[6].TasaUSD,cambio[6].TasaUSD,$valor)
                         break;
          
                    default:
                         console.log('opción invalida ')
                         break;
               }
               break;

          default:
               console.log('opción invalida ')
               break;
     }

})
