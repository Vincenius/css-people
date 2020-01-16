import React from 'react'
import * as S from './styled'

// https://codepen.io/felipebernardes/pen/dREyVW
function Person() {
    return <S.Container>
        <div class="us">
            <div class="me">
                <div class="head">
                    <div class="hair"></div>
                </div>
                <div class="arm__left"></div>
                <div class="arm__right"></div>
                <div class="body">
                    <div class="dress"></div>
                </div>
                <div class="leg__left"></div>
                <div class="leg__right"></div>
            </div>
        </div>
    </S.Container>
}

export default Person
