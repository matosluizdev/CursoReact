import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'

interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType { 
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {

    const [comments, setComments] = useState(
        [
            'Post muito bom ein!!!'
        ]
    )

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormated = format(
        post.publishedAt, 
        "d 'de' LLLL 'ás' HH:mm'h'", 
        {locale: ptBR},
        )
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })


    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent <HTMLTextAreaElement> ) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {post.content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === 'link') {
                        return <p key={line.content}> <a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} action="#" className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment' 
                    placeholder='Escreva seu comentário...' 
                    required 
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer> 
            </form>
            <div className={styles.commentList}>
                {comments.map( comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                        /> 
                    )
                })}
            </div>
        </article>
    )
} 