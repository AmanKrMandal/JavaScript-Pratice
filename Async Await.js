//---------example 1-----------------


async function test(){
    console.log("2: Message");
    const response = await fetch("sample.json")
    console.log("3: Message"); 
    const students = await response.json();
    return students;
    }
    console.log("1 : Message");
    let a = test();
    console.log("4: Message");
    console.log(a);

--------------------------
async function test(){
    console.log('a')
   await console.log('b')
    console.log('c')
}
console.log('1')
test()
console.log('2')
