import styled from 'styled-components/macro'

const Title = styled.h1`
  font-family: 'Fredericka the Great', Mulish, -apple-system, 'PingFang SC',
    'Microsoft YaHei', sans-serif;
  font-size: 3.5rem;
  line-height: 1.2;
`

const SubTitle = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.125rem;
  margin: 0.625rem 0;
`

export default function Flyleaf() {
  return (
    <div className="h-screen/2 flex justify-center items-center">
      <div className="text-right">
        <Title>Sweet Liquid</Title>
        <SubTitle>的理想乡</SubTitle>
      </div>
    </div>
  )
}
