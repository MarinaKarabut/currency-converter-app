import { Route, Switch } from "react-router-dom"
import { lazy, Suspense } from "react"

import Loader from "../shared/components/Loader"
import routes from "./routes"
import Navbar from "../client/Navbar"

const AllCurrencyPage = lazy(() => import("../client/pages/AllCurrencyPage"))
const CurrencyConverterPage = lazy(() =>
  import("../client/pages/CurrencyConverterPage")
)

const App = () => {
  const { currency, converter } = routes

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={currency} component={AllCurrencyPage} />
          <Route exact path={converter} component={CurrencyConverterPage} />
        </Switch>
      </Suspense>
    </>
  )
}

export default App
