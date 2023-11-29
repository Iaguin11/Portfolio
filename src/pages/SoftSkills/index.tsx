import { ShowSkills } from '../../components/ShowSkills'
import { SoftContainer, SoftContent } from './styles'
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoSass,
} from 'react-icons/bi'
import { FaBootstrap } from 'react-icons/fa'
import { SiTypescript, SiReact, SiStyledcomponents } from 'react-icons/si'
import { BsGit, BsGithub } from 'react-icons/bs'

export function SoftSkill() {
  return (
    <SoftContainer>
      <SoftContent>
        <div>
          <ShowSkills props="HTML" icon={<BiLogoHtml5 />} />
          <ShowSkills props="CSS" icon={<BiLogoCss3 />} />
          <ShowSkills props="JavaScript" icon={<BiLogoJavascript />} />
          <ShowSkills props="Sass" icon={<BiLogoSass />} />
          <ShowSkills props="Bootstrap" icon={<FaBootstrap />} />
          <ShowSkills props="Git" icon={<BsGit />} />
          <ShowSkills props="GitHub" icon={<BsGithub />} />
          <ShowSkills props="TypeScript" icon={<SiTypescript />} />
          <ShowSkills props="React" icon={<SiReact />} />
          <ShowSkills props="Styled Components" icon={<SiStyledcomponents />} />
        </div>
      </SoftContent>
    </SoftContainer>
  )
}
