import styled, { css } from 'styled-components'

export const Container = styled.div`
    margin: 50px 165px;

    & a{
        display: flex;
        margin-bottom: 30px;
        border-bottom: 2px solid #fff;
        padding-bottom: 30px;

        & div:nth-child(1){
            width: 20%;
            & img{
                width: 100%;
                border-radius: 10px;
            }
        }

        & div:nth-child(2){
            width: 100%;
            padding-left: 20px;
           
            & h1{
                font-size: 20px;
                font-weight: bold;
                padding-top: 5px;
           }
           & p:nth-child(2){
                padding: 5px 0;
           }
           & p:nth-child(3){
               padding: 10px 0;
           }
        }
    }
`