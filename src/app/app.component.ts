import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
// console.log("Primer mensaje por consola sr. Stark");

// let nombre: string;
// nombre="Bryan Anthony";
// console.log("Nombre: ",nombre);

// let cantidad: number;
// cantidad=25;
// console.log("Cantidad: ",cantidad);

// let incremento: string;
// incremento="35";
// console.log("Incremento: ",incremento);

// console.log("Total: ", (cantidad + parseInt(incremento)));

// let estaActivo: boolean=true;
// console.log("Esta Activo: ", estaActivo);

// console.log(nombre,cantidad,incremento,estaActivo);

// let pasatiempos: string[];
// pasatiempos=["Ajedrez","Videojuegos","Correr"];
// console.log("Pasatiempos: ",pasatiempos)

// pasatiempos.push("Nadar");
// console.log("Pasatiempos: ",pasatiempos)

// pasatiempos.unshift("Comer");
// console.log("Pasatiempos: ",pasatiempos)

// pasatiempos.pop();
// console.log("Pasatiempos: ",pasatiempos)

// pasatiempos.shift();
// console.log("Pasatiempos: ",pasatiempos)

// let var01: string | number;
// const var02:string= "variable02";

// var01 = "variable01"

// console.log(var01);
// console.log(var02);

// var01 = 5;

// console.log(var01);

// let pasatiempos: (string | number)[];
// pasatiempos=["Ajedrez","Peliculas"];

// pasatiempos.push(5);
// pasatiempos.push("Jugar");

// console.table(pasatiempos);

// interface Estudiante{
//   Nombre: string,
//   aPaterno: string,
//   Pension: number,
//   estaMatriculado: boolean,
//   escuelaProfesional?: string,
//   pasatiempos?: string[]
// }

// let alumno: Estudiante;
// alumno={
//   Nombre: "Juan",
//   aPaterno: "Alcachofa",
//   Pension: 850,
//   estaMatriculado: false
// };
// console.table(alumno);
// alumno.escuelaProfesional = "ingenieria de sistemas";
// console.table(alumno);

// alumno.pasatiempos = ["Ajedrez","Peliculas"];
// console.table(alumno);
// alumno.pasatiempos.push("basket")
// console.table(alumno);
// function suma(a: number,b: number) {
//   return a+b;
// }
// console.log("La suma es: ",suma(5,6));
export default class Almacen{
  constructor (
    private codigoA : string,
    private nombreA : string,
    private stock   : producto[]
  ){}
  
  public ingresarProducto(P : producto){
    this.stock.push(P);
    console.log("Producto ingresado correctamente.");
  }
  
  public mostrarProducto(){
    console.log("******************************\n*****"+this.nombreA+"*****\n******************************");
    this.stock.forEach(function(elemento, indice, array) {
      console.table(elemento);
    })
  }

  private buscarProducto(codP : producto){
    let found = false;
    let position = -1;
    let index = 0;
 
    while(!found && index < this.stock.length) {
        if(this.stock[index] == codP) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
    }
    return position;
  }

  private quitarProducto(codP : producto){
    let posicion = this.buscarProducto(codP);

    this.stock.splice(posicion,1);
  }

  public moverProducto(codP : producto, codA : Almacen){
    let posicion = this.buscarProducto(codP);
    if(posicion == -1){
      console.log("Producto no habido en stock :D");

    }else{
      codA.ingresarProducto(this.stock[posicion])
      this.quitarProducto(codP)
      console.log("Accion Exitosa");
    }
  }

  public moverProductoCantidad(codP : producto, codA : Almacen, cantidad : number){
    for (let index = 0; index < cantidad; index++) {
      this.moverProducto(codP,codA);
    }
  }

  public mostrarInventario(){
    let i = 0;
    console.log("******************************\n*****"+this.nombreA+"*****\n******************************");
    let inventario = new Map();

    let cont = 1
    for (let index = 0; index < this.stock.length; index++) {
      
      if(!inventario.has(this.stock[index].nombreP)){
        inventario.set(this.stock[index].nombreP,1);
      }else{
        let found = false;
        while(!found && i < inventario.size) {
          if(this.stock[i].nombreP ==  getByValue(inventario,i)) {
            cont +=1;
            found = true;
            inventario.set(this.stock[i].nombreP,cont);
            } else {
              i += 1;
            }
          }
        }
      }
    for(let CV of inventario.entries()){
      console.log(CV);
    }
  }

  public modificarInventario(R : string, codP : producto, cant : number){
    if(R == "R"){
      for (let index = 0; index < cant; index++) {
          let posicion = this.buscarProducto(codP);
          if(posicion == -1){
            console.log("Producto no habido en stock :D");
          }else{
            this.quitarProducto(codP);
          }
        }
    }else if(R == "A"){
        for (let index = 0; index < cant; index++) {
          this.ingresarProducto(codP);
        }
    }else{
      console.log("Accion no valida\nAcciones Validas: \n-> R : Retirar\n-> A : Agregar")
    }
  }
}

// PRODUCTOS


export interface producto {    
  codigoP : string;
  nombreP  : string;
}

// FUNCIONES

function getByValue(map: Map<any,string>, post: number){
 let acum = 0;
 for (let [key, value] of map.entries()) {
   if (acum == post)
   return key;
 }
 acum += 1;
}
//////////////////////////////////////
/**
 * ALMACENES
 */

 const A001 : Almacen = new Almacen(
  "A001",
  "Almacen Dora",
  []
);

const A002 : Almacen = new Almacen(
  "A002",
  "Almacen Kevin",
  []
);

const A003 : Almacen = new Almacen(
  "A003",
  "Almacen Eduardo",
  []
);

const A004 : Almacen = new Almacen(
  "A004",
  "Almacen Kelma",
  []
);

/**
 * PRODUCTOS
 */

const P001 :  producto = {
  codigoP : "P001",
  nombreP : "gelatina roja"
}

const P002 : producto = {
  codigoP : "P002",
  nombreP : "gelatina verde"
}

const P003 : producto = {
  codigoP : "P003",
  nombreP : "gelatina amarilla"
}

const P004 : producto = {
  codigoP : "P004",
  nombreP : "gelatina azul"
}


/**
 * CONSULTAS
 */

// ALMACEN 1 INGRESAR PRODUCTOS
A001.ingresarProducto(P001);//Roja
A001.ingresarProducto(P002);//verde
A001.ingresarProducto(P003);//amarilla

// MOSTRAMOS ALMACEN
A001.mostrarProducto();

// ALMACEN 2 INGRESAR PRODUCTOS
A002.ingresarProducto(P001);
A002.ingresarProducto(P001);
A002.ingresarProducto(P001);

//MOSTRANOS ALMACEN
A002.mostrarProducto();

//ACCION MOVER PRODUCTOS ENTRE ALMACEN (1) 
A001.moverProducto(P002,A002);
A001.moverProducto(P002,A002);

//A002.mostrarProducto();

//ACCION MOVER PRODUCTOS ENTRE ALMACEN (*)
A002.moverProductoCantidad(P001,A001,4);
//MOSTRANOS ALMACEN
A001.mostrarProducto();
A002.mostrarProducto();

//MOSTRAR INVENTARIO CON CANTIDAD
A001.mostrarInventario();

//MODIFICAR INVENTARIO 
A001.modificarInventario("R",P003,3);
A001.mostrarProducto();
