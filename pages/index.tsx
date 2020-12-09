import styled, { css } from 'styled-components/macro'
import Head from 'next/head'
import React, { FC } from 'react'
import Flyleaf from '../components/Flyleaf'
import { ImageCard } from '../components/ImageCard'

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

const Divider = styled.div`
  display: flex;
  align-items: center;
  ::before,
  ::after {
    content: '';
    flex: auto;
    border-top: 1px solid;
    height: 1px;
  }
`

function Content() {
  return (
    <main>
      <div className=" shadow mx-auto p-3">
        <Divider className="text-gray-400 my-3" color="#ccc">
          <h2 className="text-xl font-bold px-3">置顶文章</h2>
        </Divider>
        <ImageCard></ImageCard>
        <Divider className="text-gray-400 my-3" color="#ccc">
          <h2 className="text-xl font-bold px-3">精选分类</h2>
        </Divider>
        <Divider className="text-gray-400 my-3" color="#ccc">
          <h2 className="text-xl font-bold px-3">文章列表</h2>
        </Divider>
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
