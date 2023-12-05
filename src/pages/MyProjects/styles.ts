import styled from 'styled-components'
import about from '../../assets/about.svg'
import blurry from '../../assets/blurry.svg'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakponits'

export const MyContainer = styled.div`
  background:
    url(${blurry}),
    url(${about}) no-repeat;
  background-size: cover, cover;
  height: 70vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    height: 100vh;
  }
  @media (max-width: 500px) {
    height: 90vh;
  }
`
