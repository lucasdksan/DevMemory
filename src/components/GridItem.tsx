import * as Container from "../styles/components/GridItem.style";
import { GridItemType } from "../types/GridItemType";

import { items } from "../data/items";

import b7SVG from "../assets/svgs/b7.svg";

type Props = {
    item: GridItemType,
    onClick: () => void,
}

const GridItem = ({ item, onClick }: Props)=>{
    return(
        <Container.Container 
            showBackground = {item.permanentShown || item.shown} 
            onClick={onClick}
        >
            {
                !item.permanentShown && !item.shown &&
                <Container.Icon src={b7SVG} opacity={0.1} alt=""/>
            }
            {
                (item.permanentShown || item.shown) && item.item !== null && 
                <Container.Icon src={items[item.item].icon} alt=""/>

            }
        </Container.Container>
    );
}

export default GridItem;