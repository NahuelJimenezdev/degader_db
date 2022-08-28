import style from "./MovieCard.module.css";

export function MovieCard({ pastor }) {
  const imageUrl = pastor.image_path;
  return (
    <li className={style.movie__card}>
      <img
        className={style.movie__card__img}
        width={230}
        height={345}
        src={imageUrl}
        alt={pastor.title}
      />
      <div className={style.movie__nombre}>
        {pastor.nombre + " " + pastor.apellido}
        <div className={style.movie__cargo}>
          <p>{pastor.cargo_actual}</p>
        </div>
      </div>
    </li>
  );
}
