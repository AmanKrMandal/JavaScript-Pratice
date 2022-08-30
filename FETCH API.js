//get ---------------------------

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/list');
        const result = await response.json();
        setExpenses(result);
    }

    
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


