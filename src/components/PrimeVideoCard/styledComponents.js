import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  height: 200px;
  width: 240px;
  margin-bottom: 20px;
  @media (max-width:768px){
    height:160px;
    width:180px;
  }
`
export const Thumbnail = styled.img`
  border-radius: 8px;
  height: 220px;
  width: 334px;
  cursor: pointer;
  margin-left:0px;
  @media (max-width:768px){
    height: 180px;
  width: 300px;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 25px;
  height: 25px;
  border: none;
  margin-top: 15px;
  margin-right: 15px;
  cursor: pointer;
  outline: none;
  color:gray;
`
export const PlayerContainer = styled.div`
  margin: 12px 50px 50px 50px;
  @media (max-width:768px){
    margin:8px 30px 30px 30px;
  }
`