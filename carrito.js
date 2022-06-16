/*


*/
let ORDEN_OREOS = "A";
let ORDEN_GOMITAS="b";
let ORDEN_LAYS="C";

const VALOR_OREOS= 180;
const VALOR_GOMITAS=85;
const VALOR_PAPAS= 280;

/* pago*/

const OPCION_EFECTIVO= "ft";
const OPCION_TARJETA = "cr" ;
const PAGO_CUOTAS = 3 ;

let CANT_OREOS=0;
let CANT_GOMITAS=0;
let CANT_LAYS=0;

let TOTAL_PAGAR=0;






function mandarOrden(id){
    switch (id) {
        case ORDEN_OREOS:
            TOTAL_PAGAR= VALOR_OREOS + CANT_OREOS
            document.querySelector("#ordenPedida").innerHTML=`
            <h2>ORDEN_OREOS</h2>`;
            
            
            break;
    
        default:
            break;
    }
}