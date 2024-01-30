let i = 1;
while(i <=100){
    let square = i * i;
    console.log("Current Number:", i, "Square:", square);
    if( square % 2 === 0){
        break;
    }
    i++; 
}