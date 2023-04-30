import { Fragment, useContext } from "react"
import React from "react"
import { data , data1} from "./LearpropDrilling"

const ChildC=()=>
{
   const Firstname=useContext(data);
   const Lastname = useContext(data1)
    return(
        <Fragment>
            
            <h1>
                Hi name is {Firstname} {Lastname}
            </h1>
       
        </Fragment>
    )
}

export default ChildC 