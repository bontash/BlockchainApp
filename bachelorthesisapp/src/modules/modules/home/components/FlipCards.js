import styled from "styled-components";
export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-color: black;
  background-color: #FAF5E4;
  color: #F8B400;
  font-family: 'Trebuchet MS', sans-serif;
`

export const FlipCard = styled.div`
  background-color: transparent;
  width: 350px;
  height: 250px;
  perspective: 1000px;

  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

export const TextFrontFlipCard = styled.h2`
  padding: 90px 0;
`

export const LogoFrontFlipCard = styled.img`
  width: 90px;
  height: 90px;
  position: fixed;
  left:130px;
  bottom:90px;
`
export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`