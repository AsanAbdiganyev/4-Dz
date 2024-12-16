import React, { useState, useEffect } from "react";
import MainPage from "./pages/mainPage/MainPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./App.css"

function App() {
    const [user, setUser] = useState({ name: "", lastname: "" })
    const [isAuthorized, Authorized] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const name = prompt("Введите  имя:")
        const lastname = prompt("Введите фамилию:")
        setUser({ name, lastname })

        if (name === "John" && lastname === "Johns") {
            Authorized(true)
        }
        setIsSubmitted(true)
    }, [])
    if (!isSubmitted) {
        return <div>
            <h2>подождите...</h2>
        </div>
    }

    return (
        <div className="App">
            {isAuthorized ? (
                <MainPage user={user} />
            ) : (
                <ErrorPage user={user} />
            )}
        </div>
    )
}

export default App;
