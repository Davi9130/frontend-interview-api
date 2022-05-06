import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import { getQueryId } from "../utils";
import { Customer } from "../components/Customer";
import { ICustomer, ICustomerResponseData } from '../interfaces/customer';

export const CustomerV1 = () => {
  const id = getQueryId(window.location.search);
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  // Question 1: Please use fetch or another library and fetch the customer details with the id from the url.
  // Then, display the customer details in the page as an organized HTML.
  // You don't need to add beautiful styling.
  // For Question 1, you don't need to worry about error handling.

  const fetchCustomer = useCallback(
    (customerId: string) => {
      const customerRequest = async () => {
          const endpoint = `http://localhost:3001/api/v1/customers/${customerId}`;
          const { data } = await axios.get<ICustomerResponseData>(endpoint);
          const user: ICustomer = data?.customer;
           return setCustomer(user);
      }
      customerRequest();
    },
    []
  );


  useEffect(() => {
    if (id !== null) {
      fetchCustomer(id);
    }
  }, [fetchCustomer, id]);

  return (
    <div>
        <h1>CustomerV1</h1>
        <div>id: {id}</div>
        {customer && <Customer customer={customer} />}
      </div>
  );
};
