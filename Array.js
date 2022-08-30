  let person=[24,34,33,556]
        let x=person[1]

        let [one,two,three,four] = person  /// ES6 ARRAY DISTURTURING  ///
          console.log(one )

        person[1]=2
        person.unshift(2)
        person.push(1)
        person.pop()
        person.shift()

        console.log(person)
