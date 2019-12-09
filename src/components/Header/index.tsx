import Link from 'next/link'

import {
  Container,
  TitleContainer,
  Title,
  MenuContainer,
  Menu,
} from './Header.styled'

export default () => (
  <Container>
    <TitleContainer>
      <Title>
        KAIREN
      </Title>
    </TitleContainer>
    <MenuContainer>
      <Menu>
        Menu1
      </Menu>
      <Menu>
        Menu2
      </Menu>
    </MenuContainer>
  </Container>
)