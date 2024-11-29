import { Route, Routes } from "react-router-dom"
import { Home } from "../components/screen/home/Home"
import { Header } from "../components/ui/header/Header"
import { Search } from "../components/screen/Search/Search"
import { DcHeroes } from "../components/screen/DcHeroes/DcHeroes"
import { MarvelHeores } from "../components/screen/MarvelHeroes/MarvelHeores"
import { HeroPage } from "../components/screen/HeroPage/HeroPage"

export const ProtectedRoutes = () => {
    return (
        <div>
            <Header/>
            <div style={{ marginTop: '56px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/dcHeroes" element={<DcHeroes />} />
                    <Route path="/marvelHeroes" element={<MarvelHeores />} />
                    <Route path="/hero/:id" element={<HeroPage />} />
                </Routes>
            </div>
        </div>
    )
}
