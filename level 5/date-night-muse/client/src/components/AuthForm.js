import React from "react";

export default function AuthForm(props){

    const {handleChange, 
        handleSubmit, 
        btnTxt, 
        errMsg, 
        inputs: {
         username, 
         password}} = props

    return (
        <>
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="text"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <button>{ btnTxt }</button>
            <p style={{color: "white"}}>{errMsg}</p>
            </form>
        </>
    )
}