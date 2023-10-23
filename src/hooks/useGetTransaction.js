import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"; 
import {db} from '../config/firebase.config';
import {useGetUserInfo} from "./useGetUserInfo";

export const useGetTransaction = () => {
   const [transactions, setTransactions] = useState([]); //state to keep track of transactions
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
            
            snapshot.forEach((doc)=>{
                const data = doc.data();
                const id = doc.id;
                //array that is going to keep track of each of the documents
                docs.push({...data, id});
            });
            
            setTransactions(docs);
        });
       
    } catch (error) {
        console.log(error);
    }
   };

   useEffect(()=>{
    getTransaction();
   }, []);

    return{transactions};
};

//No access to getTransaction function....the getTransactions happens consistently
// put getTransaction in the useEffect hook