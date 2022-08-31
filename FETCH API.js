//get ---------------------------
    
   const test = async () => {
    try {
        const response = await fetch("sample.json")
        const result = await response.json();
        setExpenses(result); |OR| return(result);
    } catch (error) {
        console.log(error)
    }
}
  test().then((result) => {
    console.log(result)
  });


    
//post--------------------


 const addExpenseHandler = async (expense) => {
        let response = await fetch('http://localhost:5000/add', {
            method: "POST",
            body: JSON.stringify(expense),
            headers: {
                "Content-Type": "application/json"
            }
        });
        await response.json()
        fetchData();
    }


