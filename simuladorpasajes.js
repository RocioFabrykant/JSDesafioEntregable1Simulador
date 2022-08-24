//SIMULADOR DE CALCULADOR COSTO PASAJE BUQUE. SE INGRESA UN ORIGEN Y UN DESTINO,
//CANTIDAD DE PASAJEROS Y SI SE VIAJA O NO CON UN VEHICULO(MOTO, AUTO, CAMIONETA)
//EN FUNCION DEL ORIGEN Y DESTINO SE CALCULA EL COSTO DE LOS PASAJES, INCLUYENDO IMPUESTOS
class Viaje{
    constructor(origen,destino,cantidad_pasajeros,con_sin_vehiculo,vehiculo){
        this.origen = origen;
        this.destino = destino;
        this.cantidad_pasajeros = cantidad_pasajeros;
        this.con_sin_vehiculo = con_sin_vehiculo;
        this.vehiculo = vehiculo;
    }
    calcular_costo_vehiculo(){
        let costovehiculo;
    if(this.destino == "Colonia"){    
        if(this.vehiculo == "moto"){
            costovehiculo = 4000;
        }else if(this.vehiculo == "auto"){
            costovehiculo = 10000;
        }else if(this.vehiculo == "camioneta"){
            costovehiculo = 15000;
        }else{
            costovehiculo = 0;
        }
    }else if(this.destino == "Montevideo" ||this.destino == "Buenos Aires"){
        if(this.vehiculo == "moto"){
            costovehiculo = 6000;
        }else if(this.vehiculo == "auto"){
            costovehiculo = 12000;
        }else if(this.vehiculo == "camioneta"){
            costovehiculo = 16000;
        }else{
            costovehiculo = 0;
        }
    }return costovehiculo
    }
    
    calcular_costo_pasajeros(){
        let costopasajeros;
        if(this.destino == "Colonia"){
            costopasajeros = this.cantidad_pasajeros*8000;
        }else if(this.destino == "Buenos Aires" || this.destino == "Montevideo"){
            costopasajeros = this.cantidad_pasajeros*10000;
        }
        return costopasajeros
    }
    
    calcular_total_con_impuestos(costo_vehiculo,costo_pasajeros){
        let total_sin_impuestos = costo_vehiculo + costo_pasajeros;
        let total_con_impuestos;
        if(this.origen == "Colonia"){
            total_con_impuestos = total_sin_impuestos*1.2;
        }else if(this.origen == "Montevideo"){
            total_con_impuestos = total_sin_impuestos*1.25;
        }else if(this.origen == "Buenos Aires"){
            total_con_impuestos = total_sin_impuestos*1.3;
        }
        
        return total_con_impuestos
    }
}
let arr_viajes = [];

//SIMULO QUE INGRESAN DOS VIAJES
for(i=0;i<2;i++){
    let origen = prompt("Ingrese el origen: Buenos Aires/Colonia/Montevideo");
while(origen != "Buenos Aires" && origen != "Colonia" && origen != "Montevideo"){
    alert("Ingrese correctamente el origen");
    origen = prompt("Ingrese el origen: Buenos Aires/Colonia/Montevideo");
}
let destino = prompt("Ingrese destino de viaje: Buenos Aires/Colonia/Montevideo");
while(destino == origen || destino != "Buenos Aires" && destino != "Colonia" && destino != "Montevideo"){
    alert("Ingrese correctamente el destino");
    destino = prompt("Ingrese el destino: Buenos Aires/Colonia/Montevideo");
    if(destino == origen){
        alert("El destino no puede ser igual al origen");
    }
}

let cantidad_pasajeros = parseInt(prompt("Ingrese número de pasajeros"));

while(cantidad_pasajeros <= 0 || isNaN(cantidad_pasajeros) || cantidad_pasajeros == null || cantidad_pasajeros == ""){
    alert("Solo puede ingresar numeros mayores a cero");
    cantidad_pasajeros = parseInt(prompt("Ingrese número de pasajeros"));
}
let con_sin_vehiculo = prompt("Viaja con vehículo? indique SI o NO");;
let vehiculo;
while(con_sin_vehiculo != "Si" && con_sin_vehiculo != "SI" && con_sin_vehiculo != "si" && con_sin_vehiculo != "NO" && con_sin_vehiculo != "no" && con_sin_vehiculo != "No"){
    alert("Valor incorrecto")
    con_sin_vehiculo = prompt("Viaja con vehículo? indique SI o NO");
}

if(con_sin_vehiculo == "SI" || con_sin_vehiculo == "Si" || con_sin_vehiculo == "si"){
do{    
    vehiculo = prompt("Indique el vehiculo moto/camioneta/auto");
}while(vehiculo!= "moto" && vehiculo != "camioneta" && vehiculo != "auto")
}
let nuevo_viaje = new Viaje(origen,destino,cantidad_pasajeros,con_sin_vehiculo,vehiculo);
let costo_vehiculo = nuevo_viaje.calcular_costo_vehiculo();
let costo_pasajeros = nuevo_viaje.calcular_costo_pasajeros();
let total_con_impuestos = nuevo_viaje.calcular_total_con_impuestos(costo_vehiculo,costo_pasajeros);
console.log("El costo del pasaje es", total_con_impuestos);

arr_viajes.push(nuevo_viaje);
}

console.log(arr_viajes);


    

