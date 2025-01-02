import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div>   
      <Header />
      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post 
              author="Luiz"
              content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam ullam sequi doloremque nisi omnis quam praesentium quas dignissimos voluptates velit, fugiat enim pariatur veniam labore vero in exercitationem nam."
            />
             <Post 
              author="Luiz"
              content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam ullam sequi doloremque nisi omnis quam praesentium quas dignissimos voluptates velit, fugiat enim pariatur veniam labore vero in exercitationem nam."
            />
          </main>
    </div>
    </div>
  )
}
export default App
