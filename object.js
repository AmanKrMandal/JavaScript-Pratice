// =============================================  property object
   
        let person = {
            fristName: 'aman',
            midldleName: 'kumar',
            lastName: 'mandal',
        }


        let name = person.fristName    ///ES6
        // console.log (name)    /////    ES6
        let {fristName : name,midldleName: address,lastName} = person
        console.log(name)        ///// ES6


        person.age = 23
        delete person.lastName
        console.log(person['fristName'])

        for (let x in person) {
            console.log(x +" : "+person[x])
        }

        // ===========================================  method Object

        let person ={
            fristName : 'aman',
            lastName : 'mandal',

            sayHello : function(){
                console.log('Hey!!!')
            },
            where(){
                console.log('im here')    //// ES6  ////
            }
        }
        person.sayHello()

        person.where()
