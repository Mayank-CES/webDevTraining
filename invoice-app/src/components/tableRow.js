import React from 'react'

const TableRow = (props) => {
  return (
    <>
      <div className="table-row">
        {/* {props.values.map((val) => (
          <div className="table-column">{val}</div>
          // console.log(Object.values(props.customer)[0])
        ))} */}
        {props.values
        // .filter((val)=>{
        //   console.log(val.name)
        //   if (props.searchTerm == ''){
        //     return val
        //   } else if (val.name.toLowerCase().includes(props.searchTerm)){
        //     return val
        //   }
        // })
        .map((val, index) => (
          <div className="table-column" key={index}>{val}</div>
          // console.log(Object.values(props.customer)[0])
        ))}

      </div>
    </>
  )
}

export default TableRow;