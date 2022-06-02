import styled from "styled-components";

export const Container = styled.div`
    .nav-item{
        padding-right: 1rem;
    }

    .nav-link{
        color: white;
        transition: 0.3s;
        border-radius: 1rem;
    }

    .nav-link:hover{
        background: #2b2b2b;
    }

    #query{
        background: black;
        color: #c5c5c5;
        border-style: none;
        border-radius: 1rem;
        padding: 0.5rem;
    }

    #btnSearch{
        background-color: black;
        color: white;
        font-weight: bolder;
        max-width: fit-content;
        margin-left: 1rem;
        border-radius: 1rem;
        border-style: none;
        transition: 0.3s;
        display: inline-flex;
    }

    #btnSearch:hover{
        background-color: #2b2b2b;
        border-radius: 0.9rem;
    }
`