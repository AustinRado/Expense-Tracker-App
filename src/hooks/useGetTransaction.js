import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"; 
import {db} from '../config/firebase.config';
import {useGetUserInfo} from "./useGetUserInfo";

export const useGetTransaction = () => {
   const [transactions, setTransactions] = useState([]); //state to keep track of transactions
   const [transactionsTotals, setTransactionsTotals] = useState({balance:0.0, income: 0.0, expenses: 0.0 }); //state to keep track of transactions

   const transactionCollectionRef = collection(db, "transaction");
   const {userId} = useGetUserInfo();

   const getTransaction = async() =>{
    //query the database
  
    try {
        //make a reference to collection to query
        const queryTransactions = query(transactionCollectionRef, where("userId", "==", userId), orderBy("createdAt") );
        //snapshot is the data (queryTransactions)
         onSnapshot(queryTransactions, (snapshot) => {
            let docs = [];
            let totalIncome = 0;
            let totalExepenses = 0;
            
            snapshot.forEach((doc)=>{
                const data = doc.data();
                const id = doc.id;
                //array that is going to keep track of each of the documents
                docs.push({...data, id});

                if (data.transactionType === "expense"){
                    totalExepenses += Number(data.transactionAmount);
                }else {
                    totalIncome += Number(data.transactionAmount);
                }
            });
            
            setTransactions(docs);

            let balance =  totalIncome -  totalExepenses;

            setTransactionsTotals({
                balance,
                expenses: totalExepenses,
                income: totalIncome
            });
        });
       
    } catch (error) {
        console.log(error);
    }
   };

   useEffect(()=>{
    getTransaction();
   }, []);

    return{transactions, transactionsTotals};
};

//No access to getTransaction function....the getTransactions happens consistently
// put getTransaction in the useEffect hook