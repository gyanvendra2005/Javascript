
function square(n){
    return n*n
}

function cube(n){
    return n*n*n
}

function prob(d,callFn){
    let a = callFn(d)
    let b = callFn(d)
    console.log(a+b);
}

prob(2 , cube)