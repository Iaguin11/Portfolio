import styled from 'styled-components'
import about from '../../assets/about.svg'
import blurry from '../../assets/blurry.svg'

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
`
