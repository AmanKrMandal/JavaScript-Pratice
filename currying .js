function getSum(a) {
    return function (b) {
        return function (c) {
            console.log(a + b + c);
        };
    };
};

getSum(8)(7)(1);

// ---- in one line ------------


const getSum = (a)=>(b)=>(c)=> a+b+c;
let total = getSum(8)(7)(1);
console.log(total)

