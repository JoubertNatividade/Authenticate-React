import { ChangeEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../contexts";
import { Container, Content, Background } from "./styles";


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
            <Content>
                <form
                    onSubmit={handleSubmit}
                >

                    <h1>Faça seu login</h1>

                    <Input
                        name="email"
                        type="email"
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChange={handleEmail}
                        required
                    />


                    <Input
                        name="password"
                        type="password"
                        placeholder="Digite sua Senha"
                        value={password}
                        onChange={handlePassword}
                        required
                    />


                    <Button>Entrar</Button>
                </form>
            </Content>

            <Background />


        </ Container >
    )
}