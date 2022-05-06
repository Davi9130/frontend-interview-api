import axios from 'axios';
import { useEffect, useState } from 'react';
import { StatusCodes } from '../enums/statusCodes.enum';
import { ICustomer, ICustomerResponseData } from '../interfaces/customer';
import { IErrorApiResponse, IErrorResponse } from '../interfaces/error';

export const useFetchCustomerResult = (id: string | null) => {
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

      useEffect(() => {
        if (id !== null) {
            const fetchCustomer = async (customerId: string) => {
                try {
                  const endpoint = `http://localhost:3001/api/v3/customers/${customerId}`;
                  const { data } = await axios.get<ICustomerResponseData>(endpoint);
                  const user: ICustomer = data?.customer;
                  setCustomer(user);
                } catch (errorCall) {
                  const res = errorCall as IErrorResponse;
                  errorHandler(res?.response);
                }
            };
            fetchCustomer(id);
        }
        return () => {};
      }, [id]);
    
      return { customer, error } as const;
}