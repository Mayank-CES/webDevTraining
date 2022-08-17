import React, {useContext, useEffect} from 'react'
import { AppContext } from '../context/AppContext';
// import Content from '../components/content'
import { MdAdd } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import Table from '../components/Table';
import { getCustomersAPI } from '../components/Api';
import { customerHeaders, searchOptions1 } from '../utils/Constant';
// import {itemResponse, makeGetItemCall} from '../components/Api'


const ViewCustomer = () => {
    const { customers, dispatch } = useContext(AppContext);
    let navigate = useNavigate();
    const { currentMenu, changeView } = useContext(AppContext);
    
    useEffect(() => {
        (async () => {
            const data = await getCustomersAPI();
            var mappedData = []
            // console.log(data)
            mappedData = mapCustomer(data, mappedData);
            dispatch({
                type: 'SET_CUSTOMER',
                payload: mappedData,
            });
            // console.log(...data)
          
            // console.log(...mappedData)
            // console.log(customers);
        })();
        return () => { };
    }, []);


    const handleClick = (e) =>{
        e.preventDefault();
        console.log("Clicked New Customer Button")
        // console.log(customerVal)
        // changeView(currentMenu,'add-customer')
        navigate("/add-customer");
    };
    return ( 
        <>
            <div className="content">
                <div className="title" >
                    <h2>Customers</h2>
                </div>
                <div className="badge">
                    <button className="badge-pill"  onClick={handleClick} ><MdAdd/> New Customer</button>
                </div>
                {console.log(customers)}
                <Table
                 values = {customers}
                 headers ={customerHeaders}
                 searchOptions ={searchOptions1}
                >
                </Table>
            </div>
        </>
    )
};


export default ViewCustomer;


function mapCustomer(data, mappedData) {
    data.map((val) => (
        mappedData = [
            ...mappedData,
            {   id:val.id,
                name: val.name,
                phone: val.phone,
                email: val.email,
                createdOn: new Date(val.createdAt).toUTCString().slice(5,16),
            }
        ]
    ));
    return mappedData;
}
