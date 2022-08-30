 class Person{
            constructor(fristName,lastName){
                this.frist= fristName
                this.last = lastName
            }
            walk(){
                console.log(`${this.frist} ${this.last} walk vert fast`)
            }
            static eat(){
                console.log(`eating over loaded`)
            }
        }

        let person1 = new Person('aman','mandal')
        person1.walk() 
        Person.eat()
