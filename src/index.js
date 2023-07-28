// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++){
//     const num = arr[i];

//     for (let j = i; j < arr.length; j++) {
//       if (num + arr[j] === target) {
//         return [i, j]
//       }
//     }
//   }

//   return null;
// }

function twoSumV2(arr, target) {
  let sub_arr_size = 2;
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    if (j >= sub_arr_size - 1) {
      if (sum === target) {
        return [arr[j - 1], arr[j]];
      }
      sum -= arr[j - (sub_arr_size - 1)];
    }
  }
  return [null, null];
}

console.log(twoSumV2([1, 3, 7, 9, 2], 11));
