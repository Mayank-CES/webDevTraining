import { AiFillDelete } from "react-icons/ai";

const ItemTable=({invoiceItemList, handleDeleteItem})=>{

    // const handleDelete=(index)=>{
    //     const updatedItemList = invoiceItemList.filter((item) => index !== item.id);
    //     // setInvoiceItemList(updatedItemList);
    //     handleDeleteItem(index);
    // };

    console.log('Print Invoice Item List ',invoiceItemList);
    return (
        <>
        {invoiceItemList!=[]?
            invoiceItemList.map((val, index) => (
            <tr className="invoice-table-row" key={val.id}>
                {/* {console.log(ind)} */}
                <td>{val.name}</td>
                <td>{val.quantity}</td>
                <td>{val.price}</td>
                <td>{val.amount}</td>
                <td><button onClick={() => handleDeleteItem(index)}><AiFillDelete /></button></td>
            </tr>
            )):''
            }
        </>
    )
}

export default ItemTable