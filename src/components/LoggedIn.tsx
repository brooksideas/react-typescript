import { useState } from 'react'

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null) // Type assertion ({} as boolean)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}> Login </button>
            <button onClick={handleLogout}> Logout </button>
            <div>User is {isLoggedIn ? 'logged In' : 'Logged Out '}</div>
        </div>
    )
}