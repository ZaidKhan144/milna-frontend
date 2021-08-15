import styled, { css } from 'styled-components'

export const NavBar = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: forestgreen;
    
    & h1{
        margin: 0 80px;
        font-size: 15px;
        padding: 10px 0;
    }
    & a:nth-child(2){
        margin-right: 80px;
        font-size: 20px;
        padding: 10px 0;
    }

    li{
        list-style-type: none;
    }
`
export const Header = styled.div`
    margin: 100px 0 0 150px;
    width: 10%;

    & div{
        display: flex;
        justify-content: space-around;
        align-items: center;

        & a{
            font-size: 20px;
        }
    }
    & .active{
        border-bottom: 2px solid #fff;
    }
`