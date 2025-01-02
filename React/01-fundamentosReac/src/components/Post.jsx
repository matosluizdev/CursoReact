import styles from './Post.module.css'
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/matosluizdev.png" />
                    <div className={styles.authorInfo}>
                        <strong>Luiz Matos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='31 de Dezembro ás 09:10' dateTime="2022-05-08 00:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet, iulum tincidunt.
                </p>
                <p>s enim neque non enim. Nulla facilisi. Sed et felis quis ipsum laoreet pharetra. Donec et est non ex vestib</p>
                <p><a href="">luiz.design/projetos</a></p>
                <p>
                    <a href="">#post</a>
                    <a href="">#projetos</a>
                </p>
            </div>
            <form action="#" className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Escreva seu comentário...' required />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer> 
            </form>
        </article>
    )
}