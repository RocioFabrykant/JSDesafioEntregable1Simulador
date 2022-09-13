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
    
    if(destino == origen){
        alert("El destino no puede ser igual al origen");
       
    }else if(cantidad_pasajeros == "" || vehiculo == "" || destino == "destino" || origen == "origen"){
        
        alert("Ingrese todos los campos");
    }else{

    
    if(isNaN(parseInt(localStorage.getItem("Acum_pasajeros")))){
        totalpasajeros = totalpasajeros + cantidad_pasajeros;
        localStorage.setItem("Acum_pasajeros", totalpasajeros);
    }else{
        totalpasajeros = parseInt(localStorage.getItem("Acum_pasajeros"));
        totalpasajeros = totalpasajeros + cantidad_pasajeros;
        localStorage.setItem("Acum_pasajeros", totalpasajeros);
    }
    
    
    if(parseInt(localStorage.getItem("Acum_pasajeros"))> capacidad_total_pasajeros){
        alert("No hay capacidad disponible");
        totalpasajeros = parseInt(localStorage.getItem("Acum_pasajeros"));
        totalpasajeros = totalpasajeros - cantidad_pasajeros;
        localStorage.setItem("Acum_pasajeros", totalpasajeros);
        
        
    }else{    
        if(vehiculo == "moto"){
            if(isNaN(parseInt(localStorage.getItem("Acum_motos")))){
                acumuladormoto++;
                localStorage.setItem("Acum_motos", acumuladormoto);
            }else{
                acumuladormoto = parseInt(localStorage.getItem("Acum_motos"));
                acumuladormoto++;
                localStorage.setItem("Acum_motos", acumuladormoto);
            }
        
    }else if(vehiculo == "camioneta"){

        if(isNaN(parseInt(localStorage.getItem("Acum_camionetas")))){
            acumuladorcamioneta++;
            localStorage.setItem("Acum_camionetas", acumuladorcamioneta);
        }else{
            acumuladorcamioneta = parseInt(localStorage.getItem("Acum_camionetas"));
            acumuladorcamioneta++;
            localStorage.setItem("Acum_camionetas",acumuladorcamioneta);
        }
    
    }else if(vehiculo == "auto"){
    
        if(isNaN(parseInt(localStorage.getItem("Acum_autos")))){
            acumuladorauto++;
            localStorage.setItem("Acum_autos",acumuladorauto);
        }else{
            acumuladorauto = parseInt(localStorage.getItem("Acum_autos"));
            acumuladorauto++;
            localStorage.setItem("Acum_autos",acumuladorauto);
        }
    }

    if(vehiculo == "moto" && parseInt(localStorage.getItem("Acum_motos"))>capacidad_total_motos){
        acumuladormoto--;
        localStorage.setItem("Acum_motos", acumuladormoto);
        alert("No hay capacidad suficiente para motos");
        totalpasajeros = totalpasajeros - cantidad_pasajeros;
        localStorage.setItem("Acum_pasajeros", totalpasajeros);
        
        
    }else if(vehiculo == "camioneta" && parseInt(localStorage.getItem("Acum_camionetas"))>capacidad_total_camionetas){
        acumuladorcamioneta--;
        localStorage.setItem("Acum_camionetas",acumuladorcamioneta);
        alert("No hay capacidad suficiente para camionetas");
        totalpasajeros = totalpasajeros - cantidad_pasajeros;
        localStorage.setItem("Acum_pasajeros", totalpasajeros);
       
        
    }else if(vehiculo == "auto" && parseInt(localStorage.getItem("Acum_autos"))>capacidad_total_autos){
        acumuladorauto--;
        localStorage.setItem("Acum_autos",acumuladorauto);
        alert("No hay capacidad suficiente para autos");
        totalpasajeros = totalpasajeros - cantidad_pasajeros;
        localStorage.setItem("Acum_pasajeros", totalpasajeros);
   
        
    }else{

let nuevo_viaje = new Viaje(origen,destino,cantidad_pasajeros,vehiculo);
let costo_vehiculo = nuevo_viaje.calcular_costo_vehiculo();
let costo_pasajeros = nuevo_viaje.calcular_costo_pasajeros();
let total_con_impuestos = nuevo_viaje.calcular_total_con_impuestos(costo_vehiculo,costo_pasajeros);
nuevo_viaje.costototal = total_con_impuestos;

//AGREGO LOS OBJETOS AL ARREGLO A TRAVÉS DEL MÉTODO PUSH
arr_viajes.push(nuevo_viaje);
let id_viaje = arr_viajes.indexOf(nuevo_viaje);
nuevo_viaje.id = id_viaje;
//CONVIERTO A JSON EL ARREGLO
let JSON_arreglo = JSON.stringify(arr_viajes);
localStorage.setItem("viaje",JSON_arreglo);


//LISTO EL VIAJE
let lista = document.getElementById("lista_viajes");
        let li = document.createElement("li");
        
        li.innerHTML = `<span>Origen: ${nuevo_viaje.origen} Destino: ${nuevo_viaje.destino} Cantidad pasajeros: ${nuevo_viaje.cantidad_pasajeros} Vehiculo: ${nuevo_viaje.vehiculo} Costo total: ${nuevo_viaje.costototal}
        </span><button id= ${nuevo_viaje.id} class="borrar">Cancelar viaje</button>`;
        lista.append(li);
        let botones_borrar = document.querySelectorAll(".borrar");
        for(let boton of botones_borrar){
            boton.addEventListener("click",borrarviaje);
        }
}
    }}
});

