

// Para crear un ciclo con un array tenemos que tener cuidado de usar return en el ciclo
// ya que este termina la ejecución y solo lo devolvera una vez

var lista = [42, 2,33, 34];

function iteraLista (arr){
   var len = arr.length;
   var tmp = [];
        for (let i = 0; i < len; i++){
        tmp[i] = arr[i]+"px";
        }
    return tmp; 
}

console.log(iteraLista(lista))




/*

var frutas = ["Banana", "Orange", "Apple", "Mango"];

function iterarLista (a){
    for(e of a){
        console.log(e);
    }
}

iterarLista(frutas);

*/