export const useGetUserInfo = () =>{
    //destructure the data stored in the localStorage
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData){
        const { name, profilePic, userId, isAuth  } = authData;
        return { name, profilePic, userId, isAuth  };
    } else{
        // Handle the case where "auth" data is not found in localStorage
    return { name:null, profilePic:null, userId:null, isAuth:false  };
    }
};
