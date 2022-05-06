// Question 2. Please copy and paste your CustomerV1 code.
// Then, handle the error cases. In V2, the server randomly returns an error with message.
// When the server responds with an error, display the error message to the user.
// Also, fetching might fail. In that case, display an error message "Failed to fetch the customer details" to the user.
//
// Case 1: 500 Internal Server Error
// Case 2: 404 Not Found
// Case 3: Connection error (eg timeout). "Failed to fetch the customer details"
//
// V2 endpoint is `http://localhost:3001/api/v2/customers/${customerId}`
import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import { getQueryId } from "../utils";
import { Customer } from "../components/Customer";
import { ICustomer, ICustomerResponseData } from '../interfaces/customer';
import { IErrorResponse, IErrorApiResponse } from "../interfaces/error";
import { StatusCodes } from '../enums/statusCodes.enum';
import { Error } from '../components/Error';

export const CustomerV2 = () => {
  const id = getQueryId(window.location.search);
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const [error, setApiErrorResponse] = useState<IErrorApiResponse | null>(null);

  const errorHandler = (errorResponse: IErrorApiResponse): void => {
    const statusNumber = errorResponse.status;
    switch (statusNumber) {
      case StatusCodes.SERVER_ERROR:
        return setApiErrorResponse(errorResponse);
      case StatusCodes.NOT_FOUND:
        return setApiErrorResponse(errorResponse);
      default:
        return setApiErrorResponse(errorResponse);
    }
  };

  const fetchCustomer = useCallback(
    (customerId: string) => {
      const customerRequest = async () => {
        try {
          const endpoint = `http://localhost:3001/api/v2/customers/${customerId}`;
          const { data } = await axios.get<ICustomerResponseData>(endpoint);
          const user: ICustomer = data?.customer;
          return setCustomer(user);
        } catch (errorCall) {
          const res = errorCall as IErrorResponse;
          return errorHandler(res?.response);
        }
      }
      customerRequest();
    },
    [setCustomer]
  );

  useEffect(() => {
    if (id !== null) {
      fetchCustomer(id);
    }
  }, [fetchCustomer, id]);

  return (
    <div>
      <h1>CustomerV2</h1>
      <div>id: {id}</div>
      {error ? (
        <>
          <Error error={error} />
          {customer && <Customer customer={customer} />}
        </>
      ) : (
        <div>
          {customer && <Customer customer={customer} />}
        </div>
      )
      }
    </div>
  );
};
