 import React from 'react'
 import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'
 import Video from './../../videos/video.mp4'
 
 const HeroSection = () => {

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video}  type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Рекомендательный сервис для оценки эффективности новых цифровых каналов продвижения продуктов банка</HeroH1>
                <HeroP>
                    На основе предоставленных банком данных и мониторинга маркетинговых платформ
                </HeroP>
            </HeroContent>
        </HeroContainer >
   )
 }
 
 export default HeroSection