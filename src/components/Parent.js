import React, { useState } from "react"
import Form from "./Form"
import DisplayData from "./DisplayData"

function Parent() {

    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    function handleChangeFirst(e){
        console.log("First : ", e.target.value)
        setFirstName(e.target.value)
      }
  
      function handleChangeLast(e){
        console.log("Last : ", e.target.value)
        setLastName(e.target.value)
      }
    return (
        <>
        <Form
            firstName={firstName}
            lastName={lastName}
            handleChangeFirst={handleChangeFirst}
            handleChangeLast={handleChangeLast}>

        </Form>
        <DisplayData firstName={firstName} lastName={lastName}/>
        </>
    )
}

export default Parent;