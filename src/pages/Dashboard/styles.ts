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

    flex-direction: column;

    h1 {
        font-size: 48px;
        padding: 16px;
        border-bottom: 3px solid #000;
    }

    h2 {
        margin-top: 32px;
    }

    button {
        display: flex;
        align-items: center;
        background: transparent;
        border: 0;
        position: absolute;
        font-size: 18px;

        top: 32px;   
        
        p {
            margin-left: 16px;
        }
    }

`