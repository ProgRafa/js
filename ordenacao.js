/*
Autor: Rafael Oliveira
Data: 13/11/2017
Descrição: Algoritmos para ordenação de arrays.
*/

//Algoritmo bubblesort 
function bubbleSort(array){
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                var temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp 
            }
        }
    }
}

function reverseBubble(array){
    //Faz a ordenação no formato ascendente
    bubbleSort.call(this, array)
    
    //transforma de ascendente para descendente
    var ini = 0, fim = array.length-1
    for(var i in array){
        temp = array[ini] 
        array[ini] = array[fim]
        array[fim] = temp
        ini++; fim--
        if(ini >= fim) break
    }
}

//Algoritmo Selection sort
var selectionSort = function(array){
    var minorKey = {value: undefined, pos: undefined}
    for(var fix = 0; fix < array.length; fix++){
        minorKey.value = array[fix]; minorKey.pos = fix
        for(var j = fix+1; j < array.length; j++){
            if(minorKey.value > array[j]){
                minorKey.value = array[j]
                minorKey.pos = j
            }
        }
        array[minorKey.pos] = array[fix]
        array[fix] = minorKey.value
    }
}

//Algoritmo Merge Sort
function mergeSort(array){
    //freio da recursividade, momento que os valores estão totalmente separados
    if(array.length == 1)
        return array
    
    //etapa separar
    var meio = array.length/2        
    var esq = array.slice(0, meio)
    var dir = array.slice(meio, array.length)

    esq = mergeSort(esq)
    dir = mergeSort(dir)
    
    //etapa conquistar
    var juntar = []
    while(esq.length && dir.length){
        if(esq[0] > dir[0])
            juntar.push(dir.shift())
        else
            juntar.push(esq.shift())
    }
    while(esq.length)
        juntar.push(esq.shift())
    while(dir.length)
        juntar.push(dir.shift())
    return juntar
}


//Algoritmo quick sort
var quickSort = function(array){
    if(array.length < 2) return array

    var pivo = array.pop()
    var esq = [], dir = []

    for(var i of array){
        if(pivo >= i)
            esq.push(i)
        if(pivo < i)
            dir.push(i)
    }
    dir.unshift(pivo)
    
    esq = quickSort(esq)
    dir = quickSort(dir)

    var resultado = []
    resultado = esq.concat(dir)
    return resultado
}




//Testes
// var tempo_bubble, tempo_selection, tempo_merge, tempo_quick, inicio, fim
// var bubble = [], selection = [], merge = [], quick = []
// var rnd

// for(var i = 0;i < 1000000; i++){
//     rnd = parseInt(1000000*Math.random())
//     bubble.push(rnd)
//     selection.push(rnd)
//     merge.push(rnd)
//     quick.push(rnd)
// }


// inicio = Date.now()
// bubbleSort(bubble)
// fim = Date.now()
// tempo_bubble = fim-inicio

// inicio = Date.now()
// selectionSort(selection)
// fim = Date.now()
// tempo_selection = fim-inicio

// inicio = Date.now()
// mergeSort(merge)
// fim = Date.now()
// tempo_merge = fim-inicio

// inicio = Date.now()
// quickSort(quick)
// fim = Date.now()
// tempo_quick = fim-inicio


//Resultados em milesegundos
//console.log("Bubble Sort -> "+tempo_bubble+" ms")
//console.log("Selection Sort -> "+tempo_selection+" ms")
// console.log("Merge Sort -> "+tempo_merge+" ms")
//console.log("Quick Sort -> "+tempo_quick+" ms")
