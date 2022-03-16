import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
interface Almacen {    
   codigoA : string,
   nombreA : string,
   stock   : producto[]
};
interface producto {    
  codigoP : string;
  nombreP  : string;
  cantidad : number
};
//////////////////////////////////////
/**
 * AGREGAR ALMACENES
 */

 const A001 :  Almacen = {
  codigoA : "A001",
  nombreA : "Almacen Juanito",
  stock   : []
}
const A002 :  Almacen = {
  codigoA : "A002",
  nombreA : "Almacen Dory",
  stock   : []
}

/**
 * AGREGAR PRODUCTOS
 */

const P001 :  producto = {
  codigoP : "P001",
  nombreP : "AJINOMEN",
  cantidad : 50
}

const P002 : producto = {
  codigoP : "P002",
  nombreP : "LECHE GLORIA",
  cantidad : 60
}

const P003 : producto = {
  codigoP : "P003",
  nombreP : "3 OSITOS",
  cantidad : 80
  
};
const P004 : producto = {
  codigoP : "P004",
  nombreP : "CHOCOLATE PRINCESA",
  cantidad : 90
  
};
const P005 : producto = {
  codigoP : "P004",
  nombreP : "MAZAMORRA MORADA",
  cantidad : 70
  
};
//Fuciones
function agregarProducto(x:any,y:any){
  x.stock.push(y);
};

function quitarProducto(x:any,y:any){
  x.stock.splice(y,1);
};
// Almacen01/ producto01 / Almacen 02
function moverProducto(x:any,y:any,z:any){

  z.stock.push(y);
};
//AGREGAR PRODUCTO
agregarProducto(A001,P001);
agregarProducto(A001,P002);
agregarProducto(A001,P003);
agregarProducto(A002,P004);
agregarProducto(A002,P005);
//MOSTRAR TABLA
console.log("ALMACEN 01")
console.table(A001);
console.log("ALMACEN 02")
console.table(A002);
//QUITAR PRODUCTO
quitarProducto(A002,0);
//MOSTRAR TABLA
console.log("ALMACEN 01")
console.table(A001);
console.log("ALMACEN 02")
console.table(A002);
//MODIFICAR CANTIDADES

//MOVER DE ALMACEN 1 A 2