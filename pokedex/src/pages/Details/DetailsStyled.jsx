import styled from "styled-components";


export const ContainerDetalhes = styled.div`
  width: 400px;
  margin: 0 auto;
  /* border: 1px solid black; */
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-image: linear-gradient(135deg, #051f40, #2c0d2f, #3b0326);

`;
export const HeaderStyle = styled.div`
  display: flex;
  background-color: #dc0a2d;
  border-radius: 10px;
  color: #dedede;
  justify-content: space-around;

  button {
    padding: 8px;
    background-image: linear-gradient(135deg, #051f40, #2c0d2f, #3b0326);
    border: none;
    cursor: pointer;
    color: white;

    &:hover {
      color: red;
    }
  }
`;

export const CardBasic = styled.div`
  display: flex;
  margin-top: 12px;
  padding: 12px;
  gap: 12px;
  /* border: 1px solid black; */
  width: 400px;
  /* background-color: #dedede; */
  color: white;
  justify-content: center;
  /* margin: 1%; */

    img {
      width: 100px;
    }
`;

export const Stats = styled.div`
  padding: 12px;
  color: white;
  
`
export const MainTagStyle = styled.div`
    display: flex;
    flex-direction: column;
    
    /* margin: 10px; */

`


