const findSmallest = arr => {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

const selectionSort = array => {
    const arr = [...array]
    const newArr = [];
    const initialLength = arr.length
    for (let i = 0; i < initialLength; i++){
        let smallestIndex = findSmallest(arr);
        newArr.push(...arr.splice(smallestIndex, 1));
    }
    return newArr;
}

const someArray = [5, 3, 6, 2, 10];
console.log(selectionSort(someArray));
