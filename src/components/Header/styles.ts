import { motion } from 'framer-motion'
import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakponits'

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding-right: 10px;
  }
  @media (max-width: 500px) {
    padding-right: 10px;
  }
`

export const NavMenu = styled.nav`
  height: 1vh;
  filter: drop-shadow(1px 1px 1px #5116a9);
  width: 9%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: ${(props) => props.theme['gray-900']};
  }
  li {
    color: ${(props) => props.theme.rosa};
    display: block;
    transform-origin: -20px 50%;
    cursor: pointer;
  }
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 10px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 40%;
  }
  @media (max-width: 500px) {
    width: 20%;
  }
`
export const MotionButton = styled(motion.button)`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme.rosa};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin-top: 1.25rem;
  cursor: pointer;
`
