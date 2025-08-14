function binarySearch(arr, target) {
    let indexHigh = arr.length -1;
    let indexLow = 0;
    while (indexLow <= indexHigh) {
        let indexMid = Math.floor((indexLow + indexHigh) / 2);
        if(arr[indexMid] === target) {
            return indexMid;
        } else if (arr[indexMid] < target) {
            indexLow = indexMid + 1;
        } else {
            indexHigh = indexMid - 1;
        }
    }
    return -1;
}