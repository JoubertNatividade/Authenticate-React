import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export const Input: React.FC<InputProps> = ({ ...rest }: InputProps) => {

    return (
        <Container >
            <input
                {...rest}
            />
        </Container>
    )
}