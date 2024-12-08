import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import * as S from './Post.module.css';

export const Post = () => {
    return (
        <article className={S.post}>
            <header>
                <div className={S.author}>
                    <Avatar src="https://github.com/LeonardoPilatti.png" />
                    <div className={S.authorInfo}>
                        <strong>Leonardo Pilatti</strong>
                        <span>Frontend Developer</span>
                    </div>
                </div>

                <time
                    title="09 de Novembro às 08:13h"
                    dateTime="2024-11-09 14:03:30"
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={S.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 <a href="#">jane.design/doctorcare</a></p>
            <p>
                <a href="#">#novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>
            </p>
            </div>

            <form className={S.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'    
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={S.commentList}>
                <Comment />
            </div>
        </article>
    )
}