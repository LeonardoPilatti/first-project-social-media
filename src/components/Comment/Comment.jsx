import { ThumbsUp, Trash } from '@phosphor-icons/react';
import * as S from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar';

export const Comment = ({content}) => {
    return (
        <div className={S.comment}>
            <Avatar hasBorder={false} src="https://github.com/LeonardoPilatti.png" />

            <div className={S.commentBox}>
                <div className={S.commentContent}>
                    <header>
                        <div className={S.authorAndTime}>
                            <strong>Leonardo Pilatti</strong>
                            <time
                                title="09 de Novembro às 08:13h"
                                dateTime="2024-11-09 14:03:30"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </footer>
            </div>
        </div>
    );
}