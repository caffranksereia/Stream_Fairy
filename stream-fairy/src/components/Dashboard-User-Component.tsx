import React,{ FC } from "react"
import { ListComponentMovie } from "./List-Component.Movie"

export const  DashboardUserComponent: FC= ()=>{


    return (
        <div>
            <div>
                <h1>Welcome Usuario </h1>
            </div>
            <div>
              <ListComponentMovie/>
            </div>
        </div>
    )
    }