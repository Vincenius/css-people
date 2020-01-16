import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    z-index: -2;
    min-height: 100vh;
    background: radial-gradient(circle at 90% 24%, rgba(209, 209, 209,0.04) 0%, rgba(209, 209, 209,0.04) 50%,rgba(160, 160, 160,0.04) 50%, rgba(160, 160, 160,0.04) 100%),radial-gradient(circle at 91% 63%, rgba(45, 45, 45,0.04) 0%, rgba(45, 45, 45,0.04) 50%,rgba(87, 87, 87,0.04) 50%, rgba(87, 87, 87,0.04) 100%),radial-gradient(circle at 17% 2%, rgba(124, 124, 124,0.04) 0%, rgba(124, 124, 124,0.04) 50%,rgba(117, 117, 117,0.04) 50%, rgba(117, 117, 117,0.04) 100%),linear-gradient(88deg, rgb(33, 20, 105),rgb(1, 15, 13));
    display: flex;
    align-items: center;
    justify-content: center;

    .us {
        display: flex;
        flex-flow: row;
        position: relative;
    }

    .me{
        display: grid;
        grid-template-areas: "......... head .........." "arm__left body arm__right" "leg__left .... leg__right";
    }
    .me .head {
        background-color: #f7ffaf;
        grid-area: head;
        height: 20px;
        width: 20px;
        margin: auto;
        position: relative;
    }
    .me .head.animate:after,
    .me .head.animate:before {
        -webkit-animation-name: eyes;
                animation-name: eyes;
        -webkit-animation-duration: 4s;
                animation-duration: 4s;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
    }
    .me .head:after,
    .me .head:before {
        content: '';
        width: 4px;
        height: 6px;
        background-color: #222;
        position: absolute;
        top: 5px;
        z-index: 2;
    }
    .me .head:after {
        left: 15%;
    }
    .me .head:before {
        right: 15%;
    }
    .me .body {
        background-color: #f7ffaf;
        grid-area: body;
        height: 50px;
        width: 30px;
    }
    .me .arm__left {
        background-color: #f7ffaf;
        grid-area: arm__left;
        height: 40px;
        width: 12px;
    }
    .me .arm__right {
        background-color: #f7ffaf;
        grid-area: arm__right;
        height: 40px;
        width: 12px;
    }
    .me .leg__left {
        background-color: #f7ffaf;
        grid-area: leg__left;
        height: 50px;
        width: 10px;
        position: relative;
        right: -15px;
    }
    .me .leg__right {
        background-color: #f7ffaf;
        grid-area: leg__right;
        height: 50px;
        width: 10px;
        position: relative;
        left: -10px;
    }
    .me .hair {
        position: absolute;
        background-color: #444;
        width: 100%;
        height: 10px;
        top: -7px;
        border-radius: 3px 6px 9px 12px;
    }
    .me .body {
        background-color: #42f483;
        position: relative;
    }
    .me .body:after {
        content: '';
        position: absolute;
        left: 3px;
        top: 0px;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 10px solid #f7ffaf;
        border-bottom: transparent;
        z-index: 2;
    }
    .me .arm__left {
        -webkit-transform: rotate(25deg);
                transform: rotate(25deg);
        position: relative;
    }
    .me .arm__left:before {
        content: '';
        background-color: #42f483;
        width: 100%;
        height: 10px;
        position: absolute;
        left: 0;
    }
    .me .arm__right {
        -webkit-transform: rotate(-25deg);
                transform: rotate(-25deg);
        position: relative;
    }
    .me .arm__right:before {
        content: '';
        background-color: #42f483;
        width: 100%;
        height: 10px;
        position: absolute;
        left: 0;
    }
    .me .leg__left {
        background-color: #333;
    }
    .me .leg__right {
        background-color: #333;
    }
    .you .hair {
        position: relative;
    }
    .you .hair:after, .you .hair:before {
        content: '';
        position: absolute;
        left: -10px;
        top: -10px;
        background-color: #474025;
        border-radius: 10px 10px 0 0;
        z-index: -1;
        width: 40px;
        height: 25px;
    }
    .dress {
        display: none;
        position: absolute;
        left: -13px;
        top: 10px;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 60px solid #444;
        border-top: transparent;
        z-index: -1;
    }
`