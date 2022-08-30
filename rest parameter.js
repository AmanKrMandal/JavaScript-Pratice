 function sum(...add){
        let result =0;

        for(let i=0; i<add.length; i++)
        {
            result = add[i]+result
        }
        return result
        }
        console.log(sum(1+2+3+4))
