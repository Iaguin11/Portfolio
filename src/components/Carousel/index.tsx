import { Swiper } from 'swiper/react'
import {
  ContainerProjects,
  ContentSwiper,
  ContentSwiperContainer,
  TitleAndLinks,
} from './styles'
import { EffectCoverflow } from 'swiper/modules'
import { useEffect, useState } from 'react'
import { reposData } from '../../server'
import imgAcademia from '../../assets/academia.png'
import imgCalc from '../../assets/imgCal.png'
import imgDtMoney from '../../assets/Dt-money.png'

interface Repo {
  id: number
  img?: string
  name: string
  deployUrl: string
  description: string
  html_url: string
}
type ImageMap = {
  [key: string]: string
}
const imageMap: ImageMap = {
  'academia.png': imgAcademia,
  'imgCalc.png': imgCalc,
  'Dt-money.png': imgDtMoney,
}

export function Carousel() {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    setRepos(reposData)
  }, [])

  return (
    <ContainerProjects>
      <h1>Meus Projetos</h1>

      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {repos.map((repo) => (
          <ContentSwiperContainer key={repo.id}>
            <ContentSwiper>
              {repo.img && <img src={imageMap[repo.img]} alt="" />}
              <TitleAndLinks>
                <h3>{repo.name}</h3>
                <div>
                  <button>
                    <a
                      href={repo.deployUrl}
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      Deploy
                    </a>
                  </button>
                  <button>
                    <a
                      href={repo.html_url}
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      Projeto
                    </a>
                  </button>
                </div>
              </TitleAndLinks>
            </ContentSwiper>
          </ContentSwiperContainer>
        ))}
      </Swiper>
    </ContainerProjects>
  )
}
