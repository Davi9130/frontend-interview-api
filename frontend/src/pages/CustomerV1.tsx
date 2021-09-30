import { getQueryId } from "../utils";

export const CustomerV1 = () => {
  const id = getQueryId(window.location.search);

  // Question 1: Please use fetch or another library and fetch the customer details with the id from the url.
  // You don't need to add beautiful styling.

  return (
    <div>
      <h1>CustomerV1</h1>
      <div>id: {id}</div>
      <div></div>
    </div>
  );
};
