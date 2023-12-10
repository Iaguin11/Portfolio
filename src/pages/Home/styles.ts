import styled from 'styled-components'
import Home from '../../assets/home.svg'
import { motion } from 'framer-motion'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakponits'

export const HomeContainer = styled.main`
  height: 100vh;
  background: url(${Home}) no-repeat;
  background-size: cover;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    background: url(${Home}) no-repeat center;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    background: url(${Home}) no-repeat center;
    background-size: 400px;
  }
`
export const HomeDiv = styled(motion.div)`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const HomeH1 = styled(motion.h1)`
  font-family: 'Oswald';
  color: ${(props) => props.theme.rosa};
  font-size: 4rem;
  font-weight: 600;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    font-size: 2rem;
  }
`
export const HomeH2 = styled(motion.h2)`
  color: ${(props) => props.theme.claro};
  font-size: 3rem;
  font-weight: 100;
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    font-size: 1.6rem;
  }
`
export const HomeCircule = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 14px;
`
export const Circule = styled.span`
  border: 2px solid ${(props) => props.theme.claro};
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.claro};
  }

  &:hover {
    background-color: ${(props) => props.theme.rosa};

    transition: background-color 0.3s;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 3px;
  }
  @media (max-width: 500px) {
    padding: 3px;
  }
`
export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    animation: move 1.9s infinite ease-in-out;
    color: ${(props) => props.theme.rosa};
  }
  @keyframes move {
    0% {
      margin-top: 0;
    }
    50% {
      margin-top: 50px;
    }
    100% {
      margin-top: 0px;
    }
  }
`
