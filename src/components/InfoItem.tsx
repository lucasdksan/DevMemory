import * as Container from "../styles/components/Infoitem.style";

type PropsInfo = {
    label: string;
    value: string;
};

const InfoItem = ({ label, value }: PropsInfo)=>{
    return(
        <Container.Container>
            <Container.Label>{label}</Container.Label>
            <Container.Value>{value}</Container.Value>
        </Container.Container>
    );
}

export default InfoItem;