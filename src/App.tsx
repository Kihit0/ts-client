import { Navigation } from 'components/ux/Navigation'
import { Main } from 'pages/Main/Main'
import React from 'react'

export const App: React.FC = () => {
  return (
    <div {...{className: "App container"}}>
      <div {...{className: "app-navigation"}}>
        <Navigation />
      </div>
      <div {...{className: "App-main"}}>
        <Main />
      </div>
    </div>
  )
}
