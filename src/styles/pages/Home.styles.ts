import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0px;

    @media(max-width: 750px){
        flex-direction: column;
    }
`;
export const Info = styled.section`
    display: flex;
    flex-direction: column;
    width: auto;

    @media(max-width: 750px){
        margin-bottom: 50px;
        align-items: center;
    }
`;
export const GridArea = styled.section`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media(max-width: 750px){
        justify-content: center;
        margin: 0 20px;
    }
`;
export const LogoLink = styled.a`
    display: block;
`;
export const InfoArea = styled.aside`
    width: 100%;
    margin: 10px 0;

    @media(max-width: 750px){
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;
export const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 430px;
    @media(max-width: 750px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 320px){
        grid-template-columns: repeat(2, 1fr);
    }
`;