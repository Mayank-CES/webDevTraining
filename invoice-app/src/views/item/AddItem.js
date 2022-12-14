import { useState,useContext } from 'react'
import { postItemsAPI } from '../../components/Api';
import FormInput from "../../components/form/FormInput";
import { AppContext } from '../../context/AppContext';



const AddItem = () => {
    const { dispatch } = useContext(AppContext);
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        // addedOn:"",
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
          pattern: "^[a-zA-Z ]{2,}$",
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
        // values.addedOn=formatDate;
        // console.log(values)
        const data = { name: values.name, description: values.description, price: parseInt(values.price)}
        console.log(data);

        // const val=`{"name": "${values.name}","description": "${values.description}","price": ${values.price}}`;
        // console.log(val)

        postItemsAPI(data)
        dispatch({
          type: 'POST_ITEM',
          payload: data,
        });

        alert("Item Successfully Added");
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return (
      <div className="background-ghost-white">
        <div className="title-form" >
          <h2>Add Item</h2>
        </div>
        <div className="add-form">
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
              <div className="save-form"><button className="badge-pill form-button">Save Item</button></div>
          </form>
        </div>
      </div>
    )
}

export default AddItem;

