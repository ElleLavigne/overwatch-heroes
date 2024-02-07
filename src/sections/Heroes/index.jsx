import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import styles from "./styles.module.css"

export const Heroes = () => {

  const [heroList, setHeroList] = useState([])

  const fetchHeroes = async () => {
    let data = []
    const respose = await fetch("https://overfast-api.tekrop.fr/heroes")
    data = await respose.json()
    console.log('data', data)
    setHeroList(data)
  }
  useEffect(() => {
    fetchHeroes()
  }, [])
  return (
    <div className="container">
      <h2 className={styles.title}>Herois</h2>
      <div className={styles.listCard}>
        {heroList.map(({ name, portrait, role }) => {
          return <Card key={name} name={name} img={portrait} category={role} />
        })}
      </div>
    </div>
  )
}
