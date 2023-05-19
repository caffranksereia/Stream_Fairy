import React,{ FC } from "react"
import { ListComponentMovie } from "./List-Component.Movie"

export const  DashboardAdmComponent: FC= ()=>{


    return (
        <div>
            <div>
                <h1>Welcome Administrator </h1>
            </div>
            <div>
                <h1>Menu</h1>
            </div>
            <div>
              <ListComponentMovie/>
            </div>
        </div>
    )
    }