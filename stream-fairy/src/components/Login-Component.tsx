import { FC } from "react"

export const  LoginComponent: FC= ()=>{


    return (
        <div>
            <form>
                <div>
                    <label>Usuario ou Email</label>
                    <input></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input></input>
                </div>
                <div>
                    <button>Logar</button>
                </div>
            </form>
            <div>
                <p>Se caso Esqueceu a senha</p>

        </div>
        </div>
    )
    }