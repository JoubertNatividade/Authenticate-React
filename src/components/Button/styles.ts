import styled from "styled-components";



export const Container = styled.button` 
    width:  100%;
    height: 52px;
    border: 0;
    border-radius: 8px;
    background: #103C67;
    color: #fff;
    font-size: x-large;

    margin-top: 32px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8)
    }
`