
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
        console.warn("FetchUserDetails",data )
            dispatch(Set_token(data))
          console.warn("FetchUserDetails",data )

    }
}