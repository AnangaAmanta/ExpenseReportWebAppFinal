import { useEffect, useState } from "react";
import ExpenseList from "../../component/ExpenseList";
import { Expense } from "../../model/Expense";
import apiClient from "../../config/api-client";

const Dashboard = () => {

    const [expenses, setExpense]  = useState<Expense[]>([]);
    const [error, setErrors] = useState(null);
    const [isLoading, setLoader] = useState(false);

    useEffect(() =>{
        //api call to backend system
        apiClient.get('/expenses')
        .then(response => {
            setExpense(response.data);
            setLoader(false)
        } )
        .catch(error => setErrors(error.message))
        .finally(() => setLoader(false));
    },[])
   
  return (
    <div>
        <ExpenseList expenses={expenses}/>
    </div>
  )
}

export default Dashboard