import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  //align-items: center;
 // justify-content: center;

  > img {
    height: 40px;
    width: 180px;

    padding-left: 20px;
    margin-right: 400px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
