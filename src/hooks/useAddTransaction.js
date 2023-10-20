import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import {db} from '../config/firebase.config';
import {useGetUserInfo} from "./useGetUserInfo";

export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db, "transaction");
    const {userId} = useGetUserInfo();
    const addTransaction = async({description, transactionAmount, transactionType}) => {
        await addDoc(transactionCollectionRef, {
            userId, //get userId from local storage
            description,
            transactionAmount,
            transactionType,
            createdAt:serverTimestamp()

        });
    };
    return {addTransaction};
};