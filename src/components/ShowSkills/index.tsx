import { ReactNode } from 'react'
import { ShowSkillsContainer } from './style'

interface ShowSkillsProps {
  props: string
  icon: ReactNode
}

export function ShowSkills({ props, icon }: ShowSkillsProps) {
  return (
    <>
      <ShowSkillsContainer>
        {icon}
        <p>{props}</p>
      </ShowSkillsContainer>
    </>
  )
}
