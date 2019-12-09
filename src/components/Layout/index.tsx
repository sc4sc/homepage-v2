import Header from '../Header'
import Footer from '../Footer'

import {
  ViewPort,
  Container,
} from './Layout.styled'

export default function({ children }) {
  return (
    <ViewPort>
      <Header />
        <Container>
          {children}
        </Container>
      <Footer />
    </ViewPort>
  )
}