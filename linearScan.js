function linearScan (array,target) {
    let i = 0;
    while (i < array.length) {
        if(array[i] === target){
            return i;
        }
        i = i + 1;
    }
    return -1;
}

export { linearScan };