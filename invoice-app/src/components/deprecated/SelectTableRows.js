import React from 'react'

const SelectTableRows = (props) => {
    const searchTerm = props.searchTerm;

    // const updateCount=()=>{
    //     // props.setCount(count+1);
    // };

    return(
        <>
        {props.values.map((val) => {
        const searchVal = Object.values(val);
        // const searchVal =val;
        return(
            <div className="table-row">

            {searchVal.slice(1,)
            .map((val, index) => ( 
              <div className="table-column" key={index}>{val}</div>
              // console.log(Object.values(props.customer)[0])
            ))}
          </div>
        )
        // return(
        // <TableRow
        //     values = {searchVal.slice(1,)}
        //     searchTerm={searchTerm}
        //     key ={searchVal[0]}
        //     >
        // </TableRow>
        // )
        })}
    </>
    )
}

export default SelectTableRows