function borrarviaje(e){
    let hijo = parseInt(e.target.id);
    let padre = e.target.parentNode;
    padre.remove();
    let recupero_arreglo = [];
    recupero_arreglo = JSON.parse(localStorage.getItem("viaje")); 
    if(recupero_arreglo[hijo].vehiculo == "moto"){
        let acumula_moto = parseInt(localStorage.getItem("Acum_motos"));
        acumula_moto--;
        localStorage.setItem("Acum_motos",acumula_moto);
    }else if(recupero_arreglo[hijo].vehiculo == "auto"){
        let acumula_auto = parseInt(localStorage.getItem("Acum_autos"));
        acumula_auto--;
        localStorage.setItem("Acum_autos",acumula_auto);
    }else if(recupero_arreglo[hijo].vehiculo == "camioneta"){
        let acumula_camioneta = parseInt(localStorage.getItem("Acum_camionetas"));
        acumula_camioneta--;
        localStorage.setItem("Acum_camionetas",acumula_camioneta);
    }
    
    let pasajeros = parseInt(localStorage.getItem("Acum_pasajeros"));
    pasajeros = pasajeros - recupero_arreglo[hijo].cantidad_pasajeros;
    localStorage.setItem("Acum_pasajeros", pasajeros);
    delete recupero_arreglo[hijo];
    let JSON_arreglo = JSON.stringify(recupero_arreglo);
    localStorage.setItem("viaje", JSON_arreglo);
    

}

let botonborrar = document.getElementById("borrar");
botonborrar.addEventListener("click", function(){    
    /*localStorage.setItem("Acum_pasajeros", 0);
    localStorage.setItem("Acum_autos",0);
    localStorage.setItem("Acum_motos",0);
    localStorage.setItem("Acum_camionetas",0);
    let lista = document.getElementById("lista_viajes");
    while(lista.firstChild){
        lista.removeChild(lista.lastChild);
    }
    
    let mensajes = document.getElementById("mensajes");
    while(mensajes.firstChild){
        mensajes.removeChild(mensajes.lastChild);
    }
    */
    let origen = document.getElementById("origen");
    origen.value = "origen";
    let destino = document.getElementById("destino");
    destino.value = "destino";
    let vehiculo = document.getElementById("vehiculo");
    vehiculo.value = ""
    let cantidad_pasajeros = document.getElementById("pasajeros");
    cantidad_pasajeros.value = "";
    /*console.log("Arreglo antes de borrar registros"); 
    /*ANTES DEL LOCAL STORAGE:
    for(let viaje of arr_viajes){
        
        console.log(viaje);
    }*/
    /*
    let recupero_arreglo = JSON.parse(localStorage.getItem("viaje"));
    let lista_total = document.getElementById("lista_total");
    let li_titulo = document.createElement("li");
    li_titulo.innerText = "Estos viajes se eliminaran:";
    lista_total.append(li_titulo);   
    for(let unViaje of recupero_arreglo){
        console.log(unViaje);
        let li_total = document.createElement("li");
        li_total.innerHTML = `<span>Origen: ${unViaje.origen} Destino: ${unViaje.destino} Cantidad pasajeros: ${unViaje.cantidad_pasajeros} Vehiculo: ${unViaje.vehiculo} Costo total: ${unViaje.costototal}</span>`
        lista_total.append(li_total);
    }
   
    for(let i=0; i<parseInt(localStorage.getItem("Acum_sesion"));i++){
        arr_viajes.pop();
        localStorage.removeItem("viaje");
    }
    localStorage.setItem("Acum_sesion",0);
*/

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







    

