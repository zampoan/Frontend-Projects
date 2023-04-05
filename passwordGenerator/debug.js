let options = {
    upper: false,
    lower: false,
    numbers: false,
    symbols: false,
}

let u = 0;
let l = 0;
let n = 0;
let s = 0;

function f1(){
    options.lower = true
    options.numbers = true
    for(let i = 0; i < 5; i++){
        if( options.lower === true) {
            l += 1
        } else if( options.numbers === true){
            n += 1
        } else if( options.upper === true){
            u += 1
        } else {
            s += 1
        }
    }
    console.log(u,l,n,s)
}

f1()

