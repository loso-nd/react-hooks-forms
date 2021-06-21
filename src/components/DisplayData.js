import React from "react"

function DisplayData({firstName, lastName}){
    return (
        <>
        <h1>First: {firstName}</h1>
        <h1>Last: {lastName}</h1>
        </>
    )
}
export default DisplayData;