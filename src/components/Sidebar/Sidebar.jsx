import * as S from './Sidebar.module.css'

import capaImg from '../../assets/capa.png'

export const Sidebar = () => {
    return (
        <aside className={S.sidebar}>
            <img
                className={S.cover}
                src={capaImg}
            />

            <div className={S.profile}>
                <strong>Leonardo Pilatti</strong>
                <span>Frontend Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}