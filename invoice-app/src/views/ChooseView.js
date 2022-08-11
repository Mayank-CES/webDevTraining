import React, {useContext} from 'react'
import AddCustomer from './addCustomer'
import ViewCustomer from './viewCustomer'
import AddItem from './AddItem'
import ViewItem from './ViewItem'
import { AppContext } from '../context/AppContext'

const VIEWS = {
    ADD_CUSTOMER: 'add-customer',
    VIEW_CUSTOMER: 'view-customer',
    ADD_ITEM: 'add-item',
    VIEW_ITEM: 'view-item',
}

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
        default :   {
            return(
                console.log("Fall Back to Default Case")
            )
        }
    }

}

export default ChooseView;