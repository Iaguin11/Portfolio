import { Header } from '../../components/Header'
import {
  ArrowContainer,
  Circule,
  HomeCircule,
  HomeContainer,
  HomeDiv,
  HomeH1,
  HomeH2,
} from './styles'
import {
  CaretDown,
  GithubLogo,
  WhatsappLogo,
  LinkedinLogo,
} from 'phosphor-react'

export function Home() {
  return (
    <>
      <HomeContainer id="home">
        <Header />
        <HomeDiv>
          <HomeH1
            initial={{ y: -40 }}
            animate={{ y: 10 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Olá, Me chamo Iago Novaes
          </HomeH1>
          <HomeH2
            initial={{ y: 100 }}
            animate={{ y: 10 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Desenvolvedor Front-end
          </HomeH2>
          <HomeCircule>
            <Circule>
              <a
                href="https://github.com/Iaguin11"
                target="_black"
                rel="noopener noreferrer"
              >
                <GithubLogo size={34} />
              </a>
            </Circule>
            <Circule>
              <a
                href="https://www.linkedin.com/in/iago-novaes-dev/"
                target="_black"
                rel="noopener noreferrer"
              >
                <LinkedinLogo size={34} />
              </a>
            </Circule>
            <Circule>
              <a
                href="https://wa.me/5522997509481"
                target="_black"
                rel="noopener noreferrer"
              >
                <WhatsappLogo size={34} />
              </a>
            </Circule>
          </HomeCircule>
        </HomeDiv>
        <ArrowContainer>
          <span>
            <CaretDown size={36} />
          </span>
        </ArrowContainer>
      </HomeContainer>
    </>
  )
}
