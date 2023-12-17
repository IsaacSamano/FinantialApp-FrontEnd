import React, { useState } from 'react'
import Login from '../pages/Login'
import App from '../pages/App'

const Router = () => {

    const [session, setSession] = useState(null)

    return (
        <>
            {
                session ? (
                    <App session={session} setSession={setSession} />
                ) : (
                    <Login setSession={setSession} />
                )
            }
        </>
    )
}

export default Router