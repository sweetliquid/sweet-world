import React from 'react'
import cx from 'classnames'
import styled from 'styled-components/macro'

const Cover = styled.img`
  clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
`

const Wrapper = styled.article`
  :hover {
    ${Cover} {
      transform: scale(1.1) rotate(3deg);
    }
  }
`

export default function ImageCard({
  // TODO: Replace default background image
  backgroundImage = 'https://tva4.sinaimg.cn/mw690/6833939bly1gipewf5l51j20zk0m8b29.jpg',
}) {
  return (
    <Wrapper
      className={cx(
        'flex',
        'm-3',
        'h-56',

        'rounded-xl',
        'overflow-hidden',
        'shadow',
        'hover:shadow-xl'
      )}
    >
      <div className="w-1/2">
        <Cover
          className={cx(
            'w-full',
            'h-full',

            'rounded-l-xl',
            'object-cover',
            'transition'
          )}
          src={backgroundImage}
        />
      </div>
    </Wrapper>
  )
}
