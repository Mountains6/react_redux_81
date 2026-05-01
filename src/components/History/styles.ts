import styled from "@emotion/styled"

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 120px 20px 40px;
  width: 100%;
  box-sizing: border-box;
`

export const HistoryTitle = styled.h1`
  color: white;
  margin-bottom: 40px;
  font-size: 36px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const HistoryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;

  background: rgba(47, 72, 111, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  .info-block {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .temp {
    font-size: 48px;
    font-weight: bold;
    margin: 0;
  }

  .city {
    font-size: 22px;
    opacity: 0.9;
    margin: 0;
  }

  .icon-block {
    display: flex;
    align-items: center;
    gap: 0px;

    img:first-of-type {
      width: 70px;
      height: 70px;
      position: relative;
      z-index: 3;
    }
  }
`

export const DecorationImg = styled.img`
  opacity: 0.5;
  width: 60px !important;
  height: 60px !important;
  margin-left: -20px;
  z-index: 2;

  &.extra-fade {
    opacity: 0.2;
    z-index: 1;
  }
`

export const ClearButtonContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 300px;
`

export const EmptyMessage = styled.div`
  color: white;
  font-size: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px 60px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  line-height: 1.5;
`
