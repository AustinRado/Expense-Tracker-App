import { useState } from "react";
import {useAddTransaction} from "../../hooks/useAddTransaction";

export const ExpenseTracker = () =>{

    const {addTransaction} = useAddTransaction();

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");

    /**
     * @desc for form submitting data
     */

    const onSubmit = async(e) =>{
        e.preventDefault();
        addTransaction({
            description,
            transactionAmount,
            transactionType,
        });
    }

    return (
        <>
     
            <div>
                <h1>USERNAME</h1>
                <div>
                    <h2>Balance</h2>
                    <p>$ 0.00</p>
                </div>
                <div>
                    <div>
                        <h4>Income</h4>
                        <p>$ 0.00</p>
                    </div>
                    <div>
                    <h4>Expenses</h4>
                    <p>$ 0.00</p>
                    </div>
                </div>
                <form
                onSubmit={onSubmit}
                >
                    <input 
                    type="text" 
                    placeholder="Description" 
                    required
                    onChange={(e)=>setDescription(e.target.value)}
                    />
                    <input 
                    type="number" 
                    placeholder="Amount" 
                    required
                    onChange={(e)=>setTransactionAmount(e.target.value)}
                    />
                    <input 
                    type="radio" 
                    id="expense" 
                    value="expense"
                    checked={transactionType === "expense"} 
                    onChange={(e)=>setTransactionType(e.target.value)}
                    />
                    <label htmlFor="expense">Expense</label>
                    <input 
                    type="radio" 
                    id="income" 
                    value="income" 
                    checked={transactionType === "income"}
                    onChange={(e)=>setTransactionType(e.target.value)}/>
                    <label htmlFor="income">Income</label>

                    <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >Add Transaction</button>
                </form>
            </div>
            <div>
                <h1>Transactions</h1>
            </div>
        
        </>
        )
}