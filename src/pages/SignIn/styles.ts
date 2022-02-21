import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display:  flex;
    align-items: center;
    justify-content: center;

    background: #f3f3f3;
`

export const Content = styled.form`
    width: 380px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction:  column;


    h1 {
        margin-bottom: 80px;
        font-size: 48px;
    }

    input {
        width: 100%;
        border: 0;
        border-radius: 8px;
        padding: 16px;

        font-size: 16px;

        & + input {
            margin-top: 8px;
        }
    }

    button {
        width:  100%;
        height: 52px;
        border: 0;
        border-radius: 8px;
        background: #002;
        color: #fff;
        font-size: x-large;

        margin-top: 32px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8)
        }
    }
`