import styled from 'styled-components';
import colors from '../themes/color.styles';

type ContanierProps = {
    showBackground: boolean,
}

type IconProps = {
    opacity?: number;
}

export const Container = styled.div<ContanierProps>`
    background-color: ${props => props.showBackground === true ? colors.color_button : colors.color_gray};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
`;
export const Icon = styled.img<IconProps>`
    height: 40px;
    width: 40px;
    opacity: ${props => props.opacity ?? 1};
`;
