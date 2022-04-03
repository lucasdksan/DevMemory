import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        padding: 0px;
        width: auto;
    }
    #root{
        width: 100%;
        height: 100%;
    }
`;