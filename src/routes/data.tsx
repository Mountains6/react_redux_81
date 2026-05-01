// import Lesson17 from "../lessons/Lesson17/Lesson17"
// import Lesson18 from "../lessons/Lesson18/Lesson18"

import History from "../components/History/History"
import Weather from "../components/Weather/Weather"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import type { RouteObj } from "./types"

export const routesData: RouteObj[] = [
  { path: "/", element: <Weather /> },
  { path: "/History", element: <History /> },
  { path: "*", element: <PageNotFound /> },
]
