import React, {useContext} from 'react'
import AddCustomer from '../views/AddCustomer'
import ViewCustomer from '../views/ViewCustomer'
import AddItem from '../views/AddItem'
import ViewItem from '../views/ViewItem'
import { AppContext } from '../context/AppContext'
import { VIEWS } from './Constant'

// const VIEWS = {
//     ADD_CUSTOMER: 'add-customer',
//     VIEW_CUSTOMER: 'view-customer',
//     ADD_ITEM: 'add-item',
//     VIEW_ITEM: 'view-item',
//     ADD_INVOICE: 'add-customer',
//     VIEW_INVOICE: 'view-customer',
// }

const ChooseView = () => {
    const {currentView} = useContext(AppContext);
    console.log(currentView)
    switch (currentView) {
            // return(
            //     <div> Welcome to the Invoice App</div>
            // )
        case VIEWS.VIEW_CUSTOMER : {
            return(
                <ViewCustomer/>
            )
        }
        case VIEWS.ADD_CUSTOMER : {
            return(
                <AddCustomer/>
            )
        }
        case VIEWS.VIEW_ITEM : {
            return(
                <ViewItem/>
            )
        }
        case VIEWS.ADD_ITEM : {
            return(
                <AddItem/>
            )
        }
        case VIEWS.VIEW_CUSTOMER : {
            return(
                <ViewCustomer/>
            )
        }
        case VIEWS.ADD_CUSTOMER : {
            return(
                <AddCustomer/>
            )
        }
        default :   {
            return(
                console.log("Fall Back to Default Case")
            )
        }
    }

}

export default ChooseView;