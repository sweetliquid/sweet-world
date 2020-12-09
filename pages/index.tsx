import styled from 'styled-components/macro'
import Head from 'next/head'
import React from 'react'
import Flyleaf from '../components/Flyleaf'
import { ImageCard } from '../components/ImageCard'
import Divider from '../components/Divider'

const Header = styled.div`
  text-shadow: 4px 4px 4px pink;
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

function Content() {
  return (
    <main>
      <div className="shadow mx-auto p-3">
        <div>
          <Divider className="text-gray-400 gap-3">
            <h2 className="text-xl font-bold">置顶文章</h2>
          </Divider>
          <ImageCard />
        </div>
        <div>
          <Divider className="text-gray-400 gap-3">
            <h2 className="text-xl font-bold">精选分类</h2>
          </Divider>
          <ImageCard />
          <ImageCard />
        </div>
        <div>
          <Divider className="text-gray-400 gap-3">
            <h2 className="text-xl font-bold">文章列表</h2>
          </Divider>
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </main>
  )
}

function Sidebar() {
  return <div className="bg-gray-400 h-full ml-6"></div>
}

function Footer() {
  return <div></div>
}

export default function Home() {
  return (
    <div>
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
      <Header className="text-white text bg-gray-400">
        <Navigation />
        <Flyleaf />
      </Header>
      <div className="flex container">
        <div className="flex-auto shadow-lg">
          <Content />
          <Footer />
        </div>
        <div className="hidden md:block w-60">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
