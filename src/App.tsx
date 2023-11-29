import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { SoftSkill } from './pages/SoftSkills'
import { MyProjects } from './pages/MyProjects'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
      <AboutMe />
      <SoftSkill />
      <MyProjects />
    </ThemeProvider>
  )
}
