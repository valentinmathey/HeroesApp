import { Button, Form } from "react-bootstrap"
import styles from './Login.module.css'
import { FormEvent, useState } from "react"
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {

    const [showPass, setShowPass] = useState(false);

    const {values, handleChange} = useForm({
        user: "",
        password: "",
    })

    const {user, password} = values;
    
    const dispath = useAppDispatch()

    const navigate = useNavigate()  

    const handleSubmitForm = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/user.json")
        const userData = await response.json()
        const userFound = userData.users.find(
            (u: {username:string, password:string}) =>
            u.username === user && u.password === password
        )
        if(userFound){
            dispath(setLogin(user));
            navigate("/");
        } else {
            alert("Usuario o contraseña incorrectos")
        }
    }
    return (
        <div className={styles.containerLogin}>
            <div className={styles.containerForm}>
                <span 
                style={{fontSize:"10vh", margin:"1rem"}} 
                className="material-symbols-outlined">account_circle
                </span>
                <Form onSubmit={handleSubmitForm}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            name="user"
                            value={user}
                            type="text"
                            placeholder="usuario"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            name="password"
                            type={showPass ? "text" : "password"}
                            value={password}
                            placeholder="contraseña"
                        />
                    </Form.Group>
                    <Form.Check
                        type="switch"
                        onChange={()=>{
                            setShowPass(!showPass);
                        }}
                        id="custom-switch"
                        label="mostrar contraseña"
                    />
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <Button type="submit" variant="primary">Ingresar</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
