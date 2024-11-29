import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { Form, InputGroup } from "react-bootstrap";
import { CardHero } from "../../ui/CardHero/CardHero";
import styles from "./Search.module.css";

export const Search = () => {
  const { values, handleChange } = useForm({
    search: "",
  });

  const { search } = values;

  const [heroes, setHeroes] = useState<IHeroes[]>([]);

  useEffect(() => {
    const result = heroesData.filter((h) =>
      h.superhero.toLowerCase().trim().includes(search.toLowerCase())
    );
    setHeroes(result);
  }, [search]);

  return (
    <div className={styles.containerSearch}>
      {/* Campo de búsqueda */}
      <div className={styles.inputWrapper}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Buscar Héroe</InputGroup.Text>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="search"
            placeholder="Escribe el nombre del héroe..."
          />
        </InputGroup>
      </div>

      {/* Listado de héroes */}
      <div className={styles.containerListHeroes}>
        {heroes.length > 0 ? (
          <>
            {heroes.map((hero) => (
              <div key={hero.id} className={styles.cardWrapper}>
                <CardHero hero={hero} />
              </div>
            ))}
          </>
        ) : (
          <div className={styles.noResults}>
            <h2>No se encontraron héroes</h2>
          </div>
        )}
      </div>
    </div>
  );
};
