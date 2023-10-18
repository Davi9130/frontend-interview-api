import styled from "styled-components";
import { getQueryId } from "../utils";
import { SuperCustomer } from "../types";
import { useFetchCustomerResult } from "../hooks/useFetchCustomerResult";

const isSuperCustomer = (data: unknown): data is SuperCustomer => {
  return typeof data === "object" && data !== null && "super_powers" in data;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;

  .card {
    width: 700px;
    padding: 15px;
    border-radius: 10px;

    background-color: #f0f0f2;
  }

  .label {
    font-size: 15px;
  }

  .text-values {
    font-size: 15px;
    font-weight: bold;
  }

  .error-text {
    color: red;
  }

  .title {
    font-size: 30px;
    font-weight: bold;
  }

  .display-row {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const CustomerV5 = () => {
  const id = getQueryId(window.location.search);

  const { data: customerResponse, error, isLoading } = useFetchCustomerResult(id);

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card">
          <p className="title">CustomerV5</p>
          <div className="display-row ">
            <p className="label">Id:</p>
            <p className="text-values">{id}</p>
          </div>

          {error && <p className="error-text">{String(error)}</p>}

          {customerResponse?.customer && (
            <>
              <div className="display-row">
                <p className="label">Customer id:</p>
                <p className="text-values">{customerResponse.customer.id}</p>
              </div>
              <div className="display-row">
                <p className="label">Trust_score:</p>
                <p className="text-values">{customerResponse.customer.trust_score}</p>
              </div>
              <div>
                {isSuperCustomer(customerResponse.customer) ? (
                  <>
                    <div className="display-row">
                      <p className="label">Address point:</p>
                      <p className="text-values">{customerResponse.customer.address.point}</p>
                    </div>

                    <div className="display-row">
                      <p className="label">Address district: </p>
                      <p className="text-values">{customerResponse.customer.address.district}</p>
                    </div>
                  </>
                ) : (
                  <>address:{customerResponse.customer.address}</>
                )}
              </div>
              <div>
                <p>Devices:</p>
                <ul>
                  {customerResponse?.customer.devices.map((device, index) => {
                    return (
                      <li className="text-values" key={`${device.os.name}`}>
                        {device.os.name} {device.os.version} {device.use_count}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {isSuperCustomer(customerResponse.customer) && (
                <div>
                  <p>Super_powers:</p>
                  <ul>
                    {customerResponse?.customer.super_powers.map((power, index) => {
                      return (
                        <li className="text-values" key={`${power.name}`}>
                          {power.name} {power.level}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </Container>
  );
};
