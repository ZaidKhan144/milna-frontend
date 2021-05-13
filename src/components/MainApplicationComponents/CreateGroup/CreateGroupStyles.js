import styled, { css } from 'styled-components'

export const MainForm = styled.div`
    margin: 80px auto;
    width: 80%;

    & form {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 0 auto; 
        padding: 40px 0; 

        & label{
            margin: 15px 0;
            font-size: 20px;
            font-weight: bold;
        }
        & input{
            padding: 5px 0;
        }
        & button{
            margin-top: 30px;
            padding: 10px 0;
            border-radius: 3px;
            background-color: #198f9e; 
        }
    }
`