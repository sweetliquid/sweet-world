import styled from 'styled-components/macro'
import Head from 'next/head'
import React, { FC } from 'react'
import Flyleaf from '../components/Flyleaf'
import ImageCard from '../components/ImageCard'
import Divider from '../components/Divider'

const Header = styled.div`
  text-shadow: 4px 4px 4px pink;
`

const NavItemUnderLine = styled.div`
  border-top: 3px solid;
  width: 0;
  margin: 0 auto;
  transition: all 0.5s;
`

const NavItemWrapper = styled.div`
  :hover ${NavItemUnderLine} {
    width: 100%;
  }
`

const NavItem: FC<{ active?: boolean }> = ({ children }) => (
  <NavItemWrapper className="cursor-pointer">
    <div>{children}</div>
    <NavItemUnderLine />
  </NavItemWrapper>
)

function Navigation() {
  return (
    <div className="shadow-md sticky inset-0">
      <div className="flex container py-3 gap-5 text-md">
        <p className="md:hidden">X</p>
        <p className="cursor-pointer text-center flex-auto md:flex-initial">
          Sweet Liquid
        </p>
        <div className="hidden md:flex gap-5">
          <NavItem>主页</NavItem>
          <NavItem>关于</NavItem>
          <NavItem>文章</NavItem>
          <NavItem>链环</NavItem>
          <NavItem>开往</NavItem>
        </div>
        <p className="cursor-pointer transition-transform transform hover:scale-150 ml-auto">
          Theme
        </p>
        <p className="cursor-pointer transition-transform transform hover:scale-150">
          Search
        </p>
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
