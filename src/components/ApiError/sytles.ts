import styled from "@emotion/styled"

export const ErrorCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 40px;

  background: rgba(18, 72, 138, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  width: 100%;
  max-width: 500px;
  text-align: center;
  margin: 40px auto;
`

export const ErrorTitle = styled.h2`
  color: #ff4d4d;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
`

export const ErrorText = styled.p`
  color: white;
  font-size: 18px;
  margin: 0;
  opacity: 0.9;
`
