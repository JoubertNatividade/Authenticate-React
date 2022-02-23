import { ButtonHTMLAttributes } from "react"

import { Container } from "./styles"



type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


export const Button: React.FC<ButtonProps> = ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    )

}