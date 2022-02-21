import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display:  flex;
    align-items: center;
    justify-content: center;

    background: #f3f3f3;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 48px;
    }

    button {
        background: #c80000;
        border: 0;
        position: absolute;

        top: 16px;   
        
        border-radius: 8px;
        padding: 8px;
    }

`