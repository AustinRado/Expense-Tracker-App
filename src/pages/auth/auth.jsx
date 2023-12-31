
import {auth, provider} from "../../config/firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate} from "react-router-dom";
import {useGetUserInfo} from "../../hooks/useGetUserInfo";

export const Auth = () =>{
    const navigate = useNavigate();
    const {isAuth} = useGetUserInfo();
    /**
     * @desc calls a firebase package
     * 
     * 
     */ 
    const signInWithGoogle = async () =>{
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userId: results.user.uid,
            name: results.user.displayName,
            profilePic: results.user.photoURL,
            isAuth:  true,
        };
        //setting local storage
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/expense-tracker");
    };
    if (isAuth){
        return <Navigate to = "/expense-tracker"/>;
    }
   
    return (
        <>
        <div>
            <p>Sign in with google to continue</p>
            <button 
            onClick={signInWithGoogle}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Sign in with google
            </button>
        </div>
        </>
    )
}