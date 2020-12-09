import classNames from 'classnames'
import styled from 'styled-components/macro'

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

export default Divider
