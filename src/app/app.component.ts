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
 * ALMACENES
 */

 const A001 :  Almacen = {
  codigoA : "A001",
  nombreA : "Almacen Alcchofas",
  stock   : []
}
const A002 :  Almacen = {
  codigoA : "A002",
  nombreA : "Almacen Shadow MOth",
  stock   : []
}

/**
 * PRODUCTOS
 */

const P001 :  producto = {
  codigoP : "P001",
  nombreP : "gelatina roja",
  cantidad : 50
}

const P002 : producto = {
  codigoP : "P002",
  nombreP : "gelatina verde",
  cantidad : 60
}

const P003 : producto = {
  codigoP : "P003",
  nombreP : "gelatina amarilla",
  cantidad : 80
};
//agregar
A001.stock.push(P001);
A001.stock.push(P002);
console.table(A001);