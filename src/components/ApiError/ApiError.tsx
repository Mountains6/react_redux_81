import { ErrorCardWrapper, ErrorTitle, ErrorText } from "./sytles"
import { ApiErrorProps } from "./types"

function ApiError({
  title = "API Error",
  message = "Something went wrong with API data",
}: ApiErrorProps) {
  return (
    <ErrorCardWrapper>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorText>{message}</ErrorText>
    </ErrorCardWrapper>
  )
}

export default ApiError
