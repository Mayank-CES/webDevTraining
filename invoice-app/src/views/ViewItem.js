import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';
import TableRow from '../components/tableRow';
import { MdAdd } from 'react-icons/md'



const ViewItem = () => {
    const { items } = useContext(AppContext);

    const { currentMenu, changeView } = useContext(AppContext);

    const handleClick = () =>{
        console.log("Clicked New Item Button")
        changeView(currentMenu,'add-item')
    };
  return ( 
    <>
        <div className="content">
            <div className="title" >
                <h2>Items</h2>
            </div>
            <div className="badge" >
                <button className="badge-pill"  onClick={handleClick}><MdAdd/> New Item</button>
            </div>
            <div className="table">
                <div className="table-head">
                    <b className="table-column">NAME</b>
                    <b className="table-column">DESCRIPTION</b>
                    <b className="table-column">PRICE</b>
                    <b className="table-column">ADDED ON</b>
                </div>
                {items.map((item) =>(
                    // <div className="table-row">
                    //     <div className="table-column">{item.name}</div>
                    //     <div className="table-column">{item.phone}</div>
                    //     <div className="table-column">{item.email}</div>
                    //     <div className="table-column">{item.createdOn}</div>
                    // </div>
                    <TableRow
                        name={item.name}
                        phone={item.description}
                        email={item.price}
                        createdOn={item.addedOn}
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

export default ViewItem;