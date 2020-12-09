import styled, { css } from 'styled-components/macro'
import Head from 'next/head'
import React from 'react'
import Flyleaf from '../components/Flyleaf'

const HEADER = styled.div`
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

const Divider = styled.div.attrs({ className: 'my-3' })`
  ${({ color = '#ccc' }) => css`
    color: ${color};
    display: flex;
    align-items: center;
    ::before {
      margin-right: 1rem;
    }
    ::after {
      margin-left: 1rem;
    }
    ::before,
    ::after {
      content: '';
      flex: auto;
      background-color: ${color};
      height: 1px;
    }
  `}
`

const Cover = styled.div`
  clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
`

function Content() {
  return (
    <main>
      <div className="mx-auto p-3">
        <Divider color="#ccc">
          <h2 className="text-xl font-bold">置顶文章</h2>
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
        <Divider color="#ccc">
          <h2 className="text-xl font-bold">精选分类</h2>
        </Divider>
        <Divider color="#ccc">
          <h2 className="text-xl font-bold">文章列表</h2>
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
      <HEADER className="text-white text bg-gray-400">
        <Navigation />
        <Flyleaf />
      </HEADER>
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
