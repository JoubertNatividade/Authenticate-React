import { useAuth } from "../../contexts";
import { Container, Content } from "./styles";


export const Dashboard = () => {

    const { logout } = useAuth()

    const handleSubmit = () => {

        logout()
    }

    return (
        <Container>
            <Content>
                <h1>Dashboard</h1>


                <button onClick={handleSubmit}>Logout</button>
            </Content>
        </ Container >
    )
}