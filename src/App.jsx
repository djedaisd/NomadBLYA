import a from './App.module.css'
import Aside from './components/aside/aside'
import Dialog from './components/dialogs/dialog'
import Header from './components/header/header'
import MainContent from './components/main-content/content'
import { Route, Routes } from 'react-router-dom'

const App = (props) => {
  return (
    <div className={a.contentWrap}>
      <Header />

      <Aside />

      <div className="content">
        <Routes>
          <Route
            path="/content"
            element={
              <MainContent
                appstate={props.mainstate.postsState}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialog/*"
            element={<Dialog appstate={props.mainstate.dialogsState} />}
          />
        </Routes>
      </div>
    </div>
  )
}
export default App
