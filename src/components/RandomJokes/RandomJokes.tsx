import axios from "axios"

import Button from "../Button/Button"
import Spinner from "../Spinner/Spinner"
import {
  ButtonWrapper,
  JokesContainer,
  JokeText,
  RandomJokesWrapper,
  Error,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  jokesSliceActions,
  jokesSliceSelectors,
} from "../../redux/slices/jokes/jokesSlice"

function RandomJokes() {
  const dispath = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    jokesSliceSelectors.jokesData,
  )

  const getJoke = async () => {
    dispath(jokesSliceActions.fetchStart())
    dispath(jokesSliceActions.clear())

    try {
      const result = await axios.get(
        "https://official-joke-api.appspot.com/random_joke",
      )
      console.log(result)
      dispath(
        jokesSliceActions.setJoke(
          `${result.data.setup} - ${result.data.punchline}`,
        ),
      )
    } catch (error: any) {
      console.log(error.message)
      dispath(jokesSliceActions.setError(error.message))
    } finally {
      dispath(jokesSliceActions.fetchEnd())
    }
  }

  return (
    <RandomJokesWrapper>
      <ButtonWrapper>
        <Button name="GET JOKES" onButtonClick={getJoke} />
      </ButtonWrapper>
      {isLoading && <Spinner />}
      <JokesContainer>
        {data && <JokeText>{data}</JokeText>}
        {error && <Error>{error}</Error>}
      </JokesContainer>
    </RandomJokesWrapper>
  )
}

export default RandomJokes
