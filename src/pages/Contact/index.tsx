import {
  ButtonContact,
  ContainerContact,
  ContentInput,
  DivTextArea,
} from './styles'

export function Contact() {
  return (
    <ContainerContact id="Contact">
      <h1>Entre em contato</h1>
      <ContentInput>
        <form
          action="https://formsubmit.co/iagonovaes19@gmail.com"
          method="POST"
        >
          <div>
            <input type="text" name="name" placeholder="Nome" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/pages/home"
            />
          </div>

          <DivTextArea>
            <textarea name="message" id="area"></textarea>
          </DivTextArea>

          <ButtonContact type="submit">Enviar</ButtonContact>
        </form>
      </ContentInput>
    </ContainerContact>
  )
}
