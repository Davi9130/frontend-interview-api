export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <a href="/v1/customer?id=1">V1 Customer id:1</a>
        </li>
        <li>
          <a href="/v2/customer?id=1">V2 Customer id:1</a>
        </li>
        <li>
          <a href="/v2/customer?id=2">V2 Customer id:2</a>
        </li>
        <li>
          <a href="/v3/customer?id=1">V3 Customer id:1</a>
        </li>
        <li>
          <a href="/v3/customer?id=2">V3 Customer id:2</a>
        </li>
        <li>
          <a href="/v4/customer?id=1">V4 Customer id:1</a>
        </li>
        <li>
          <a href="/v5/customer?id=1">V5 Customer id:1</a>
        </li>
      </ul>
    </div>
  );
};
