import React from 'react'

const date = new Date();
const year = date.getFullYear();

const footer = () => {
  return (
    <div>
        <p>
            &#169; {year}
        </p>
    </div>
  )
};

export default footer;