import { Fragment } from "react"
import React from "react"
import { data , data1} from "./LearpropDrilling"
const ChildC=()=>
{
    return(
        <Fragment>
            <data.Consumer>
            {
                (name)=>{
                    return(
                       
                        <data1.Consumer>
                            {
                                (name1)=>
                                {
                                    return(
                                         <h1>My name is {name} {name1}</h1>

                                    )
                                }
                            }

                        </data1.Consumer>
                    )
                }
            }
        </data.Consumer>
        </Fragment>
    )
}

export default ChildC 