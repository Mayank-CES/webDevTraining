import React, {useContext, useEffect} from 'react'
import { AppContext } from '../context/AppContext';
import { MdAdd } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import Table from '../components/Table';
import { getItemsAPI} from '../components/Api';
import { itemHeaders, searchOptions2 } from '../utils/Constant';


const ViewItem = () => {
    const { items, dispatch } = useContext(AppContext);
    let navigate = useNavigate();
    const { currentMenu, changeView } = useContext(AppContext);

    // console.log(itemVal)

    // useEffect(() => {
    //     const data = MakeGetItemCall();
    //     dispatch({
    //         type: 'SET_ITEM',
    //         payload: data,
    //     });
    // });

    useEffect(() => {
        (async () => {
            const data = await getItemsAPI();
            var mappedData = []
            // console.log(data)
            mappedData = mapItem(data, mappedData);
            dispatch({
                type: 'SET_ITEM',
                payload: mappedData,
            });
            console.log(...data)
            
            // console.log(...mappedData)
            // console.log(items);
        })();
        return () => { };
    }, []);


    const handleClick = () =>{
        console.log("Clicked New Item Button")
        // const {itemVal} =MakeGetItemCall;
        // console.log(itemVal);
        // changeView(currentMenu,'add-item');
        navigate("/add-item");
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
            <Table
                 values = {items}
                 headers ={itemHeaders}
                 searchOptions ={searchOptions2}
                >
                </Table>
        </div>
    </>
  )
};

export default ViewItem;

function mapItem(data, mappedData) {
    data.map((val) => (
        mappedData = [
            ...mappedData,
            {   id: val.id,
                name: val.name,
                description: val.description,
                price: val.price,
                addedOn: new Date(val.created_at).toUTCString().slice(5,16)
            }
        ]
    ));
    return mappedData;
}
