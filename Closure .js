let c= 15
const outer = (a)=>{
    let b= 10;
    const inner = ()=>{
        let sum = a+b+c;
        console.log(sum);
    }
   return inner;
}
let x =outer(5);
console.dir(x)
x()
