import styled from 'styled-components'
import blurry from '../../assets/blurry.svg'
import about from '../../assets/about.svg'

export const SoftContainer = styled.div`
  height: 90vh;
  background:
    url(${blurry}) bottom,
    url(${about}) no-repeat;
  background-size: cover, cover;
`
export const SoftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 20px;
  }
`
