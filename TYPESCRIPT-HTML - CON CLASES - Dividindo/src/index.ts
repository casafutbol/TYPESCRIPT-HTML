import { EtiquetaP } from "./Clases/EtiquetaP";
import { PintarElemento } from "./Clases/PintarElemento";

let unTexto = "por fín é VENRES!!!";

// Creo a instancia a clase EtiquetaP
let instanciaEtiquetaP = new EtiquetaP();

// 1º Creo a referencia,neste caso a P
let etiquetaPCreada = instanciaEtiquetaP.creoReferencia();

// 2º Introduzco o texto 
instanciaEtiquetaP.introduzcoTexto(etiquetaPCreada,unTexto);

// 3º Creo a instancia a clase de Pintar no HTML
let pintoNoHTML = new PintarElemento(document.body)

// 4º Pinto no HTML
pintoNoHTML.pintarOFinal(instanciaEtiquetaP.devolverReferencia())



//let referenciaAPintar = instanciaEtiquetaP.devolverReferencia()
//pintoNoHTML.pintarOFinal(referenciaAPintar);
/**
 * console.log(`etiqueta? ${instanciaEtiquetaP.introduzcoTexto(etiquetaPCreada,unTexto)}`)
console.log('etiqueta2?', instanciaEtiquetaP.devolverReferencia())
 */