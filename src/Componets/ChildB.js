import React from "react"
import { Fragment } from "react"
import ChildC from "./ChlidC"
import { useState } from "react"
function ChildB  () {
    return (
        <Fragment>
          
            <ChildC />
        </Fragment>
    )
}

export default ChildB