import { Header } from "./components/Header/Header"

import * as S from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar/Sidebar"

export const App = () => {
  return (
    <div>
      <Header />
      <div className={S.wrapper}>
        <Sidebar />
        <main>
          post
        </main>
      </div>
    </div>
  )
}
