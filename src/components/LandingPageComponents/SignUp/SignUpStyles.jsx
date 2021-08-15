import styled, { css } from 'styled-components'

export const SignupForm = styled.form`
    text-align: center;
    width: 20%;

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
        color: #fff;
        
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

export const Name = styled.div`
    display: flex;
    justify-content: space-between;

    & input:nth-child(2){
        margin-left: 15px;
    }
`

