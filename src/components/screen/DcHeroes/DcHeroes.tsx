import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes"
import { heroesData } from "../../../data/heroes"

export const DcHeroes = () => {

  const [heros, setHeroes] = useState<IHeroes[]>([])

  const handleGetHeroes = () => {
    const result = heroesData.filter((hero) => hero.publisher === "DC Comics")
    setHeroes(result)
  }

  useEffect(() => {
    handleGetHeroes()
  }, [])

  return (
    <div>
      <ListHeroes heroes={heros} title="Heroes DC Comics"/>
    </div>
  )
}
