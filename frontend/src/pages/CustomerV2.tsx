// Question 2. Please copy and paste your CustomerV1 code.
// Then, handle the error cases. In V2, the server randomly returns an error with message.
// When the server responds with an error, display the error message to the user.
// Also, fetching might fail. In that case, display an error message "Failed to fetch the customer details" to the user.
//
// Case 1: 500 Internal Server Error
// Case 2: 404 Not Found
//
// V2 endpoint is `http://localhost:3001/api/v2/customers/${customerId}`

import { useEffect, useState } from "react";
import { fetchThrowsErrorIfNotOk, getQueryId } from "../utils";
import { ApiCustomerResp, CustomerError } from "../types";

const isCustomerResp = (data: unknown): data is ApiCustomerResp => {
  return typeof data === "object" && data !== null && "customer" in data;
};

const isCustomerError = (data: unknown): data is CustomerError => {
  return typeof data === "object" && data !== null && "message" in data;
};

const parseErrorMsg = (error: CustomerError | undefined) => {
  switch (error?.message) {
    case "500":
      return "Something went wrong.";
    case "404":
      return "Customer not found.";
    default:
      return "";
  }
};

export const CustomerV2 = () => {
  const [customerResponse, setCustomerResponse] = useState<ApiCustomerResp | undefined>(undefined);
  const [errorMsg, setErrorMsg] = useState<CustomerError | undefined>(undefined);

  const id = getQueryId(window.location.search);

  // Question 1: Please use fetchThrowsErrorIfNotOk and fetch the customer details with the id from the url.
  // Then, display the customer details in the page as an organized HTML.
  // You don't need to add beautiful styling.
  // For Question 1, you don't need to worry about error handling.
  useEffect(() => {
    const fetchCustomer = async (customerId: string) => {
      const endpoint = `http://localhost:3001/api/v2/customers/${customerId}`;

      try {
        const resp = await fetchThrowsErrorIfNotOk(endpoint);

        if (isCustomerResp(resp)) {
          setCustomerResponse(resp);
        }
      } catch (error) {
        if (isCustomerError(error)) {
          const errorMessage = parseErrorMsg(error);

          setErrorMsg({ message: errorMessage });
        }
      }

      // TODO: implement
    };
    if (id !== null) {
      fetchCustomer(id);
    }
  }, [id]);

  return (
    <div>
      <h1>CustomerV2</h1>
      <div>id: {id}</div>

      {errorMsg && <div>{errorMsg.message}</div>}

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
