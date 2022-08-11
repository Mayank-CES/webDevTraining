import React from 'react'

const TableRow = (props) => {
  return (
      <>
    <div className="table-row">
        <div className="table-column">{props.name}</div>
        <div className="table-column">{props.phone}</div>
        <div className="table-column">{props.email}</div>
        <div className="table-column">{props.createdOn}</div>
    </div>
    </>
  )
}

export default TableRow;