import styled from "styled-components";


export const Body = styled.body`
    background-color: #1C1F26;
    height: 100vh;
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
    font-family: arial;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const Container = styled.div`
    height: 400px;
    width: 350px;
    background-color: #333333;
    color: white;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
   
    input{
        margin: 5px 0;
        font-size: 16px;
        outline: none;
        padding: 5px;
        width: 70%;
     
    }
    
    .submit{
        width: 50%;
    }
`
export const HeaderText = styled.h1`
    text-align: center;
`

export const Paragrafo = styled.p`
    text-align: center;
    font-size: 20px;

    .servido{
        color: #673AB7;
    }
`