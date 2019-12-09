import React from 'react'

import Layout from '../components/Layout'
import Font from '../font'

export default class Index extends React.Component {
  componentDidMount() {
    Font()
  }

  render() {
    return (
      <Layout>
        Fuck
      </Layout>
    )
  }
}