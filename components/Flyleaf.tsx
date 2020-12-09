import { FC } from 'react'
import cx from 'classnames'

const Title: FC = ({ children }) => (
  <h1 className="font-art text-6xl">{children}</h1>
)

const SubTitle: FC = ({ children }) => (
  <h2 className="font-serif text-3xl tracking-widest">{children}</h2>
)

export default function Flyleaf() {
  return (
    <div className={cx('flex-center', 'h-screen/2')}>
      <div className={cx(['grid', 'gap-3'], ['text-right'])}>
        <Title>Sweet Liquid</Title>
        <SubTitle>的理想乡</SubTitle>
      </div>
    </div>
  )
}
