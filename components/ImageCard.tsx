import React from 'react'
import cx from 'classnames'
import styled from 'styled-components/macro'

const Cover = styled.div`
  clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
`

const CoverImage = styled.img``

const Wrapper = styled.article`
  :hover {
    ${CoverImage} {
      transform: scale(1.3) rotate(6deg);
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
      <Cover className="overflow-hidden rounded-l-xl w-1/2">
        <CoverImage
          className="transition object-cover w-full h-full"
          src={backgroundImage}
        />
      </Cover>
    </Wrapper>
  )
}
