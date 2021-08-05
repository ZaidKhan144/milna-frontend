import styled, { css } from 'styled-components'

export const Header = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    

    & h1{
        margin: 0 80px;
        font-size: 25px;
        padding: 10px 0;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;

    & .darkness{
        font-size: 20px;
    }

`

export const LoginForm = styled.div`
    text-align: center;

    h1{
        font-size: 30px;
        padding: 20px 0;
    }
    p{
        font-size: 17px;

        a{
            color: #ff6250;
        }
    }
    input{
        display: block;
        background: transparent;
        border: 1px solid hsla(0,0%,100%,0.4);
        border-radius: 10px;
        width: 100%;
        margin-bottom: 30px;
        padding: 10px 20px;
        outline: none;
        transition: border 1s ease;
        
        &:focus{
            border: 1px solid #D8D8DC;
        }
    }
    button[type=submit]{
        background-color: #198f9e;
        border-radius: 50px;
        color: #fff;
        font-size: 18px;
        transition: all .5s ease;
        width: 100%;
        height: 48px;

        &:hover{
            background-color: #15a5b8;
        }
    }
`

export const Divider = styled.div`
    display: flex;
    height: 1px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: brown;
    margin-bottom: 40px;
    
    & h2{
        padding: 0 10px;
        background-color: #2b2b2b;
    }
    
`

export const GoogleBtn = styled.button`
    margin: 40px 0;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 70px;
    transition: all .3s ease;

    &:hover{
        background-color: #f5eaea;
    }
   
        & span:nth-child(1){
            width: 16px;
            height: 16px;
            & svg{
               width: 100%;
            }
        }
`
