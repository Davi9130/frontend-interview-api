import { useQuery } from "react-query";
import { ApiCustomerResp } from "../types";

export const useFetchCustomerResult = (customerId: string | null) => {
  const endpoint = `http://localhost:3001/api/v4/customers/${customerId}`;

  const apiCall = async () => {
    if (!customerId) return null;

    const resp = await fetch(endpoint);

    if (resp.ok) {
      return resp.json();
    }
    throw new Error(resp.statusText);
  };

  return useQuery<ApiCustomerResp>(["customer", customerId], apiCall, {
    retry: false,
  });
};
