import { useEffect, useState } from "react";
import * as Container from "../styles/pages/Home.styles";

import logoImage from "../assets/logo/devmemory_logo.png";
import resetIcon from "../assets/svgs/restart.svg";

import InfoItem from "../components/InfoItem";
import Button from "../components/Button";
import GridItem from "../components/GridItem";

import { GridItemType } from "../types/GridItemType";
import { items } from "../data/items";
import { formartTimeElapsed } from "../helpers/formatTimeElapsed";

const Home = ()=>{
    const [ playing, setPlaying ] = useState<boolean>(false);
    const [ timeElapsed, setTimeElapsed ] = useState<number>(0);
    const [ moveCount, setMoveCount ] = useState<number>(0);
    const [ shownCount, setShownCount ] = useState<number>(0);
    const [ gridItems, setGridItems ] = useState<GridItemType[]>([]);

    useEffect(()=>{
        resetAndCreateGrid();
    },[]);

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(playing){
                setTimeElapsed(timeElapsed + 1);
            }
        }, 1000);
        return () => clearInterval(timer);
    },[playing, timeElapsed]);

    useEffect(()=>{
        if(shownCount ===2){
            let opened = gridItems.filter(item => item.shown === true);
            if(opened.length === 2){
                if(opened[0].item === opened[1].item){
                    let tmpGrid = [...gridItems];
                    for(let i in tmpGrid){
                        if(tmpGrid[i].shown){
                            tmpGrid[i].permanentShown = true;
                            tmpGrid[i].shown = false;
                        }
                    }
                    setGridItems(tmpGrid);
                    setShownCount(0);
                    
                } else {
                    setTimeout(()=>{
                        let tmpGrid = [...gridItems];
                        for(let j in tmpGrid){
                            tmpGrid[j].shown = false;
                        }
                        setGridItems(tmpGrid);
                        setShownCount(0);
                    }, 1000);
                }

                setMoveCount(moveCount => moveCount +1);
            }
        }
    },[shownCount, gridItems]);

    useEffect(()=>{
        if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)){
            setPlaying(false);
        }
    },[moveCount, gridItems]);

    const resetAndCreateGrid = ()=>{
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);

        let tmpGrid:GridItemType[] = [];
        for(let i = 0; i<(items.length * 2); i++){
            tmpGrid.push({
                item: null,
                shown: false,
                permanentShown: false
            });
        }

        for(let w = 0; w < 2; w++){
            for(let j=0; j < items.length; j++){
                let pos = -1;
                while(pos < 0 || tmpGrid[pos].item !== null){
                    pos = Math.floor(Math.random()*(items.length * 2));
                }
                tmpGrid[pos].item = j; 
            }
        }

        setGridItems(tmpGrid);

        setPlaying(true);
    }

    const handleItemClick = (index:number)=>{
        if(playing && index !== null && shownCount < 2){
            let tmpGrid = [...gridItems];

            if(tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false){
                tmpGrid[index].shown = true;
                setShownCount(shownCount + 1);
            }

            setGridItems(tmpGrid)
        }
    }

    return(
        <Container.Container>
            <Container.Info>
                <Container.LogoLink>
                    <img src={logoImage} width="200" alt="Image Logo from Project DevMemory" />
                </Container.LogoLink>
                <Container.InfoArea>
                    <InfoItem label="Tempo" value={formartTimeElapsed(timeElapsed)} key={0}/>
                    <InfoItem label="Movimentos" value={moveCount.toString()} key={1}/>
                </Container.InfoArea>
                <Button label="Reiniciar" icon={resetIcon} onClick={resetAndCreateGrid}/>
            </Container.Info> 
            <Container.GridArea>
                <Container.Grid>
                    {
                        gridItems.map((element, index)=>{
                            return (
                                <GridItem
                                    key={index}
                                    item={element}
                                    onClick={()=> handleItemClick(index)}

                                />
                            )
                        })
                    }
                </Container.Grid>
            </Container.GridArea>
        </Container.Container>
    );
}

export default Home;