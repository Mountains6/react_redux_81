import styled from "@emotion/styled"

interface MyButtonProps {
  $isDanger?: boolean
}

export const MyButton = styled.button<MyButtonProps>`
  width: 100%;
  padding: 0 30px;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  background-color: ${({ $isDanger }) =>
    $isDanger ? "rgb(116, 29, 32)" : "rgba(54, 97, 209, 0.9)"};
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #1c3d8a;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`
