import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import Font from '../font'

export default class Index extends React.Component {
  componentDidMount() {
    Font()
  }

  render() {
    return (
      <Layout>
        FUck
      </Layout>
    )
  }
}