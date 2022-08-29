const VIEWS = {
  ADD_CUSTOMER: 'add-customer',
  VIEW_CUSTOMER: 'view-customer',
  ADD_ITEM: 'add-item',
  VIEW_ITEM: 'view-item',
  ADD_INVOICE: 'add-invoice',
  VIEW_INVOICE: 'view-invoice',
}

const initialState = {
  customers: [],
  items: [],
  invoices: [],
  currentMenu: 'customer',
  currentView: 'view-customer'
};

const PATHS = {
  ADD_CUSTOMER: 'add-customer',
  VIEW_CUSTOMER: 'view-customer',
  ADD_ITEM: 'add-item',
  VIEW_ITEM: 'view-item',
  ADD_INVOICE: 'add-invoice',
  VIEW_INVOICE: 'view-invoice',
}

const searchOptions1 = [
  { key: 1, value: "Name" },
  { key: 2, value: "Phone" },
  { key: 3, value: "Email" },
  // { key: 4, value: "All" }
];

const searchOptions2 = [
  { key: 1, value: "Name" },
  { key: 2, value: "Description" },
  // { key: 3, value: "Price" },
  // { key: 4, value: "All" }
];

const searchOptions3 = [
  // { key: 1, value: "DATE" },
  { key: 2, value: "Customer" },
  { key: 3, value: "Number" },
  { key: 4, value: "Paid Status" },
  // { key: 5, value: "AMOUNT" },
  // { key: 6, value: "AMOUNT DUE" },
  // { key: 4, value: "All" }
];

// const customerHeaders  = ["Name","Phone","Email","Created On"];
// const itemHeaders  = ["Name","Description","Price","Added On"];
const customerHeaders  = ["NAME","PHONE","EMAIL","CREATED ON"];
const itemHeaders  = ["NAME","DESCRIPTION","PRICE","ADDED ON"];
const invoiceHeaders  = ["DATE","CUSTOMER","NUMBER","PAID STATUS", "AMOUNT","AMOUNT DUE"];

export {VIEWS, initialState, PATHS, customerHeaders, itemHeaders, invoiceHeaders, searchOptions1, searchOptions2, searchOptions3}