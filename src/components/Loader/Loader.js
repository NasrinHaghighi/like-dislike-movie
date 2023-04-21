import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#fff",
  };
  

function Loader({loading}) {
  return (
    <ClipLoader
    color='#fff'
    loading={loading}
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  )
}

export default Loader