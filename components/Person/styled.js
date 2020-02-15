import styled from 'styled-components'

const dress = false
const backgroundGradient = 'radial-gradient(circle at 90% 24%, rgba(209, 209, 209,0.04) 0%, rgba(209, 209, 209,0.04) 50%,rgba(160, 160, 160,0.04) 50%, rgba(160, 160, 160,0.04) 100%),radial-gradient(circle at 91% 63%, rgba(45, 45, 45,0.04) 0%, rgba(45, 45, 45,0.04) 50%,rgba(87, 87, 87,0.04) 50%, rgba(87, 87, 87,0.04) 100%),radial-gradient(circle at 17% 2%, rgba(124, 124, 124,0.04) 0%, rgba(124, 124, 124,0.04) 50%,rgba(117, 117, 117,0.04) 50%, rgba(117, 117, 117,0.04) 100%),linear-gradient(88deg, rgb(33, 20, 105),rgb(1, 15, 13))'
const skinColor = '#f7ffaf'
const clothColor = '#42f483'
const pantsColor = '#333'

const size = 2

const hoverCode = `
    &:hover {
        filter: brightness(1.5);
        cursor: pointer;
    }
`

export const headCode = `
    background-color: ${skinColor};
    grid-area: head;
    height: ${size * 20}px;
    width: ${size * 20}px;
    margin: auto;
    position: relative;

    &::after,
    &::before {
        content: '';
        width: ${size * 4}px;
        height: ${size * 6}px;
        background-color: #222;
        position: absolute;
        top: ${size * 5}px;
        z-index: 2;
    }
    &::after {
        left: 15%;
    }
    &::before {
        right: 15%;
    }
`

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    background: ${backgroundGradient};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Person = styled.div`
    display: grid;
    grid-template-areas: "......... head .........." "arm__left body arm__right" "leg__left .... leg__right";
    z-index: 3;
    position: relative;
`

export const Head = styled.div`
    ${headCode}
    ${hoverCode}
`

export const Hair = styled.div`
    position: absolute;
    background-color: #444;
    width: 100%;
    height: ${size * 10}px;
    top: -${size * 7}px;
    border-radius: ${size * 3}px ${size * 6}px ${size * 9}px ${size * 12}px;
`

/*
&::after, &::before {
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
*/

export const Body = styled.div`
    background-color: ${clothColor};
    grid-area: body;
    height: ${size * 50}px;
    width: ${size * 30}px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: ${size * 3}px;
        top: 0;
        border-left: ${size * 12}px solid transparent;
        border-right: ${size * 12}px solid transparent;
        border-top: ${size * 10}px solid ${skinColor};
        border-bottom: transparent;
        z-index: 2;
    }
`

export const Arm = styled.div`
    background-color: ${skinColor};
    height: ${size * 40}px;
    width: ${size * 12}px;

    &::before {
        content: '';
        background-color: ${clothColor};
        width: 100%;
        height: ${size * 10}px;
        position: absolute;
        left: 0;
    }
`

export const ArmLeft = styled(Arm)`
    grid-area: arm__left;
    transform: rotate(25deg);
    position: relative;
`

export const ArmRight = styled(Arm)`
    grid-area: arm__right;
    transform: rotate(-25deg);
    position: relative;
`

export const Leg = styled.div`
    background-color: ${dress ? skinColor : pantsColor};
    height: ${size * 50}px;
    width: ${size * 10}px;
    position: relative;
`
export const LegLeft = styled(Leg)`
    grid-area: leg__left;
    right: -${size * 13}px;
`
export const LegRight = styled(Leg)`
    grid-area: leg__right;
    left: -${size * 10}px;
`
export const Dress = styled.div`
    display: ${dress ? 'block' : 'none'};
    position: absolute;
    left: -${size * 15}px;
    top: ${size * 10}px;
    border-left: ${size * 30}px solid transparent;
    border-right: ${size * 30}px solid transparent;
    border-bottom: ${size * 60}px solid ${clothColor};
    border-top: transparent;
    z-index: 1;
`
