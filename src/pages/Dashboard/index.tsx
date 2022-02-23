import { useAuth } from "../../contexts";
import { Container, Content } from "./styles";
import { FiLogOut } from 'react-icons/fi'

export const Dashboard = () => {

    const { logout, user } = useAuth()

    const handleSubmit = () => {

        logout()
    }

    return (
        <Container>
            <Content>
                <h1>Dashboard</h1>
                <hr />

                <h2>Olá  {user.name}, seja bem vindo!</h2>

                <button onClick={handleSubmit}>
                    <FiLogOut size={25} /> <p>Sair</p>
                </button>
            </Content>
        </ Container >
    )
}   