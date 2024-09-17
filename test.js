let arr = [
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7]
]
console.log(arr)

function hourglassSum(arr) {
    let max = -Infinity
    for(let y = 0; y <4;y++){
        for(let x = 0; x < 4; x++ ){
            let hour = arr[y][x] + arr[y][x + 1] + arr[y][x + 2] + arr[y + 1][x + 1] + arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2] 
            console.log(hour)
            if(hour > max){
                max = hour
            }
        }
    }
return max
}

console.log(hourglassSum(arr))