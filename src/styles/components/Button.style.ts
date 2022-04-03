import styled from "styled-components";
import colors from "../themes/color.styles";

export const Container = styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: ${colors.color_button};
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;
    outline: none;
    border: none;

    &:hover{
        opacity: .8;
    }
`;
export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid ${colors.color_border};
    padding: 0 15px;
`;
export const Icon = styled.img`
    height: 20px;
`;
export const Label = styled.span`
    height: inherit;
    color: ${colors.color_white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0px 20px;
`;