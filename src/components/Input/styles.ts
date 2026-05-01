import styled from "@emotion/styled"

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

export const Label = styled.label`
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin-left: 10px;
`

export const InputElement = styled.input`
  width: 100%;
  height: 50px;
  padding: 0px 30px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  font-size: 18px;
  box-sizing: border-box;
  color: white;
  outline: none;
  backdrop-filter: blur(10px);
  position: relative;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: white;
    background: rgba(255, 255, 255, 0.3);
  }
`

export const Error = styled.div`
  color: #ff4d4d;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 56px;
  left: 10px;
  white-space: nowrap;
`
