import React, { useState } from "react";

function Form({firstName, lastName, handleChangeFirst, handleChangeLast}) {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const [newsetter, setNewsetter] = useState(false)

    // function handleChangeFirst(e){
    //   console.log("First : ", e.target.value)
    //   setFirstName(e.target.value)
    // }

    // function handleChangeLast(e){
    //   console.log("Last : ", e.target.value)
    //   setLastName(e.target.value)
    // }

    function handleNewsletterChange(e) {
      console.log("Are you subscribed: ", e.target.checked)
      setNewsetter(e.target.checked)
    }

  return (
    <form>
      <label>Subscribe to our Newsletter?</label>
      <input 
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsetter} /> {/* checked instead of value */}
              <hr />
      <input type="text" value={firstName} onChange={handleChangeFirst} />
      <input type="text" value={lastName} onChange={handleChangeLast}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
