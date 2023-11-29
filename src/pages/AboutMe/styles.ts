import styled from 'styled-components'
import about from '../../assets/about.svg'
import blurry from '../../assets/blurry.svg'

export const AboutContainer = styled.div`
  height: 90vh;
  background:
    url(${blurry}),
    url(${about}) no-repeat;
  background-size: cover, cover;
`
export const AboutDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`
export const AboutContent = styled.div`
  display: flex;
  height: 26px;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 3rem;
    border-radius: 20px;
  }

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.rosa};
  }
  span {
    text-align: center;
    font-family: 'Archivo';
    font-size: 1.5rem;
    font-weight: 400;
    width: 1363.923px;
    justify-content: center;
    line-height: 140%;
    color: ${(props) => props.theme.white};
  }
`
