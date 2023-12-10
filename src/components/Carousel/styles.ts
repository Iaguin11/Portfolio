import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakponits'

export const ContainerProjects = styled.div`
  height: 10vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 2rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 30vh;
  }
`
export const ContentSwiperContainer = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 1rem;
  height: 40vh;
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    height: 70vh;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 55vh;
  }
`
export const ContentSwiper = styled.div`
  width: 484px;
  padding: 214.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  border: 4px solid ${(props) => props.theme.rosa};

  img {
    height: 200px;
    background-size: cover;
    object-fit: cover;
    border-radius: 8px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    border: none;
    img {
      height: 130px;
    }
  }
  @media (max-width: 500px) {
    border: none;
    img {
      border: none;
      height: 140px;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    border: none;
    img {
      height: 120px;
    }
  }
`
export const TitleAndLinks = styled.div`
  display: flex;
  height: 161px;
  padding: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  h3 {
    font-size: 2rem;
    font-family: 'Oswald';
    color: ${(props) => props.theme.rosa};
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button {
      padding: 0.7rem 1rem;
      background-color: ${(props) => props.theme.rosa};
      font-family: 'Roboto';
      border: 0;
      border-radius: 10px;
      font-weight: 700;

      transition:
        background-color 0.3s ease,
        transform 0.3s ease;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.claro};
      }
      &:hover {
        transform: scaleY(1.1);
        color: ${(props) => props.theme.claro};
      }
    }
  }
`
