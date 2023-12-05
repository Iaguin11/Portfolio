import styled from 'styled-components'
import about from '../../assets/about.svg'
import blurry from '../../assets/blurry.svg'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakponits'

export const ContainerContact = styled.div`
  height: 70vh;
  background:
    url(${blurry}) bottom,
    url(${about}) no-repeat;
  background-size: cover, cover;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  h1 {
    text-align: center;
    color: ${(props) => props.theme.rosa};
    border-bottom: 1px solid white;
    max-width: 300px;
    margin: 0 auto;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1 {
      max-width: 200px;
    }
  }
  @media (max-width: 500px) {
    h1 {
      max-width: 200px;
    }
  }
`
export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  gap: 60px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 70px;

    div {
      display: flex;
      gap: 70px;
    }

    input {
      display: flex;
      width: 296px;
      padding-bottom: 10px;
      align-items: center;
      background: transparent;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.rosa};
      color: ${(props) => props.theme.claro};
    }
    input::placeholder {
      display: flex;
      width: 36.871px;
      height: 20px;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;

      color: ${(props) => props.theme.rosa};
      font-family: 'Roboto';
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    div {
      flex-direction: column;
      gap: 30px;
    }
    form {
      gap: 40px;
      input {
        width: 250px;
      }
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    form {
      gap: 30px;
      input {
        width: 200px;
      }
    }
  }
  @media (max-width: 500px) {
    form {
      div {
        flex-direction: column;
        gap: 30px;
      }
      input {
        width: 250px;
      }
    }
  }
`
export const DivTextArea = styled.div`
  textarea {
    width: 670px;
    height: 177px;
    background: transparent;
    color: ${(props) => props.theme.claro};
    border: 1px solid ${(props) => props.theme.rosa};
    border-radius: 8px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    textarea {
      width: 500px;
      height: 150px;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    textarea {
      width: 200px;
      height: 100px;
    }
  }
  @media (max-width: 500px) {
    textarea {
      width: 250px;
      height: 100px;
    }
  }
`
export const ButtonContact = styled.button`
  display: flex;
  width: 333.19px;
  height: 52px;
  padding: 13px 109.575px 13px 109.93px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  border: 1px solid ${(props) => props.theme.rosa};
  background-color: ${(props) => props.theme.rosa};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.claro};
  }
  &:hover {
    transform: scale(1.1);
    background: ${(props) => props.theme.rosa};
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 180px;
    border-radius: 8px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    border-radius: 8px;
  }
  @media (max-width: 500px) {
    width: 190px;
  }
`
