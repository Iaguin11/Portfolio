import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakponits'

export const ContainerFooter = styled.footer`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    h1 {
      font-size: 14px;
      font-family: 'Roboto';
      color: ${(props) => props.theme.rosa};
    }
    span {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    height: 30vh;
    padding: 20px;
    align-items: end;
  }
`
