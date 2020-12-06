import styled from 'styled-components/macro'
import Head from 'next/head'

const HEADER = styled.div`
  text-shadow: 4px 4px 4px pink;
`

const TITLE = styled.h1`
  font-family: 'Fredericka the Great', Mulish, -apple-system, 'PingFang SC',
    'Microsoft YaHei', sans-serif;
  font-size: 3.5rem;
  line-height: 1.2;
`

const SUB_TITLE = styled.h2`
  font-family: 'Noto Serif SC', Mulish, -apple-system, 'PingFang SC',
    'Microsoft YaHei', sans-serif;
  font-size: 2rem;
  letter-spacing: 0.125rem;
  margin: 0.625rem 0;
`

function Navigation() {
  return (
    <div className="shadow-md">
      <div className="flex container p-2">
        <p className="m-1 md:hidden">X</p>
        <p className="m-1 text-center flex-auto md:flex-initial">
          Sweet Liquid
        </p>
        <div className="hidden md:flex">
          <p className="m-1">Home</p>
          <p className="m-1">About</p>
          <p className="m-1">Post</p>
          <p className="m-1">Link</p>
          <p className="m-1">Goto</p>
        </div>
        <p className="m-1 ml-auto">Theme</p>
        <p className="m-1">Search</p>
      </div>
    </div>
  )
}

function Flyleaf() {
  return (
    <div className="h-screen/2 flex justify-center items-center">
      <div className="text-right">
        <TITLE>Sweet Liquid</TITLE>
        <SUB_TITLE>的理想乡</SUB_TITLE>
      </div>
    </div>
  )
}

function Content() {
  return <div className="min-h-screen">Content</div>
}

function Sidebar() {
  return <div>Sidebar</div>
}

function Footer() {
  return <div>Footer</div>
}

export default function Home() {
  return (
    <div className="bg-gray-500">
      <Head>
        <title>Sweet Liquid 的理想乡</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HEADER className="text-white text">
        <Navigation />
        <Flyleaf />
      </HEADER>
      <Content />
      <Sidebar />
      <Footer />
    </div>
  )
}
