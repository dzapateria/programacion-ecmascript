# FUNCIONES

## Ejemplos de funciones.

## Definición:

Una función es un conjunto de líneas de código que realizan una tarea específica y puede retornar un valor. 

Las funciones pueden tomar parámetros que modifiquen su funcionamiento. 

Cuando una función es invocada se le pasa el control a la misma, una vez que esta finalizó con su tarea el control es devuelto al punto desde el cual la función fue llamada.

- **Conceptos fundamentales de las funciones**:

    * En la declaración, parametro, cuerpo {}, retorno, ambito local y global, hoisting (elevación),  callback,  

Parentesis, argumento.
    * Avanzado: funciones de alto orden, función pura, funciones de primera clase, closure (clausula) o cierre,
## Funciónes básicas:

```javascript
function elevarAlCuadrado(x) {
    return x * x;
}
console.log(cuadrado(12));
// -> 144
```

 Función básica modo expresión:

```javascript
var cuadrado = function(x) {
    return x * x;
}
console.log(cuadrado(12));
// -> 144
```

Ejemplo 1.3
```javascript
var sumar(...numeros){
    return numeros;
}

```

Pasar Funciones como parametros

