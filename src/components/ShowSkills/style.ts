import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakponits'

export const ShowSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
  padding: 10px;
  font-size: 4rem;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.rosa};
  background: ${(props) => props.theme['gray-900']};

  p {
    font-size: 1.3rem;
    color: ${(props) => props.theme.rosa};
  }

  &:hover {
    background: transparent;
    transform: scaleY(1.1);
    transition: transform 0.2s ease-in-out;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content: center;
    width: 120px;
    font-size: 2.4rem;
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    width: 150px;
    font-size: 2.8rem;
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    width: 140px;
    font-size: 2rem;
    p {
      font-size: 1.2rem;
    }
  }
`
