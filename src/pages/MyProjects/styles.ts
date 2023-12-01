import styled from 'styled-components'
import about from '../../assets/about.svg'
import blurry from '../../assets/blurry.svg'

export const MyContainer = styled.div`
  background:
    url(${blurry}),
    url(${about}) no-repeat;
  background-size: cover, cover;
  height: 70vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`
