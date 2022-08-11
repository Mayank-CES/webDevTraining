import { useState,useContext } from 'react'
import FormInput from "../components/FormInput";
import { AppContext } from '../context/AppContext';



const AddItem = () => {
    const { dispatch } = useContext(AppContext);

    const date =new Date();
    const formatDate =date.toUTCString().slice(5,16);
    // const formatDate =date.toDateString().slice(4,15);


    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        addedOn:"",
      });
    
      const inputs = [
        {
          id: 1,
          name: "name",
          type: "text",
          placeholder: "Name",
          errorMessage:
            "Name shouldn't include any numbers and special character!",
          label: "Name",
          pattern: "^[A-Za-z]{2,}$",
          required: true,
        },
        {
          id: 2,
          name: "description",
          type: "text",
          placeholder: "Description",
          // errorMessage:
          //   "Description shouldn't include any numbers and special character!",
          label: "Description",
          // pattern: "^[A-Za-z]{2,}$",
          required: true,
        },
        {
            id: 3,
            name: "price",
            type: "number",
            placeholder: "90",
            errorMessage:
              "Price should include only numbers",
            label: "Price",
            pattern: "^[0-9]{10}$",
            required: true,
          }
      ];
     
      const handleSubmit = (e) => {
        e.preventDefault();
        values.addedOn=formatDate;
        // console.log(values)
        dispatch({
          type: 'ADD_ITEM',
          payload: values,
        });
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return (
        <>
            <div className="add-form">
                <div className="title" >
                    <h2>Add Item</h2>
                </div>
                <div className="card width-50">
                    <form onSubmit={handleSubmit}>
                        {/* <h1>Register</h1> */}
                        {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                        ))}
                        <button className="badge-pill">Save Item</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddItem;

