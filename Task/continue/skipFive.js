// use for
// for (i = 55; i <= 85;i++){
//     if(i % 5 ===0 ){
//         continue;
//     }
//     if(i % 2 !==0){
//         console.log("Odd Number",i);
//     }

// }

/// use while

let i = 55;
while (i <= 85) {
    i++;
    if (i % 5 === 0) {
        continue;
    }
    if (i % 2 !== 0) {
        console.log("Odd Number", i);
    }
    
}