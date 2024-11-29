import { FC } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./CardHero.module.css";

interface ICardHero {
    hero: IHeroes;
}

export const CardHero: FC<ICardHero> = ({ hero }) => {
    const navigate = useNavigate();

    const handleNavigateHero = () => {
        navigate(`/hero/${hero.id}`);
    };

    return (
        <Card
            className={`${styles.card}`}
            onClick={handleNavigateHero}
            role="button"
            aria-label={`Ver detalles de ${hero.superhero}`}
        >
            <Card.Img
                className={styles.cardImg}
                variant="top"
                src={`/assets/heroes/${hero.id}.jpg`}
                alt={`Imagen de ${hero.superhero}`}
            />
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>
                    {hero.superhero}
                </Card.Title>
                <Card.Text className={styles.cardText}>
                    <p><b>Alter Ego:</b> {hero.alter_ego}</p>
                    <p><b>Publicadora:</b> {hero.publisher}</p>
                    <p><b>Primera aparición:</b> {hero.first_appearance}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
