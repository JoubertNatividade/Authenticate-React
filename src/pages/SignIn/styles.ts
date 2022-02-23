import styled from "styled-components"

import backgroundImg from '../../assets/sign-in.svg';

export const Container = styled.div`
  height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    max-width: 700px;

    form {
        margin-bottom: 80px;
        width: 340px;
        text-align: center;


        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction:  column;


        h1 {
            margin-bottom: 80px;
            font-size: 48px;
        }
}
`
export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
` 