import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthProvider, useAuth } from "../contexts"
import { Dashboard } from "../pages/Dashboard"
import { SignIn } from "../pages/SignIn"


export const AppRoutes = () => {

    const Private = ({ children }: { children: JSX.Element }) => {
        const { user } = useAuth()

        if (!user) {
            return <Navigate to='/' />
        }

        return children
    }

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route
                        path="/dashboard"
                        element={
                            <Private>
                                <Dashboard />
                            </Private>
                        } />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}