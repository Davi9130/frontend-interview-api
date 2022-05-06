// Question 4. Please copy and paste your CustomerV3 code.
// Please make the web page beautiful. You can use any libraries you like.
import { getQueryId } from "../utils";
import { Customer } from "../components/Customer";
import { Error } from '../components/Error';
import { useFetchCustomerResult } from '../hooks/useFetchCustomerResult';

export const CustomerV4 = () => {
  const id = getQueryId(window.location.search);  
  const { customer, error } = useFetchCustomerResult(id);

  return (
    <div>
      <h1>CustomerV4</h1>
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