import {
    fireEvent,
    render,
    screen,
    waitFor,
    within,} from "@testing-library/react";
import ViewCustomers from "../ViewCustomer";
import "@testing-library/jest-dom/extend-expect";
import { setupServer } from "msw/node";
import { customerHandler, customers } from "../../../mocks/customerHandlers";
import AddCustomer, { inputs } from "../AddCustomer";
import userEvent from "@testing-library/user-event";
import { AppProvider } from "../../../context/AppContext";
import { BrowserRouter } from "react-router-dom";
// import timeConverter from "../../../components/utils/timeConverter";

const server = new setupServer(...customerHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe("static tests", () => {
  it("correct heading and button for view-customer page", () => {
    render(<AppProvider>
      <BrowserRouter>
      <ViewCustomers />
      </BrowserRouter>
      </AppProvider>);
    
    const headingElem = screen.queryByRole("heading");
    expect(headingElem).toHaveTextContent("Customers");
    const newCustomerButton = screen.getByRole("button");
    expect(newCustomerButton).toHaveTextContent(/^New Customer$/);
  });

  it("correct heading and button for add-customer page", () => {
    render(<AppProvider>
      <AddCustomer/>
      </AppProvider>);
    
    const headingElem = screen.queryByRole("heading");
    expect(headingElem).toHaveTextContent("Add Customer");
    const newCustomerButton = screen.getByRole("button");
    expect(newCustomerButton).toHaveTextContent(/^Save Customer$/);
    const [nameInput, phoneInput, emailInput] = screen
      .getAllByRole("textbox")
      .slice(-3);
    expect(nameInput.placeholder).toBe("Name");
    expect(phoneInput.placeholder).toBe("9090909090");
    expect(emailInput.placeholder).toBe("Email");
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    const errMsg=screen.getAllByTestId("error-msg")
    console.log(errMsg)

    expect(errMsg).toHaveLength(3);

    expect(errMsg[0]).toHaveTextContent("Name shouldn't include any numbers and special character!");
    expect(errMsg[1]).toHaveTextContent('Phone should include only numbers with 10 characters!');
    expect(errMsg[2]).toHaveTextContent('It should be a valid email address!');

    // console.log(nameInput.placeholder);
  });
});

describe("View-Customer-page", () => {
  it("should show customer table", async () => {
    render(<AppProvider>
      <BrowserRouter>
      <ViewCustomers />
      </BrowserRouter>
      </AppProvider>);
    const tableElement = await screen.findByRole("table");
    expect(tableElement).toBeInTheDocument();
    const table = screen.getByRole("table");
    console.log("Check if data was mocked",customers);
    const columnNames = within(table).getAllByRole("columnheader");
    const tableHeaders = [
      "NAME",
      "PHONE",
      "EMAIL",
      "CREATED ON",
    ];
    tableHeaders.forEach((header, idx) =>
      expect(columnNames[idx]).toHaveTextContent(header)
    );
    
    const cells = await screen.findAllByRole("cell")
    // console.log(cells)

    // screen.getByRole("cells")
    const listSize = 3;
    let currentIdx = 0;
    customers.forEach((customer) => {
      if (currentIdx === listSize) {
        currentIdx = 0;
        const nextPage = screen.getByTestId("next-page");
        fireEvent.click(nextPage);
      }
      const cells = screen.getAllByRole("cell")
        .splice(currentIdx * 4, 4);
      // console.log(cells)
      expect(cells[0]).toHaveTextContent(customer.name);
      expect(cells[1]).toHaveTextContent(customer.phone);
      expect(cells[2]).toHaveTextContent(customer.email);
      currentIdx++;
    });
  });
  
}); 

describe("Add-Customer-page", () => {
  it("post customer test", async () => {
    render(<AppProvider>
      <AddCustomer/>
      </AppProvider>);

    // const inputs=await screen.findByPlaceholderText("Name");
    // screen.getAllByRole("vbubv")
    // console.log(inputs)

    const submitButton = screen.getByRole("button");
    const [nameInput, phoneInput, emailInput] = screen
      .getAllByRole("textbox")
      .slice(-3);
    const inputFields = [nameInput, phoneInput, emailInput];
    const userData = {
      name: "Suyash Goyal",
      phone: "8962854321",
      email: "suyash@gmail.com",
    };
    const user = userEvent.setup();
  
    await user.type(nameInput, userData.name);
    expect(nameInput).toHaveValue(userData.name);
    await user.type(phoneInput, userData.phone);
    expect(phoneInput).toHaveValue(userData.phone);
    await user.type(emailInput, userData.email);
    expect(emailInput).toHaveValue(userData.email);
  
    fireEvent.click(submitButton);
  });
});


//Post customer
// isLabelWithInternallyDisabledControl, input, err msg, button, fireEvent, post
