import styled from "styled-components";

export const Container = styled.div`
    padding: 4rem 0;
    position: relative;
    z-index: 5;

    .bg{
        background: no-repeat;
        position: absolute;
        background-size: cover;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        opacity: .3;
        box-shadow: inset 100px -100px 100px 10px #ffffff;
    }

    h1{
        margin: 3rem 0;
    }

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 300px;
        border-radius: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    button{
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.5s;
    }

    button:hover{
        background: #5848c2;
    }

    span{
        line-height: 130%;
        font-size: 110%;
        margin-bottom: 1rem;
    }

    .release-date{
        opacity: 0.5;
    }
`
export const Title = styled.h1`
    text-align: left;
    padding: 1rem;
    margin-left: 1rem;
`