import React, { createContext } from "react"
import { Fragment } from "react"
import { useState } from "react"

import ChildA from "./ChildA"
const data= createContext();
const data1 = createContext();
const LearnPropDrilling=({ })=>
{
   const name ="Saurabh"
   const name1="Sakhare"
    return (
        <Fragment>  
            <data.Provider value={name}>
            <data1.Provider value={name1}>
            <ChildA />
            </data1.Provider>
            </data.Provider>
        </Fragment>
      
    )
}

export default LearnPropDrilling
export {data};
export {data1}