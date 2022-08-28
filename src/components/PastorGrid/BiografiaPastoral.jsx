import { MovieCard } from '../CardPastor/CardPastor';
import pastores from '../../API_PASTORES.json';
import style from './MovieGrid.module.css';

export function MovieGrid() {
    return(
        <ul className={style.movie__grid}>
            {
                pastores.sort((a, b) => {
                    const edadA = a.id;
                    const edadB = b.id;
                    if (edadA < edadB) return -1;
                    if (edadA > edadB) return 1;
                    return 0;
                }).map((pastor) => (
                    <MovieCard 
                        key={pastor.id} 
                        pastor={pastor}
                    />
                ))
            }
        </ul>
    );
}
