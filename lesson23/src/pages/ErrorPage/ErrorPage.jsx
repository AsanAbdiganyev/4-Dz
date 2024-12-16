import React, { useState, useEffect } from "react"



const ErrorPage = ({ user }) => {
    const [state, setState] = useState({ name: "", lastname: "" })

    useEffect(() => {
        setState({ name: user.name, lastname: user.lastname })
    }, [user])

    return (
        <div>
            <h1>Тебе сюда нельзя -->{state.name} {state.lastname}</h1>
            <img src="https://cs8.pikabu.ru/post_img/2017/01/30/6/1485767709141943526.jpg" alt=""/>
        </div>
    );
};

export default ErrorPage;
