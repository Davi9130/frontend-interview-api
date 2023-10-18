import { useEffect, useState } from "react";
import { fetchThrowsErrorIfNotOk, getQueryId } from "../utils";
import { ApiCustomerResp } from "../types";

const isCustomerResp = (data: unknown): data is ApiCustomerResp => {
  return typeof data === "object" && data !== null && "customer" in data;
};

export const CustomerV1 = () => {
  const [customerResponse, setCustomerResponse] = useState<ApiCustomerResp | undefined>(undefined);

  const id = getQueryId(window.location.search);

  // Question 1: Please use fetchThrowsErrorIfNotOk and fetch the customer details with the id from the url.
  // Then, display the customer details in the page as an organized HTML.
  // You don't need to add beautiful styling.
  // For Question 1, you don't need to worry about error handling.
  useEffect(() => {
    const fetchCustomer = async (customerId: string) => {
      const endpoint = `http://localhost:3001/api/v1/customers/${customerId}`;
      const resp = await fetchThrowsErrorIfNotOk(endpoint);

      if (isCustomerResp(resp)) {
        setCustomerResponse(resp);
      }

      // TODO: implement
    };
    if (id !== null) {
      fetchCustomer(id);
    }
  }, [id]);

  return (
    <div>
      <h1>CustomerV1</h1>
      <div>id: {id}</div>

      {customerResponse?.customer && (
        <>
          <div>customer id: {customerResponse.customer.id}</div>
          <div>trust_score: {customerResponse.customer.trust_score}</div>
          <div>address: {customerResponse.customer.address}</div>
          <div>
            <div>devices:</div>
            <ul>
              {customerResponse?.customer.devices.map((device, index) => {
                return (
                  <li key={`${device.os.name}`}>
                    {device.os.name} {device.os.version} {device.use_count}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
