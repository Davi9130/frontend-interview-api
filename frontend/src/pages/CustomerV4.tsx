// Question 4. Please copy and paste your CustomerV3 code.
// Please define a new custom hook useFetchCustomerResult in a new file and use it in CustomerV4.tsx.
// useFetchCustomerResult fetches the data from the endpoint and handles errors.
// In this way, you will no longer need to call useEffect in CustomerV4.tsx.

import { getQueryId } from "../utils";
import { SuperCustomer } from "../types";
import { useFetchCustomerResult } from "../hooks/useFetchCustomerResult";

const isSuperCustomer = (data: unknown): data is SuperCustomer => {
  return typeof data === "object" && data !== null && "super_powers" in data;
};

export const CustomerV4 = () => {
  const id = getQueryId(window.location.search);

  const { data: customerResponse, error, isLoading } = useFetchCustomerResult(id);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>CustomerV4</h1>
          <div>id: {id}</div>

          {error && <div>{String(error)}</div>}

          {customerResponse?.customer && (
            <>
              <div>customer id: {customerResponse.customer.id}</div>
              <div>trust_score: {customerResponse.customer.trust_score}</div>
              <div>
                {isSuperCustomer(customerResponse.customer) ? (
                  <>
                    address point: {customerResponse.customer.address.point}
                    <br />
                    address district: {customerResponse.customer.address.district}
                  </>
                ) : (
                  <>address:{customerResponse.customer.address}</>
                )}
              </div>
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

              {isSuperCustomer(customerResponse.customer) && (
                <div>
                  <div>super_powers:</div>
                  <ul>
                    {customerResponse?.customer.super_powers.map((power, index) => {
                      return (
                        <li key={`${power.name}`}>
                          {power.name} {power.level}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
