  let x = new Promise(function(resolve,reject){
        console.log('pls... wait data fetching')
        let a= 1+1 
        setTimeout(()=>{
            if(a==1){
        resolve('sucess')
        }else{
        reject('Try again')
        }
        },2000)
        })
        x.then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })

-------------------------------------
          
          
        function value(a) {
            return new Promise(function (resolve, reject) {
                console.log('pls... wait data fetching')
                setTimeout(() => {
                    if (value == 2) {
                        resolve('sucess')
                    } else {
                        reject('Try again')
                    }
                }, 2000)
            });
        }
        value(2).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
