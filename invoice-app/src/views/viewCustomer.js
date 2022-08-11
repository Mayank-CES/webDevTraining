import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';
import TableRow from '../components/tableRow';
// import Content from '../components/content'
import { MdAdd } from 'react-icons/md'


const ViewCustomer = () => {
    const { customers } = useContext(AppContext);

    const { currentMenu, changeView } = useContext(AppContext);

    const handleClick = (e) =>{
        e.preventDefault();
        console.log("Clicked New Customer Button")
        changeView(currentMenu,'add-customer')
    };
    return ( 
        <>
            <div className="content">
                <div className="title" >
                    <h2>Customers</h2>
                </div>
                <div className="badge" >
                    <button className="badge-pill" onClick={handleClick}><MdAdd/> New Customer</button>
                </div>
                <div className="table">
                    <div className="table-head">
                        <b className="table-column">NAME</b>
                        <b className="table-column">PHONE</b>
                        <b className="table-column">EMAIL</b>
                        <b className="table-column">CREATED ON</b>
                    </div>
                    {customers.map((customer) =>(
                        // <div className="table-row">
                        //     <div className="table-column">{customer.name}</div>
                        //     <div className="table-column">{customer.phone}</div>
                        //     <div className="table-column">{customer.email}</div>
                        //     <div className="table-column">{customer.createdOn}</div>
                        // </div>
                        <TableRow
                            name={customer.name}
                            phone={customer.phone}
                            email={customer.email}
                            createdOn={customer.createdOn}
                            >

                        </TableRow>
                    ))}
                    {/* <div className="table-row">
                        <div className="table-column">Mayank</div>
                        <div className="table-column">+919876543210</div>
                        <div className="table-column">mayank@razorpay.com</div>
                        <div className="table-column">01 Aug 2022</div>
                    </div> */}

                </div>
            </div>
        </>
    )
};

export default ViewCustomer;