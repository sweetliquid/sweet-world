import styled, { css } from 'styled-components/macro'
import Head from 'next/head'
import React from 'react'
import Flyleaf from '../components/Flyleaf'

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

const Cover = styled.div`
  clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
`

function Content() {
  return (
    <main>
      <div className=" shadow mx-auto p-3">
        <Divider className="text-gray-400 my-3" color="#ccc">
          <h2 className="text-xl font-bold px-3">置顶文章</h2>
        </Divider>
        <div className="">
          <article className="shadow rounded-xl m-3 h-56 hover:shadow-xl flex overflow-hidden">
            <Cover className="w-1/2">
              <img
                className="rounded-l-xl transition transform hover:scale-110 hover:rotate-3 object-cover h-full"
                src="https://tva4.sinaimg.cn/mw690/6833939bly1gipewf5l51j20zk0m8b29.jpg"
              />
            </Cover>
          </article>
        </div>
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
