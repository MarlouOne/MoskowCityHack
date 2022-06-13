import React from 'react'
import { Tg1Chart } from '../Charts/Tg1Chart'
import { Tg2Chart } from '../Charts/Tg2Chart'
import { Tg3Chart } from '../Charts/Tg3Chart'
import { ChartWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading,
Subtitle, Column2 } from './InfoElements'


const InfoSection = ({ 
    id, 
    lightBg, 
    imgStart, 
    topLine, 
    lightText, 
    darkText, 
    headline, 
    subtitle
}) => {

  return (
    <div>
        <InfoContainer id={id} lightBg={lightBg}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ChartWrap>
                            < Tg2Chart />
                            < Tg1Chart />
                            < Tg3Chart />
                        </ChartWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
    </div>
  )
}

export default InfoSection