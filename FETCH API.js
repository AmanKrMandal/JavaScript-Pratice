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

 
 
 
 
 
 
 
 
 
 import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  // const[data,setData] = useState([])

  // useEffect(() => {
  //   axios.get("https://60ef36aaf587af00179d3969.mockapi.io/fitbots/interview/articles")
  //     .then((res) => {
  //       console.log("res", res.data)
  //     })
  //     .catch((error) => {
  //     console.log("error",error)
  //   })
  // }, []);






  const getAPIData = async () => {
    try {
      const res = await axios.get("https://60ef36aaf587af00179d3969.mockapi.io/fitbots/interview/articles")
      console.log("res", res);
    } catch (error) {
      console.log("erroe", error.message)
    }
  }
  useEffect(() => {
    getAPIData()
  })

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;







