import { ChangeEvent, useState } from "react";
import { useAuth } from "../../contexts";
import { Container, Content } from "./styles";


export const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authenticate } = useAuth()

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }


    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }


    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        await authenticate(email, password)
    }


    return (

        <Container>
            <Content
                onSubmit={handleSubmit}
            >

                <h1>Faça seu login</h1>

                <input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={handleEmail}
                    required
                />


                <input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={password}
                    onChange={handlePassword}
                    required
                />


                <button type="submit">Entar</button>
            </Content>
        </ Container >
    )
}