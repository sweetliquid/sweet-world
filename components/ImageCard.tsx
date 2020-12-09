import React from 'react'
import cx from 'classnames'
import styled from 'styled-components/macro'

const Cover = styled.div`
  clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
`

export function ImageCard({
  backgroundImage = 'https://tva4.sinaimg.cn/mw690/6833939bly1gipewf5l51j20zk0m8b29.jpg',
}) {
  return (
    <article className="shadow rounded-xl m-3 h-56 hover:shadow-xl flex overflow-hidden">
      <Cover className="w-1/2">
        <img
          className={cx(
            // shape
            'size-full',
            'object-cover',
            'rounded-l-xl',

            // transition
            'transition',
            'transform',
            'hover:scale-110',
            'hover:rotate-3'
          )}
          src={backgroundImage}
        />
      </Cover>
    </article>
  )
}
