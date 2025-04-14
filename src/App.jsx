import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Post"

import styles from './App.module.css'

import "./global.css"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post
            author="John Doe"
            date="2023-10-01"
          />
          <Post
            author="Jane Smith"
            date="2023-10-02"
          />
        </main>
      </div>
    </>
  )
}
