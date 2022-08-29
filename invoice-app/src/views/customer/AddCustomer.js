import { useState,useContext} from 'react'
import { postCustomersAPI } from '../../components/Api';
import FormInput from "../../components/form/FormInput";
import { AppContext } from '../../context/AppContext';

export const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage:
      "Name shouldn't include any numbers and special character!",
    label: "Name",
    pattern: "^[A-Za-z ]{2,}$",
    required: true,
  },
  {
      id: 2,
      name: "phone",
      type: "text",
      placeholder: "9090909090",
      errorMessage:
        "Phone should include only numbers with 10 characters!",
      label: "Phone",
      pattern: "^[0-9]{10}$",
      required: true,
    },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  }
];

const AddCustomer = () => {
    const { dispatch } = useContext(AppContext);

    // const date =new Date();
    // const formatDate =date.toUTCString().slice(5,16);
    // const formatDate =date.toDateString().slice(4,15);


    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        createdOn:"",
      });
    
 
      const handleSubmit = (e) => {
        e.preventDefault();
        // values.createdOn=formatDate;
        // console.log(values)

        const data = { name: values.name, phone: values.phone, email: values.email}
        console.log(data);
        postCustomersAPI(data);
        
        dispatch({
          type: 'POST_CUSTOMER',
          payload: data,
        });
        // alert("Customer Successfully Added");
        
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return (
        <div className="background-ghost-white">
              <div className="title-form" >
                <h2>Add Customer</h2>
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
                  <div className="save-form"><button className="badge-pill form-button">Save Customer</button></div>
              </form>
            </div>

        </div>
    )
}

export default AddCustomer;

