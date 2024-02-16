
export const Settoken = "Settoken";
export const GetToken = "GetToken";

export const Set_token = (data) =>{
    return {
        type:Settoken,
        data:data
    };
}

export const Get_Token = () =>{
    return {
        type:GetToken
    };
}

export const FetchUserDetails = (data) =>{
    return  (dispatch)=>{
        
        data.tempevent("Action")
            dispatch(Set_token())
          console.warn("FetchUserDetails",data )

    }
}