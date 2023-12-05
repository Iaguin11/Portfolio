import styled from 'styled-components'
import about from '../../assets/about.svg'
import blurry from '../../assets/blurry.svg'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakponits'

export const AboutContainer = styled.div`
  height: 90vh;
  background:
    url(${blurry}),
    url(${about}) no-repeat;
  background-size: cover, cover;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    height: 100vh;
  }
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    span {
      width: 700px;
    }
  }
  @media (max-width: 500px) {
    span {
      width: 400px;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1 {
      font-size: 1.6rem;
    }
    span {
      width: 340px;
      font-size: 1.3rem;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    span {
      width: 300px;
      font-size: 1.2rem;
    }
  }
`
