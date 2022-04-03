import styled from "styled-components";
import colors from "../themes/color.styles";

export const Container = styled.div`
    margin: 20px 0;
`;
export const Label = styled.label`
    font-size: 15px;
    color: ${colors.color_text_blue};
`;
export const Value = styled.p`
    font-size: 37px;
    font-weight: bold;
    color: ${colors.color_text_dark_blue};
`;