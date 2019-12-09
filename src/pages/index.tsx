import React from 'react'

import Layout from '../components/Layout'
import Font from '../font'
import {
  Container,
} from './index.styled'

export default class Index extends React.Component {
  componentDidMount() {
    Font()
  }

  render() {
    return (
      <Layout>
        <Container>
          Fuck
        </Container>
      </Layout>
    )
  }
}