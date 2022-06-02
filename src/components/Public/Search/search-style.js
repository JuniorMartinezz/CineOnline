import styled from "styled-components";

export const Container = styled.div`
    h1{
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

export const ContentList = styled.ul `
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px , 1fr));
    column-gap: 3rem;
    row-gap: 2rem;
`

export const Content = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a{
        transition: all 0.3s;
    }
    
    a:hover{
        transform: scale(1.1);
    }
`

export const Title = styled.h1`
    text-align: center;
    padding: 1rem;
`
