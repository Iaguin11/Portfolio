import styled from 'styled-components'
import Home from '../../assets/home.svg'
import { motion } from 'framer-motion'

export const HomeContainer = styled.main`
  height: 100vh;
  background: url(${Home}) no-repeat;
  background-size: cover;
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
`
export const HomeH2 = styled(motion.h2)`
  color: ${(props) => props.theme.claro};
  font-size: 3rem;
  font-weight: 100;
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
