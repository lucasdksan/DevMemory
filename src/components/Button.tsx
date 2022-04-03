import * as Container from "../styles/components/Button.style";

type PropsButton = {
    label: string;
    icon ?: any;
    onClick: React.MouseEventHandler<HTMLButtonElement> ;
}

const Button = ({ label, icon, onClick }:PropsButton)=>{
    return(
        <Container.Container onClick={onClick}>   
            {
                icon && 
                <Container.IconArea>
                    <Container.Icon src={icon}/>
                </Container.IconArea>
            }
            <Container.Label>{label}</Container.Label>
        </Container.Container>
    );
}

export default Button;