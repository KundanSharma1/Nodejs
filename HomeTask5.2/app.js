const [,,operation,type,...args] = process.argv;
const len = args.length;

function addition(arr){
    total = arr.reduce((partialSum, a) => partialSum + parseInt(a), 0);
    console.log('Value of addition : ',total);
}

function multiply(arr){
    total = arr.reduce((partialSum, a) => partialSum * parseInt(a));
    console.log('Value of multiplication : ',total);
}

function substraction(arr){
    result = arr[0]-arr[1];
    console.log('Value of substraction : ',result);
}

function division(arr){
    if(arr[1]==='0'){
        console.log("Can't be divided by Zero(0)");
    }
    else{
        result = arr[0]/arr[1];
        console.log('Value of division : ',result);
    }
}

if(operation!=="--operation"){
    console.log("invalid input");
}
else if(type==='addition'){
    addition(args);
}
else if(type==='multiply'){
    multiply(args);
}
else if(type==='substraction'){
    if(len===2){
        substraction(args);
    }
    else{
        console.log('2 numbers required for substraction.');
    }
}
else if(type==='division'){
    if(len===2){
        division(args);
    }
    else{
        console.log('2 numbers required for division.');
    }   
}
else{
    console.log("Invalid operation type.");
}
