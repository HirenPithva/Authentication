import React, {useState, dispatch, useEffect, useContext}  from 'react'
import {connect} from 'react-redux'
import {FetchUserDetails} from '../action/loginAction'
import {TokenContext} from '../parentComponent/TokenProvider'

const Login = (props)=>{
    const data = useContext(TokenContext);
    useEffect(()=>{
      
    },[]);

    const [uname, setUsername] = useState('');
    const [pwd, setPassword] = useState('');

    const setTokenEvent = (e)=>{
        e.preventDefault();
        console.log("form submitted")
        const temp ={
            tempevent : (tempToken)=>{data.setToken(tempToken)}
        }
        props.setToken(temp);
        // console.log("data",data)
    }
    const userInputHandler = (e)=>{
        setUsername(e.target.value);
    }
    const userPasswordHandler = (e)=>{
        setPassword(e.target.value);
    }

    return (
        <div style={{height:"500px", width:"500px"}}>
            <form onSubmit={setTokenEvent}>
                <label for="username">User name</label>
                <input id="username" type='text' onChange={(e)=> userInputHandler(e)}></input>
                <br></br>
                <label for="pwd">Password</label>
                <input id="pwd" type='password' onChange={(e)=> userPasswordHandler(e)}></input>
                <br></br>
                
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
    
    
}

const mapStateToProps = (state) =>{
    return {
        token: state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        setToken: (data)=> {dispatch(FetchUserDetails(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);