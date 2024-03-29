const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = (arr1, arr2) => {
    let resultArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            resultArr.push(arr1[i]);
            i++;
        } else {
            resultArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        resultArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        resultArr.push(arr2[j]);
        j++;
    }

    return resultArr;
};

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
// console.log(mergeSort([10, 24, 76, 73]));
