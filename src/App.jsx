import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import * as S from "./App.module.css"
import "./global.css"

export const App = () => {
  return (
    <div>
      <Header />
      <div className={S.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
