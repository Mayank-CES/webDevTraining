import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../context/AppContext';
import { MdAdd } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import Table from '../../components/table/Table';
import { getInvoicesAPI, getInvoiceByIdAPI, patchInvoicesAPI} from '../../components/Api';
import { invoiceHeaders, searchOptions3 } from '../../utils/Constant';


const ViewInvoice = () => {
    const { invoices, dispatch } = useContext(AppContext);
    let navigate = useNavigate();
    const { currentMenu, changeView } = useContext(AppContext);

    const getInvoicesData= async()=>{
        const data = await getInvoicesAPI();
        console.log(data);
        var mappedData = []
        // console.log(data)
        data.map((val) => (
            mappedData = [
                ...mappedData,
                {   id: val.id,
                    date: new Date(val.created_at).toUTCString().slice(5,16),
                    customerId: val.customer_id,
                    number: val.id,
                    paidStatus: val.paid_status,
                    amount: val.amount,
                    amountDue: val.amount_due
                }
            ]
        ));
        dispatch({
            type: 'SET_INVOICE',
            payload: mappedData,
        });
    };


    const handleSubmit = () =>{
        console.log("Clicked New Invoice Button")
        navigate("/add-invoice");
    };

    const handlePaidStatus= async(val) =>{
        // console.log(val);
        const data = await getInvoiceByIdAPI(val);
        // console.log('fetched Data ',data);
        if (data.paid_status=='Issued'){
            data.paid_status='Paid';
        }else{
            data.paid_status='Issued';
        }
        // console.log('Sent Data ',data)
        patchInvoicesAPI(data);

    };

  return (
    <>
        <div className="content">
            <div className="title" >
                <h2>Invoices</h2>
            </div>
            <div className="badge" >
                <button className="badge-pill"  onClick={handleSubmit}><MdAdd className="react-icon-align"/> New Invoice</button>
            </div>
            {getInvoicesData}
            <Table
                 values = {invoices}
                 headers ={invoiceHeaders}
                 searchOptions ={searchOptions3}
                 handleClick={handlePaidStatus}
                >
            </Table>
        </div>
    </>
  )
}


export default ViewInvoice