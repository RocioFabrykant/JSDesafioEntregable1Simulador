//SIMULADOR DE CALCULADOR COSTO PASAJE BUQUE. SE INGRESA UN ORIGEN Y UN DESTINO,
//CANTIDAD DE PASAJEROS Y SI SE VIAJA O NO CON UN VEHICULO(MOTO, AUTO, CAMIONETA)
//EN FUNCION DEL ORIGEN Y DESTINO SE CALCULA EL COSTO DE LOS PASAJES, INCLUYENDO IMPUESTOS
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


function calcular_costo_vehiculo(vehiculo,destino){
    let costovehiculo;
if(destino == "Colonia"){    
    if(vehiculo == "moto"){
        costovehiculo = 4000;
    }else if(vehiculo == "auto"){
        costovehiculo = 10000;
    }else if(vehiculo == "camioneta"){
        costovehiculo = 15000;
    }else{
        costovehiculo = 0;
    }
}else if(destino == "Montevideo" ||destino == "Buenos Aires"){
    if(vehiculo == "moto"){
        costovehiculo = 6000;
    }else if(vehiculo == "auto"){
        costovehiculo = 12000;
    }else if(vehiculo == "camioneta"){
        costovehiculo = 16000;
    }else{
        costovehiculo = 0;
    }
}return costovehiculo
}

function calcular_costo_pasajeros(pasajeros,destino){
    let costopasajeros;
    if(destino == "Colonia"){
        costopasajeros = pasajeros*8000;
    }else if(destino == "Buenos Aires" || destino == "Montevideo"){
        costopasajeros = pasajeros*10000;
    }
    return costopasajeros
}

function calcular_impuestos(total,origen){
    let impuestos;
    if(origen == "Colonia"){
        impuestos = total*0.2;
    }else if(origen == "Montevideo"){
        impuestos = total*0.25;
    }else if(origen == "Buenos Aires"){
        impuestos = total*0.3;
    }
    return impuestos
}
    

let costo_vehiculo = calcular_costo_vehiculo(vehiculo,destino);
let costo_pasajeros = calcular_costo_pasajeros(cantidad_pasajeros,destino);
let total_sin_impuestos = costo_vehiculo + costo_pasajeros;
let impuestos = calcular_impuestos(total_sin_impuestos,origen);
let total_con_impuestos = total_sin_impuestos + impuestos;
console.log("El costo del pasaje es", total_con_impuestos);