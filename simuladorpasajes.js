//SIMULADOR DE CALCULADOR COSTO PASAJE BUQUE. SE INGRESA UN ORIGEN Y UN DESTINO,
//CANTIDAD DE PASAJEROS Y SI SE VIAJA O NO CON UN VEHICULO(MOTO, AUTO, CAMIONETA)
//EN FUNCION DEL ORIGEN Y DESTINO SE CALCULA EL COSTO DE LOS PASAJES, INCLUYENDO IMPUESTOS
let capacidad_total_pasajeros = 20;
let capacidad_total_autos = 2;
let capacidad_total_motos = 2;
let capacidad_total_camionetas = 1;
let totalpasajeros= 0;
let acumuladorauto = 0;
let acumuladormoto = 0;
let acumuladorcamioneta = 0;
class Viaje{
    constructor(origen,destino,cantidad_pasajeros,vehiculo){
        this.origen = origen;
        this.destino = destino;
        this.cantidad_pasajeros = cantidad_pasajeros;
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
let form = document.getElementById("form");
form.addEventListener("submit" , function(e){

    e.preventDefault();
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let vehiculo = document.getElementById("vehiculo").value;
    let cantidad_pasajeros = Number(document.getElementById("pasajeros").value);
    let mensajes = document.getElementById("mensajes");
    //console.log(origen,destino,vehiculo,cantidad_pasajeros);
    if(destino == origen){
        alert("El destino no puede ser igual al origen");
        //let msje = document.createElement("p");
        //msje.innerHTML = `<span>El destino no puede ser igual al origen</span>`;
        //mensajes.append(msje);
    }else if(cantidad_pasajeros == "" || vehiculo == "" || destino == "destino" || origen == "origen"){
        //let msjecantidad = document.createElement("p");
        //msjecantidad.innerText = `Ingrese la cantidad`;
        //mensajes.append(msje);
        alert("Ingrese todos los campos");
    }else{

    

    totalpasajeros = totalpasajeros + cantidad_pasajeros;
    if(totalpasajeros> capacidad_total_pasajeros){
        alert("No hay capacidad disponible");
        totalpasajeros = totalpasajeros - cantidad_pasajeros;
        //let msje_dos = document.createElement("p");
        //msje_dos.innerText = `No hay capacidad disponible de pasajeros`;
        //mensajes.append(msje_dos);
        //cantidad_pasajeros = 0;
        
    }else{
        if(vehiculo == "moto"){
        acumuladormoto++;
        
    }else if(vehiculo == "camioneta"){
        acumuladorcamioneta++;
    
    }else if(vehiculo == "auto"){
        acumuladorauto++;
        
    }

    if(vehiculo == "moto" && acumuladormoto>capacidad_total_motos){
        alert("No hay capacidad suficiente para motos");
        //let msje_tres = document.createElement("p");
        //msje_tres.innerText = `No hay capacidad suficiente para motos`;
        //mensajes.append(msje_tres);
        vehiculo = "";
        
    }else if(vehiculo == "camioneta" && acumuladorcamioneta>capacidad_total_camionetas){
        alert("No hay capacidad suficiente para camionetas");
        //let msje_cuatro = document.createElement("p");
        //msje_cuatro.innerText = `No hay capacidad suficiente para camionetas`
        //mensajes.append(msje_cuatro);
        //vehiculo = "";
        
    }else if(vehiculo == "auto" && acumuladorauto>capacidad_total_autos){
        alert("No hay capacidad suficiente para autos");
        //let msje_cinco = document.createElement("p");
        //msje_cinco.innerText = `No hay capacidad suficiente para autos`;
        //mensajes.append(msje_cinco);
        //vehiculo = "";
        
    }else{

let nuevo_viaje = new Viaje(origen,destino,cantidad_pasajeros,vehiculo);
let costo_vehiculo = nuevo_viaje.calcular_costo_vehiculo();
let costo_pasajeros = nuevo_viaje.calcular_costo_pasajeros();
let total_con_impuestos = nuevo_viaje.calcular_total_con_impuestos(costo_vehiculo,costo_pasajeros);
//console.log("El costo del pasaje es", total_con_impuestos);
let msje_costo = document.createElement("p");
msje_costo.innerText = `El costo del pasaje es: $${total_con_impuestos}`;
mensajes.append(msje_costo);
//AGREGO LOS OBJETOS AL ARREGLO A TRAVÉS DEL MÉTODO PUSH
arr_viajes.push(nuevo_viaje);
//LISTO EL VIAJE
let lista = document.getElementById("lista_viajes");
        let li = document.createElement("li");
        li.innerHTML = `<span>Origen: ${nuevo_viaje.origen} Destino: ${nuevo_viaje.destino} Cantidad pasajeros: ${nuevo_viaje.cantidad_pasajeros} Vehiculo: ${nuevo_viaje.vehiculo}</span>`
        lista.append(li);
}
    }}
});


//DETECTAR CAPACIDAD DISPONIBLE PASAJEROS Y VEHICULOS
/*
let acumulador_autos= 0;
let acumulador_motos= 0;
let acumulador_camionetas=0; 
function acumulador_pasajeros(acu,arr_viajes){
    acu = acu + arr_viajes.cantidad_pasajeros;
    return acu
}

for(let viaje of arr_viajes){
    if(viaje.vehiculo == "moto"){
        acumulador_motos = acumulador_motos + 1;
    }else if(viaje.vehiculo == "auto"){
        acumulador_autos = acumulador_autos + 1;
    }else if(viaje.vehiculo == "camioneta"){
        acumulador_camionetas = acumulador_camionetas + 1;
    }
}
if(acumulador_motos < capacidad_total_motos){
    console.log("aun hay capacidad de motos quedan:",capacidad_total_motos - acumulador_motos, "lugares");
}else if(acumulador_motos == capacidad_total_motos){
    console.log("ya esta llena la capacidad de motos");
}

if(acumulador_autos < capacidad_total_autos){
    console.log("aun hay capacidad de autos, quedan: ", capacidad_total_autos - acumulador_autos, "lugares");
}else if(acumulador_autos == capacidad_total_autos){
    console.log("ya esta completa la capacidad de pasajeros");
}

if(acumulador_camionetas < capacidad_total_camionetas){
    console.log("aun hay capacidad de camionetas, quedan: ", capacidad_total_camionetas - acumulador_camionetas, "lugares");
}else if(acumulador_camionetas == capacidad_total_camionetas){
    console.log("la capacidad de camionetas esta llena");
}

let total_pasajeros = arr_viajes.reduce(acumulador_pasajeros,0);
console.log("El total de pasajeros sería: ", total_pasajeros);
if(total_pasajeros< capacidad_total_pasajeros){
    console.log("El buque aun cuenta con capacidad de pasajeros quedan:", capacidad_total_pasajeros - total_pasajeros, "lugares");
}else if(total_pasajeros == capacidad_total_pasajeros){
    console.log("El buque ya está lleno");
}

*/
    

//SIMULO QUE INGRESAN TRES VIAJES
/*
for(i=0; i<3; i++) {
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
totalpasajeros = totalpasajeros + cantidad_pasajeros;
if(totalpasajeros> capacidad_total_pasajeros){
        alert("No hay capacidad disponible");
        totalpasajeros = totalpasajeros - cantidad_pasajeros;
        //cantidad_pasajeros = 0;
        continue;
    }


let con_sin_vehiculo = prompt("Viaja con vehículo? indique SI o NO");
let vehiculo;
while(con_sin_vehiculo != "Si" && con_sin_vehiculo != "SI" && con_sin_vehiculo != "si" && con_sin_vehiculo != "NO" && con_sin_vehiculo != "no" && con_sin_vehiculo != "No"){
    alert("Valor incorrecto")
    con_sin_vehiculo = prompt("Viaja con vehículo? indique SI o NO");
}

if(con_sin_vehiculo == "SI" || con_sin_vehiculo == "Si" || con_sin_vehiculo == "si"){
do{    
    vehiculo = prompt("Indique el vehiculo moto/camioneta/auto");
    if(vehiculo == "moto"){
        acumuladormoto++;
        if(acumuladormoto>capacidad_total_motos){
            alert("No hay capacidad suficiente para motos");
            vehiculo = "";
            break;
        }
    }else if(vehiculo == "camioneta"){
        acumuladorcamioneta++;
        if(acumuladorcamioneta>capacidad_total_camionetas){
            alert("No hay capacidad suficiente para camionetas");
            vehiculo = "";
            break;
        }
    }else if(vehiculo == "auto"){
        acumuladorauto++;
        if(acumuladorauto>capacidad_total_autos){
            alert("No hay capacidad suficiente para autos");
            vehiculo = "";
            break;
        }
    }
}while(vehiculo!= "moto" && vehiculo != "camioneta" && vehiculo != "auto")
}
let nuevo_viaje = new Viaje(origen,destino,cantidad_pasajeros,vehiculo);
let costo_vehiculo = nuevo_viaje.calcular_costo_vehiculo();
let costo_pasajeros = nuevo_viaje.calcular_costo_pasajeros();
let total_con_impuestos = nuevo_viaje.calcular_total_con_impuestos(costo_vehiculo,costo_pasajeros);
console.log("El costo del pasaje es", total_con_impuestos);

//AGREGO LOS OBJETOS AL ARREGLO A TRAVÉS DEL MÉTODO PUSH
arr_viajes.push(nuevo_viaje);
}
//RECORRO EL ARREGLO DE OBJETOS Y MUESTRO POR CONSOLA
for(let viaje of arr_viajes){
    console.log("<------------------------->");
    console.log("Origen:",viaje.origen);
    console.log("Destino:",viaje.destino);
    console.log("Cantidad pasajeros:",viaje.cantidad_pasajeros);
    console.log("Vehiculo:",viaje.vehiculo);
}

//DETECTAR CAPACIDAD DISPONIBLE PASAJEROS Y VEHICULOS

let acumulador_autos= 0;
let acumulador_motos= 0;
let acumulador_camionetas=0; 
function acumulador_pasajeros(acu,arr_viajes){
    acu = acu + arr_viajes.cantidad_pasajeros;
    return acu
}

for(let viaje of arr_viajes){
    if(viaje.vehiculo == "moto"){
        acumulador_motos = acumulador_motos + 1;
    }else if(viaje.vehiculo == "auto"){
        acumulador_autos = acumulador_autos + 1;
    }else if(viaje.vehiculo == "camioneta"){
        acumulador_camionetas = acumulador_camionetas + 1;
    }
}
if(acumulador_motos < capacidad_total_motos){
    console.log("aun hay capacidad de motos quedan:",capacidad_total_motos - acumulador_motos, "lugares");
}else if(acumulador_motos == capacidad_total_motos){
    console.log("ya esta llena la capacidad de motos");
}

if(acumulador_autos < capacidad_total_autos){
    console.log("aun hay capacidad de autos, quedan: ", capacidad_total_autos - acumulador_autos, "lugares");
}else if(acumulador_autos == capacidad_total_autos){
    console.log("ya esta completa la capacidad de pasajeros");
}

if(acumulador_camionetas < capacidad_total_camionetas){
    console.log("aun hay capacidad de camionetas, quedan: ", capacidad_total_camionetas - acumulador_camionetas, "lugares");
}else if(acumulador_camionetas == capacidad_total_camionetas){
    console.log("la capacidad de camionetas esta llena");
}

let total_pasajeros = arr_viajes.reduce(acumulador_pasajeros,0);
console.log("El total de pasajeros sería: ", total_pasajeros);
if(total_pasajeros< capacidad_total_pasajeros){
    console.log("El buque aun cuenta con capacidad de pasajeros quedan:", capacidad_total_pasajeros - total_pasajeros, "lugares");
}else if(total_pasajeros == capacidad_total_pasajeros){
    console.log("El buque ya está lleno");
}
*/







    

