import { Header } from "./components/Header"
import { Post } from "./Post"

export function App() {
  return (
    <>
      <Header />
      <Post
        author="John Doe"
        date="2023-10-01"
      />
      <Post
        author="Jane Smith"
        date="2023-10-02"
      />
    </>
  )
}
