import {Settoken, GetToken} from '../action/loginAction'


const initialState = {
    token: {
        username : "",
        password : ""
    }
}

 const loginReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case Settoken:
                console.log("reducerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",action.data);
                const obj = {
                    ...state,
                    token : action.data
                }
                return obj;
        case GetToken:{
            return state;
        }
        default:{
            return state;
        }
    }
}

export default loginReducer;