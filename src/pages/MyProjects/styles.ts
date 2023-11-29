import styled from 'styled-components'
import about from '../../assets/about.svg'
import blurry from '../../assets/blurry.svg'

export const MyContainer = styled.div`
  background:
    url(${blurry}) no-repeat,
    url(${about}) no-repeat;
  background-size: cover, cover;
  height: 60vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`
