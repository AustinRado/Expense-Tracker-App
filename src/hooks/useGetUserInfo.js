export const useGetUserInfo = () =>{
    //destructure the data stored in the localStorage
    const { name, profilePic, userId, isAuth  } = JSON.parse(localStorage.getItem("auth"));
    return { name, profilePic, userId, isAuth  };
};
