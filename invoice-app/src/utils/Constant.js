const VIEWS = {
  ADD_CUSTOMER: 'add-customer',
  VIEW_CUSTOMER: 'view-customer',
  ADD_ITEM: 'add-item',
  VIEW_ITEM: 'view-item',
  ADD_INVOICE: 'add-customer',
  VIEW_INVOICE: 'view-customer',
}

const initialState = {
  customers: [{name: 'Mayank', phone: '9090900909', email: 'mayank@gmail.com', createdOn: '13 Aug 2022'}],
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
  ADD_INVOICE: 'add-customer',
  VIEW_INVOICE: 'view-customer',
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



// const customerHeaders  = ["Name","Phone","Email","Created On"];
// const itemHeaders  = ["Name","Description","Price","Added On"];
const customerHeaders  = ["NAME","PHONE","EMAIL","CREATED ON"];
const itemHeaders  = ["NAME","DESCRIPTION","PRICE","ADDED ON"];


export {VIEWS, initialState, PATHS, customerHeaders, itemHeaders, searchOptions1, searchOptions2}