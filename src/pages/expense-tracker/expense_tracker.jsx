import { useState } from "react";
import {useAddTransaction} from "../../hooks/useAddTransaction";
import {useGetTransaction} from "../../hooks/useGetTransaction";
import {useGetUserInfo} from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import {auth} from "../../config/firebase.config";
import { useNavigate } from "react-router-dom";

export const ExpenseTracker = () =>{

    const {addTransaction} = useAddTransaction();
    const {transactions} = useGetTransaction();
    const {name, profilePic} = useGetUserInfo();

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");
    const navigate = useNavigate();

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
    };
    const signUserOut = async() =>{
        try {
            await signOut(auth);
            //clean up. Clear local storage and navigate towards the login page
            localStorage.clear();
            navigate("/");

        } catch (error) {
            console.error(error);
        }
    }; 

    return (
        <>
     
            <div>
                <h1>{name}</h1>
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
            {profilePic && (
                <div>
                    <img src={profilePic}></img>
                    <button  
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={signUserOut}
                    > sign out </button>
                </div>
            )}
            <div>
                <h1>Transactions</h1>
                <ul>
                {transactions.map((transaction) => {
                    const {description, transactionAmount, transactionType} = transaction;
                   return(
                    <li>
                <h4> {description} </h4>
                <p>
                  ${transactionAmount} •{" "}
                  <label
                    style={{
                      color: transactionType === "expense" ? "red" : "green",
                    }}
                  >
                    {" "}
                    {transactionType}{" "}
                  </label>
                </p>
              </li>
                   )
                })}
                </ul>
            </div>
        
        </>
        )
}