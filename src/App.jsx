import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Auth} from "./pages/auth/auth";
import {ExpenseTracker} from "./pages/expense-tracker/expense_tracker";

import './App.css';

function App() {

  return (
    <>
    <Router>
    <h1 className='text-2xl font-bold'>Expense Tracker App</h1>
      <Routes>
        <Route path="/" exact element = {<Auth />} />
        <Route path="/expense-tracker" element={< ExpenseTracker/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
