import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import * as S from './Post.module.css';

export const Post = ({author, publishedAt, content}) => {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleNewCommentChange = () => {
        setNewCommentText(event.target.value);
    }

    const handleCreateNewComment = () => {
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    return (
        <article className={S.post}>
            <header>
                <div className={S.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={S.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={S.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={index}>{line.content}</p>;
                    }
                    return <p key={index}><a href="#">{line.content}</a></p>
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={S.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    placeholder='Deixe um comentário'    
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={S.commentList}>
                {comments.map((comment, index) => (
                    <Comment key={index} content={comment} />
                ))}
            </div>
        </article>
    )
}