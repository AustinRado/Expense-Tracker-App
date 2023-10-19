export const ExpenseTracker = () =>{
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
                <form>
                    <input type="text" placeholder="Description" required/>
                    <input type="number" placeholder="Amount" required/>
                    <input type="radio" id="expense" value="expense" required/>
                    <label htmlFor="expense">Expenses</label>
                    <input type="radio" id="income" value="income" required/>
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