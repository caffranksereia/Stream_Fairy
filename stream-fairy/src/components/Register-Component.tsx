import { FC } from "react"

export const  RegisterUserComponent: FC= ()=>{


    return (
        <div>
             <div>
                    <h1>Cadastro</h1>
                </div>
            <form>
                <div>
                    <label>Usuario ou Email</label>
                    <input></input>
                </div>
                <div>
                    <label>Nome</label>
                    <input></input>
                    {
                    <div>
                        <label>Role</label>
                        <input></input>
                    </div>
                    }
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