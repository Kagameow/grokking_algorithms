const numbers = [2, 4, 6, 5, 3];

//Task 4.1

const sum = (arr) => {
    if (!arr.length){
        return 0;
    }
    return arr[0] + sum(arr.slice(1));
}

console.log(sum(numbers));

//Task 4.2

const length = (arr) => {
    if(!arr[0]){
        return 0;
    }
    return 1 + length(arr.slice(1));
}

console.log(length(numbers));

//Task 4.3

const max = (arr) => {
    if (!arr.length){
        return null;
    }
    if (arr.length === 1){
        return arr[0];
    }
    if (arr.length === 2){
        return arr[0] > arr[1] ? arr[0] : arr[1];
    }
    let tempMax = max (arr.slice(1));
    return arr[0] > tempMax ? arr[0] : tempMax;
}

console.log(max(numbers));

//Quick sort

const quickSort = (arr) => {
    if (arr.length < 2){
        return arr;
    }
    const pivot = arr[0];
    const lesserNumsArr = arr.slice(1).filter((i) => {
        return i <= pivot;
    });
    const greaterNumsArr = arr.slice(1).filter((i) => {
        return i > pivot;
    });
    return quickSort(lesserNumsArr).concat([pivot], quickSort(greaterNumsArr))
}

console.log(quickSort(numbers));