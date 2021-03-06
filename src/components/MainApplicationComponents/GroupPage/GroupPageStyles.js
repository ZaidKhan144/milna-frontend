import styled, { css } from 'styled-components'
import { Edit } from '@styled-icons/boxicons-regular/Edit'

export const Container = styled.div`

     margin: 120px auto;
     width: 70%;

`

export const Top = styled.div`
    display: flex;

    & div:nth-child(1){
        
        & h1{
            font-size: 20px;
            font-weight: bold;
            padding: 10px 0;
            padding-bottom: 30px;
        }
        & p:nth-child(3){
            padding: 10px 0;
        }    

        & button{
            margin-top: 50px;
            /* font-size: 20px; */
            background-color: #1f8287;
            padding: 10px;
            border-radius: 3px;
            width: 100%;
        }

        & a{
            display: block;
            margin-top: 50px;
            background-color: #1f8287;
            text-align: center;
            padding: 10px;
            border-radius: 3px;
        }
    }

    & div:nth-child(2){
        width: 55%;
        padding-left: 100px;

        & img{
            width: 100%;
            border-radius: 10px;
        }
    }
`

export const Bottom = styled.div`
    & h1{
        padding: 20px 0;
        font-size: 20px;
        font-weight: bold;
    }

    & p{
        margin-bottom: 20px;
    }

    & button{
        background-color: #d11a2a;
        padding: 10px;
        border-radius: 5px;
    }

`

export const EditButton = styled(Edit)`
    width: 10%;
`