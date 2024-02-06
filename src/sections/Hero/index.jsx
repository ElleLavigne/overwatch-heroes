import styles from './styles.module.css'
import { Header } from "../../components/Header"

export const Hero = () => {
  return (
    <>
      <section className={styles.section}>
        <img className={styles.bg} src="background.png" alt="" />
        <div className="container">
          <Header></Header>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Heróis de <br />
              OverWatch 2
            </h1>
            <p className={styles.subtitle}>
              Conheça os heróis e um pouco de suas histórias de Overwatch 2 e o
              universo do game.
            </p>
            <img className={styles.arrow} src="arrow.svg" alt="uma seta apontando para baixo" />
          </div>
        </div>
      </section>
    </>
  )

}