import { useState, useContext } from 'react'
import { postInvoicesAPI,getCustomerByIdAPI } from '../../components/Api';
import FormInput from "../../components/form/FormInput";
import { AppContext } from '../../context/AppContext';
import { AiFillSave, AiFillDelete } from "react-icons/ai";
import SelectComponent from '../../components/dropdown/Select Component';
import "./AddInvoice.css"
import { RiShoppingBasketLine } from "react-icons/ri";


function AddInvoice() {
    const {customers, items} = useContext(AppContext);
    const [customerInput,setCustomerInput] = useState(false);
    const [itemInput,setItemInput] = useState(false);
    var [customerId,setCustomerId] = useState(0)
    const [billAddress,setBillAddress] = useState("")
    var totalAmount=0;
    var searchOptionsItems=[];
    // var [searchOptionsItems,setSearchOptionsItems] = useState([]);
    var [notes,setNotes] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    var quantity=0;
    // {    id: 0,
    //     name: "",
    // });
    
    // var customerValue={
    //     id: 0,
    //     name: "",
    //     email: "",
    //     phone: "",
    // };

    var [customerValue,setCustomerValue] = useState({
        id: 0,
        name: "",
        email: "",
        phone: "",
    });
    var [itemValue,] = useState({
        id: 0,
        name: "",
        email: "",
        phone: "",
    });
    const [invoiceItemList,setInvoiceItemList] = useState([]);

    const [values, setValues] = useState({
        invoiceId: "",
        dueDate: "",
        issuedDate: "",
        refNo: "",
        customerId: "",
        billAddress: "",
        notes: "",
        invoiceItems: [],
        // addedOn:"",
    });

    const invoiceInputs = [
        {
            id: 1,
            name: "issuedDate",
            type: "date",
            // placeholder: "Name",
            errorMessage:
                "Incorrect Date format",
            label: "Issued Date",
            // pattern: "^[a-zA-Z ]{2,}$",
            required: true,
        },
        {
            id: 2,
            name: "dueDate",
            type: "date",
            // placeholder: "Name",
            errorMessage:
            "Incorrect Date format",
            label: "Due Date",
            // pattern: "^[a-zA-Z ]{2,}$",
            required: true,
        },
        {
            id: 3,
            name: "invoiceId",
            type: "text",
            placeholder: "123456789",
            // errorMessage:
            //   "Ref Number shouldn't include any numbers and special character!",
            label: "Invoice Number",
            // pattern: "^[A-Za-z]{2,}$",
            required: true,
        },
        {
            id: 4,
            name: "refNo",
            type: "text",
            placeholder: "Ref Number",
            // errorMessage:
            //   "Ref Number shouldn't include any numbers and special character!",
            label: "Ref No",
            // pattern: "^[A-Za-z]{2,}$",
            required: true,
        },
        // {
        //     id: 5,
        //     name: "billAddress",
        //     type: "text",
        //     placeholder: "Bill Address",
        //     // errorMessage:
        //     //   "Ref Number shouldn't include any numbers and special character!",
        //     label: "Bill Address",
        //     // pattern: "^[A-Za-z]{2,}$",
        //     required: true,
        //   },
    ];

   // Forming Items Dropdown Menu List

    items.map((val)=>{
        // console.log("Val ",val.name)
        if (searchOptionsItems.length<items.length){
            searchOptionsItems.push({
                key: val.id,
                value: val.name,
            })
        }
    });
    // console.log("Search Options Items",searchOptionsItems)



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Invoice Id = ",values.invoiceId)
        // console.log("dueDate = ",values.dueDate)
        // console.log("issuedDate = ",values.issuedDate)
        // console.log("refNo = ",values.refNo)
        // console.log("customerId = ",customerId)
        // console.log("bill_address =",billAddress)
        // console.log("notes = ",notes)
        // console.log("customerId = ",customerId)
        const invoiceListTemp=invoiceItemList.map((val)=>(
            {   item_id: parseInt(val.itemId),
                item_quantity: parseInt(val.quantity),
            }
        ))
        // console.log("Invoice Item List = ",invoiceListTemp)
        const data = { 
            id: parseInt(values.invoiceId),
            due_date: new Date(values.dueDate).getTime(),
            issued_date: new Date(values.issuedDate).getTime(), 
            ref_no: values.refNo,
            customer_id: parseInt(customerId),
            bill_address: billAddress,
            notes: notes,
            invoice_items: invoiceListTemp,
        }
        console.log(data);

        postInvoicesAPI(data)
        // dispatch({
        //     type: 'POST_INVOICE',
        //     payload: data,
        // });

        alert("Invoice Successfully Added");
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const setCustomerVal=(e)=>{
        setCustomerId(parseInt(e.target.value))
        console.log(customerId)
    }
    const setBillAdd=(e)=>{
        setBillAddress(e.target.value);
    };

    // useEffect(() => {
    //     (async()=>{
    //         const data = await getCustomerByIdAPI(customerId);
    //         // console.log(data);
    //         customerValue = {   id:data.id,
    //             name: data.name,
    //             phone: data.phone,
    //             email: data.email
    //         };
    //         // console.log(customerValue);
    //     })();
    //     return () => { };
    // }, []);

    const handleCustomerInput=(e)=>{
        console.log(customerId);
        if (customerId==="" ||customerId===null){
            setCustomerInput(false);
             // handleerror
        }else if (getCustomerByIdAPI(customerId) !=null){
            console.log("hello from customer",customers);
            setCustomerInput(true);
            customers.map((val)=>{
                const searchVal=Object.values(val);
                if (searchVal[0]==customerId){
                    setCustomerValue({   id:searchVal[0],
                        name: searchVal[1],
                        phone: searchVal[2],
                        email: searchVal[3]
                    });
                };
            });
            // (async()=>{
            //     const data = await getCustomerByIdAPI(customerId);
            //     // console.log(data);
            //     customerValue = {   id:data.id,
            //         name: data.name,
            //         phone: data.phone,
            //         email: data.email
            //     };
            //     // console.log(customerValue);
            // });
            // 
            // console.log("Data Customer Val ",data.id,data.name,data.phone,data.email)
            // console.log("New Customer Val ",customerValue.name,customerValue.phone,customerValue.email)
        }else{
            setCustomerInput(false);
        }
    };

    const changeCustomerInput=(e)=>{
        setCustomerInput(false)
        console.log("Hello from customer")
    };


    const submitItemInput=(e)=>{
        // Add Item to the main List
        setItemInput(false);
        items.filter((val)=>{
            if (val.id==selectedOption){
                itemValue={
                    id: (invoiceItemList.length+1),
                    itemId: val.id,
                    name: val.name,
                    quantity: quantity,
                    price: val.price, 
                    amount: parseInt(val.price)*parseInt(quantity),
                }
            }
        })
        invoiceItemList.push(itemValue);
        console.log("Item Value",itemValue)
        console.log("invoice Item List",invoiceItemList)
    }
    const handleItemInput=(e)=>{
        setItemInput(true);
    };

    const handleDeleteItem = (index) => {
        setInvoiceItemList(invoiceItemList.filter((v, i) => i !== index));
    }

    const handleNotes=(e)=>{
        setNotes(e.target.value);
    };

    invoiceItemList.map((val)=>(
        totalAmount=totalAmount+parseInt(val.amount)
    ));



    return ( 
        <div className="background-ghost-white">
        <div className="invoice-form-title" >
          <h2>Add Invoice</h2>
        </div>
        <div className="badge" >
            <button className="badge-pill"  onClick={handleSubmit}><AiFillSave  className="react-icon-align"/> Save Invoice</button>
        </div>

        {customerInput?(
            <div  className="customer-info">
            <div className="form-get-id">
                <p className="width-100 color-grey">Bill to</p>
                <div className="customer-values">
                <p>{customerValue.name}</p>
                <p>{customerValue.phone}</p>
                <p>{customerValue.email}</p>
                </div>
                <div className="customer-input" onClick={changeCustomerInput}>
                    Change
                </div>
            </div>
        </div>
        ): (
            <div  className="customer-info">
                <div className="form-get-id">
                    <div className="form-inside">
                        <span >Customer Id: </span>
                        <input  className="width-20" name="id" type="text" placeholder="0" pattern="^[0-9]$" onChange={setCustomerVal}>
                        </input>
                        <div className="customer-input margin-left" onClick={handleCustomerInput}>Submit</div>
                    </div>
                </div>
            </div>
        )}
        
        <div  className="bill-info">
            <div className="form-bill">
                <div className="form-inside-bill">
                    <p >Bill Address: </p>
                    <textarea className="address-input" onChange={setBillAdd}>

                    </textarea>
                    {/* <input  className="width-30" name="billAddress" type="text" placeholder="Delhi" pattern="^[A-Za-z ,]{3,}$" onChange={setBillAdd}>
                    </input> */}
                    {/* <button className="margin-left" onClick={handleCustomerInput}>Submit</button> */}
                </div>
            </div>
        </div>
        
        <div className="invoice-info">
          <form >
                {/* <h1>Register</h1> */}
                {invoiceInputs.map((input) => (
                    <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    />
                ))}
          </form>
        </div>

        <table className="invoice-table">
            <thead>
            <tr className="invoice-table-row">
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Amount</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* Map Condition */}
            {/* {ItemTable(invoiceItemList, handleDeleteItem)} */}
                {invoiceItemList.map((val, index) => (
                    <tr className="invoice-table-row" key={val.id}>
                        {/* {console.log(ind)} */}
                        <td>{val.name}</td>
                        <td>{val.quantity}</td>
                        <td>{val.price}</td>
                        <td>{val.amount}</td>
                        <td><button onClick={() => handleDeleteItem(index)}><AiFillDelete /></button></td>
                    </tr>
                )
                )}
                {/* <ItemTable
                invoiceItemList={invoiceItemList}
                handleDeleteItem={handleDeleteItem} 
                />  */}
            </tbody>


        </table>
            {itemInput?(
                    <div className="item-form">
                        <SelectComponent
                            options={searchOptionsItems}
                            onChange={(item) => setSelectedOption(item)}
                            selectedKey={selectedOption}
                            placeholder={"Item Name"}
                        />
                        <input name="quantity" type="text" placeholder="0" pattern="^[0-9]$" onChange={(e)=>(quantity=e.target.value)}></input>
                        <button  onClick={submitItemInput}>Submit</button>
                    </div>
                ):( <div className="item-form">
                    <div className="add-item-button" onClick={handleItemInput}><RiShoppingBasketLine className="react-icon-align"/>{"    "}Add an Item</div>
                    </div>
                )}

        <div className="notes">
            <p>Notes</p>
            <textarea className="notes-input" onChange={handleNotes}>

            </textarea>
        </div>

        {/* Last Priority --Adding Calculations */}

        <div className="total-amount">
            <div>
                Total Amount :  <span>&#8377;</span> {totalAmount}
                {/* invoice
                <div>
                    <div></div>
                </div> */}
            </div>
        </div>

      </div>
    )
}

export default AddInvoice;



// const ItemTable=({invoiceItemList, handleDeleteItem})=>{

//     console.log('Print Invoice Item List ',invoiceItemList);
//     return (
//         <>
//         {invoiceItemList!=[]?
//             invoiceItemList.map((val, ind) => (
//             <tr className="invoice-table-row" key={val.id}>
//                 {/* {console.log(ind)} */}
//                 <td>{val.name}</td>
//                 <td>{val.quantity}</td>
//                 <td>{val.price}</td>
//                 <td>{val.amount}</td>
//                 <td><button onClick={() => handleDeleteItem(ind)}><AiFillDelete /></button></td>
//             </tr>
//             )):''
//             }
//         </>
//     )
// }