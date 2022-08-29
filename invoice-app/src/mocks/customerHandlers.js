import { rest } from 'msw'

export const customers=[{id:1, name:"Mayank",phone:"9876543210",email:"mayank@gmail.com"}
                        ,{id:2, name:"Pulkit",phone:"9876556789",email:"pulkit@gmail.com"}
                        ,{id:3, name:"Anup",phone:"0123456789",email:"anup@gmail.com"}];

export const newCustomer=[{id:1, name:"Suyash Goyal",phone:"8962854321",email:"suyash@gmail.com"}];

export const fetchCustomers = rest.get(
    "http://localhost:8080/Home/customers",
    async (req, res, ctx) =>{
        console.log("Data Requested")
        return res(ctx.status(200), ctx.json(customers));
    }
);

export const postCustomers = rest.post(
    "http://localhost:8080/Home/customer",
    async (req, res, ctx) =>{
        console.log("Data Posted")
        return res(ctx.status(200), ctx.json(newCustomer));
    }
);



export const customerHandler=[fetchCustomers,postCustomers]