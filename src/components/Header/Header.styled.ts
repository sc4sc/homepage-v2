import styled from 'styled-components'
import global from '../../global'

export const Container = styled.div`
  width: 100%;
  max-width: ${global.pageSize}px;
  height: 50px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
  background-color: gray;
  padding: 0 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TitleContainer = styled.div`
  width: 100px;
  height: 45px;
  background-color: blue;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-family: 'Cabin';
` 

export const Title = styled.span`
  font-size: 20px;
`

export const MenuContainer = styled.div`
  height: 45px;
  background-color: green;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const Menu = styled.a`
  font-size: 16px;
  text-decoration: none;
`
