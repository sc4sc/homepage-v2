import styled from 'styled-components'
import global from '../../global'

export const ViewPort = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: ${global.pageSize}px;
  padding: 0 10px;
  background-color: gray;
`