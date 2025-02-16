import { Expense } from "../model/Expense"

interface Props{
  expenses : Expense[]
}

const ExpenseList = ({expenses}: Props) => {

  return (
    <>
    <div>List of Expenses</div>
    <table border={1}>
    <thead>
        <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        {expenses.map(exp => <tr key={exp.expenseId}>
            <td>{exp.name}</td>
            <td>{exp.amount}</td>
            <td>{exp.expDate}</td>
        </tr>)}
    </tbody>
   </table>
   </>
  )
}

export default ExpenseList