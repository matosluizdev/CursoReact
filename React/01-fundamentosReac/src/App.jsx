import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'

const posts= [  
    {
      id: 1,
      author: {
        name: 'Luiz Matos',
        avatarUrl: 'https://github.com/matosluizdev.png',
        role: 'Web Developer'
      },
        content: [
          {  type: 'paragraph', content: 'Fala galera' },
          {  type: 'paragraph', content: 'Acabei de ganhar o cartola esse ano!' },
          {  type: 'link', content: 'luiz.matos/cartola' },
        ],
        publishedAt: new Date('2025-01-01 20:00:00'),
    },

    {
      id: 2,
      author: {
        name: 'Mesaque Souza',
        avatarUrl: 'https://github.com/titiushadow.png',
        role: 'Delphi Developer'
      },
        content: [
          {  type: 'paragraph', content: 'Fala galera' },
          {  type: 'paragraph', content: 'Acabei de Liberar mais uma tarefaaqui do Bruno!' },
          {  type: 'link', content: 'mesaque.com/tarefas' },
        ],
        publishedAt: new Date('2025-01-02 21:00:00'),
    },
]

function App() {
  return (
    <div>   
      <Header />
      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
              {
                posts.map(post => {
                 return (
                  <Post 
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                 )
                })
              }
          </main>
    </div>
    </div>
  )
}
export default App
