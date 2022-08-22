import Head from 'next/head'

import Login from '../components/login.js'

function Index() {
  return(
    <>
      <Head><title>Rackodo Login</title></Head>
      <div className="wrapper">
        <Login title="Rackodo" />
      </div>
    </>
  )
}

export default Index