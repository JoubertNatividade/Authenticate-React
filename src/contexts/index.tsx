import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface IContext {
    user: object;
    authenticate: (email: string, password: string) => Promise<void>
    logout: () => void
}

interface IAuthState {
    user: object;
    token: string
}

const AuthContext = createContext({} as IContext)


export function AuthProvider({ children }: { children: JSX.Element }) {

    const [data, setData] = useState<IAuthState>({} as IAuthState)

    const navigation = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (user && token) {
            setData({ user: JSON.parse(user), token });
            navigation('/dashboard');
        }

    }, [navigation])

    async function authenticate(email: string, password: string) {
        const response = await api.post("/sessions", {
            email,
            password
        })

        const { token, user } = response.data;

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token)

        if (user && token) {
            setData({ user, token })
            navigation('/dashboard')
        }
    }

    function logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setData({} as IAuthState)
        navigation('/')
    }

    return (
        <AuthContext.Provider value={{ authenticate, logout, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}