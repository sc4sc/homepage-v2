import styled from 'styled-components'
import global from '../../global'

export const Background = styled.div`
  width: 100%;
  background-color: rgb(10, 10, 10);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: ${global.pageSize}px;
  height: 80px;
  padding: 0 10px;

  color: white;
`