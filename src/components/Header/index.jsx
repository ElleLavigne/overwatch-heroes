import styles from './styles.module.css'

export const Header = () => {

  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <img className={styles.logo} src="logo.png" alt="" />
        </header>
      </div>
    </>
  )

}