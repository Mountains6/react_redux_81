import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "../../redux/slices/weather/weatherSlice"
import Button from "../../components/Button/Button"
import {
  HistoryWrapper,
  HistoryTitle,
  HistoryGrid,
  HistoryCard,
  DecorationImg,
  ClearButtonContainer,
  EmptyMessage,
} from "./styles"

function History() {
  const dispatch = useAppDispatch()
  const { history } = useAppSelector(weatherSelectors.weatherData)

  return (
    <HistoryWrapper>
      <HistoryTitle>Search History</HistoryTitle>

      {history.length > 0 ? (
        <>
          <HistoryGrid>
            {history.map((item, index) => (
              <HistoryCard key={`${item.city}-${index}`}>
                <div className="info-block">
                  <p className="temp">{item.temp}</p>
                  <p className="city">{item.city}</p>
                </div>

                <div className="icon-block">
                  <img
                    src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                    alt={item.description}
                  />
                  <DecorationImg
                    src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                    alt="decoration-1"
                  />
                  <DecorationImg
                    className="extra-fade"
                    src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                    alt="decoration-2"
                  />
                </div>
              </HistoryCard>
            ))}
          </HistoryGrid>

          <ClearButtonContainer>
            <Button
              name="Clear History"
              onButtonClick={() => dispatch(weatherActions.clearHistory())}
              isDanger
            />
          </ClearButtonContainer>
        </>
      ) : (
        <EmptyMessage>
          No history found. <br /> Go to Weather page to start searching!
        </EmptyMessage>
      )}
    </HistoryWrapper>
  )
}

export default History
