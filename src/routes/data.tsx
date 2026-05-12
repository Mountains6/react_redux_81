// import Lesson17 from "../lessons/Lesson17/Lesson17"
// import Lesson18 from "../lessons/Lesson18/Lesson18"

import Weather from "../pages/Weather/Weather"
import History from "../pages/History/History"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import type { RouteObj } from "./types"

export const routesData: RouteObj[] = [
  { path: "/", element: <Weather /> },
  { path: "/History", element: <History /> },
  { path: "*", element: <PageNotFound /> },
]
