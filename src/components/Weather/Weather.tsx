import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "../../redux/slices/weather/weatherSlice"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import ApiError from "../../components/ApiError/ApiError"
import Spinner from "../Spinner/Spinner"
import { WeatherWrapper, WeatherCard, InputContainer } from "./styles"

function Weather() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isLoading, error: apiError } = useAppSelector(
    weatherSelectors.weatherData,
  )

  const formik = useFormik({
    initialValues: { city: "" },
    onSubmit: async (values, { setErrors }) => {
      const cityName = values.city.trim()

      if (!cityName) {
        setErrors({ city: "Please enter city name" })
        return
      }

      try {
        await dispatch(weatherActions.fetchWeather(cityName)).unwrap()
        navigate("/history")
      } catch (error) {
        console.error("Lookup failed:", error)
      }
    },
  })

  return (
    <WeatherWrapper>
      <WeatherCard>
        <InputContainer>
          <InputContainer>
            <Input
              name="city"
              placeholder="Enter city name"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.errors.city}
            />
            <Button
              name="Search"
              type="submit"
              onButtonClick={formik.handleSubmit}
            />
          </InputContainer>
        </InputContainer>
        {isLoading && <Spinner />}
        {apiError && !formik.errors.city && !isLoading && (
          <ApiError message={apiError} />
        )}
      </WeatherCard>
    </WeatherWrapper>
  )
}

export default Weather
