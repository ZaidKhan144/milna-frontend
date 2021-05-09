import styled, { css } from 'styled-components'

export const EventBody = styled.div`
    margin: 120px auto;
    width: 80%;

    & h1{
        font-size: 20px;
        font-weight: bold;
        padding: 20px 0 5px 0;
    }

    & p {
        padding-bottom: 20px;
    }
`

export const Container = styled.div`

`

export const Top = styled.div`
    display: flex;

    & div:nth-child(1){
        width: 50%;
        & img{
            width: 100%;
        }
    }

    & div:nth-child(2){
        padding-left: 100px;
        & div{
            display: flex;
            align-items: center;
        
            & p:nth-child(2){
                padding: 0 0 0 20px;
            }

            & img{
                border-radius: 5px;
                width: 65px;
                height: 60px;
            }
        }
        & p:nth-child(2) {
            padding: 20px 0 0 0;
        }
        & p:nth-child(3) {
            padding: 10px 0 0 0;
        }
        & button{
            margin-top: 50px;
            font-size: 20px;
            background-color: orange;
            padding: 10px;
            border-radius: 5px;
        }
    }
`

export const Bottom = styled.div`

`