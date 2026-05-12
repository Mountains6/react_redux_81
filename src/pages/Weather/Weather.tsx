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
import Spinner from "../../components/Spinner/Spinner"
import { WeatherWrapper, WeatherCard, InputContainer } from "./styles"
import { WeatherData } from "../../redux/slices/weather/types"

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
      dispatch(weatherActions.fetchStart())

      try {
        const API_KEY = "fe2116ace6051e5aaec5b2b37cad6b1a"
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
        )

        if (!response.ok) {
          throw new Error("City not found")
        }

        const result = await response.json()

        const formattedData: WeatherData = {
          city: result.name,
          temp: `${Math.round(result.main.temp)}°`,
          description: result.weather[0].description,
          icon: result.weather[0].icon,
        }

        dispatch(weatherActions.fetchSuccess(formattedData))
        navigate("/history")
      } catch (error: any) {
        const errorMessage = error.message || "An error occurred"
        dispatch(weatherActions.fetchError(errorMessage))
        console.error("Lookup failed:", error)
      }
    },
  })

  return (
    <WeatherWrapper>
      <WeatherCard>
        <form onSubmit={formik.handleSubmit}>
          <InputContainer>
            <Input
              name="city"
              placeholder="Enter city name"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.errors.city}
            />
            <Button name="Search" type="submit" />
          </InputContainer>
        </form>
        {isLoading && <Spinner />}
        {apiError && !formik.errors.city && !isLoading && (
          <ApiError message={apiError} />
        )}
      </WeatherCard>
    </WeatherWrapper>
  )
}

export default Weather
