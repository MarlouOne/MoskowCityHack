import React from 'react'
import { FifthChart } from '../Charts/FifthChart'
import { SecondChart } from '../Charts/SecondChart'
import { ThirdChart } from '../Charts/ThirdChart'

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
    subtitle, 
    Charts
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
                            <FifthChart />
                            <SecondChart />
                            <ThirdChart />
                        </ChartWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
    </div>
  )
}

export default InfoSection