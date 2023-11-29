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
import { CaretDown, GithubLogo, InstagramLogo } from 'phosphor-react'

export function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <HomeDiv>
          <HomeH1
            initial={{ y: -40 }}
            animate={{ y: 10 }}
            transition={{ type: 'spring', stiffness: 120 }}
            // transition={{ delay: 0.2 }}
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
              <GithubLogo size={34} />
            </Circule>
            <Circule>
              <InstagramLogo size={34} />
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
