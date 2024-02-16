import {Settoken, GetToken} from '../action/loginAction'


const initialState = {
    token: ""
}

 const loginReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case Settoken:
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