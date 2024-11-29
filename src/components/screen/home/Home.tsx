import { heroesData } from "../../../data/heroes"
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes"

export const Home = () => {
  return (
    <div>
      <ListHeroes heroes={heroesData} title="Todos los herores"/>
    </div>
  )
}
