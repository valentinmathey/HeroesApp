import { useEffect, useState } from "react"
import { heroesData } from "../../../data/heroes"
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes"
import { IHeroes } from "../../../types/IHeroes"

export const MarvelHeores = () => {

  const [heros, setHeroes] = useState<IHeroes[]>([])

  const handleGetHeroes = () => {
    const result = heroesData.filter((hero) => hero.publisher === "Marvel Comics")
    setHeroes(result)
  }

  useEffect(() => {
    handleGetHeroes()
  }, [])

  return (
    <div>
      <ListHeroes heroes={heros} title="Heroes Marvel Comics"/>
    </div>
  )
}
