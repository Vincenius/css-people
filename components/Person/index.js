import React from 'react'
import * as S from './styled'

// https://codepen.io/felipebernardes/pen/dREyVW
function Person() {
    const openEditor = part => {
        console.log(part)
    }
    return <S.Container>
        <S.Person>
            <S.Head onClick={() => openEditor('head')}>
                <S.Hair></S.Hair>
            </S.Head>
            <S.ArmLeft></S.ArmLeft>
            <S.ArmRight></S.ArmRight>
            <S.Body>
                <S.Dress></S.Dress>
            </S.Body>
            <S.LegLeft></S.LegLeft>
            <S.LegRight></S.LegRight>
        </S.Person>
    </S.Container>
}

export default Person
