import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Navigate, Outlet } from 'react-router-dom'
import Loader from "../components/Loader/Loader"

const AnonRoute = () => {

    const { isLoggedIn, isLoading, user } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (user) {
        return <Navigate to={`/partners/${user._id}`} />
    }

    return <Outlet />
}

export default AnonRoute;