import { FC } from "react"
import { LoginComponent } from "./Login-Component"

export const  HomeComponent: FC= ()=>{


    return (
        <div>
            <div>
                <h1>Welcome a Stream Fairy</h1>
            </div>
            <div>
                <h2>Se nao e usuario <link>cadastre aqui</link></h2>
            </div>
            <div>
                <LoginComponent/>
            </div>
        </div>
    )
    }