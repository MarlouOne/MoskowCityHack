import React from 'react'
import { Vk1Chart } from '../Charts/Vk1Chart'
import { Vk2Chart } from '../Charts/Vk2Chart'
import { Vk3Chart } from '../Charts/Vk3Chart'
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
                            < Vk2Chart />
                            < Vk1Chart />
                            < Vk3Chart />
                        </ChartWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
    </div>
  )
}

export default InfoSection