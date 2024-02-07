import styles from './styles.module.css'

export const Card = ({name, img, category}) => {
  return (
    <>
      <div className={styles["card-hero"]}>
        <img src={img} alt="heroi de overwatch" />
        <div className={styles.content}>
          <img src={`class-${category}.svg`} alt="" />
          <h2>{name}</h2>
        </div>
      </div>
    </>
  )
}