# Setup

To run the server, please execute the following commands.

```
cd server
npm install
npm run dev
```

Open another terminal and run following commands to start the frontend dev server.

```
cd frontend
npm install
npm start
```

Then the app will start at localhost:3000.

# Server

You don't need to modify the server code. It is very okay to see the server code for frontend development.

# Questions

## Question 1

Please use `fetch` or another library like `Axios` to retrieve the customer details with the id from the url.
Then, display the customer details in the page as an organized HTML.

You should see the page at http://localhost:3000/v1/customer?id=1

- You don't need to add beautiful styling.
- For Question 1, you don't need to worry about error handling.
- While you develop the frontend, please define and apply types and interfaces when you need. Also, please avoid using `any` type if possible.
- Please use `await` rather than `Promise` and `then` in `async` functions.
- Please do not use `as` type assertions. Instead, please use type guards.
- Please format the code with Prettier.
- Please follow the ESLint rules as much as possible.

V1 endpoint is `http://localhost:3001/api/v1/customers/${customerId}`

<img width="657" alt="React_App" src="https://user-images.githubusercontent.com/1451339/135393907-e55b63a0-3e64-4371-916c-02e42bb125b9.png">

## Question 2

Please copy and paste your CustomerV1 code.
Then, handle the error cases. In V2, the server randomly returns the 500 Internal Server Error with message.
Also, when the customer ID is 2, it responds with 404 Not Found.
When the server responds with an error, display the error message to the user.
Also, fetching might fail. In that case, display an error message "Failed to fetch the customer details" to the user.

You should see the page at http://localhost:3000/v2/customer?id=1

- Case 1: 500 Internal Server Error. You should see the 500 error page at http://localhost:3000/v2/customer?id=1 with a 50% possibility.
- Case 2: 404 Not Found. You should see the 404 not found page at http://localhost:3000/v2/customer?id=2
- Case 3: Connection error (eg timeout).

You can refresh the web page to test the case 1 (500 error with a 50% possibility).

V2 endpoint is `http://localhost:3001/api/v2/customers/${customerId}`

<img width="462" alt="React_App-2" src="https://user-images.githubusercontent.com/1451339/135393918-5d458b70-e862-4166-910a-80849c92db9a.png">

## Question 3

Question 3. Please copy and paste your CustomerV2 code.
Now, the V3 server might responds with a super user object.
customer ID 1 is the super user.
Please define a type for super users and show the details of users.

V3 endpoint is `http://localhost:3001/api/v3/customers/${customerId}`

Your app should render the page with the following URLs.

- http://localhost:3000/v3/customer?id=1 (Super user case)
- http://localhost:3000/v3/customer?id=2 (Normal user case)

<img width="425" alt="Cursor_and_React_App" src="https://user-images.githubusercontent.com/1451339/135393950-9ddd1076-0c74-478c-be68-7ba5f806390d.png">
The data structure of the user might be different from the screenshot.

## Question 4

Question 4. Please copy and paste your CustomerV3 code.
Please define a new custom hook `useFetchCustomerResult` in a new file and use it in `CustomerV4.tsx`. `useFetchCustomerResult` fetches the data from the endpoint and handles errors. In this way, you will no longer need to call `useEffect` in `CustomerV4.tsx`.

- Please create a new ts file and define the custom hook `useFetchCustomerResult`.
- Please do not use `useEffect` in `CustomerV4.tsx`.
- It is fine to use `useEffect` in `useFetchCustomerResult`.
- Please use the V3 endpoint.
- It is OK to use libraries that offer custom hooks, such as react-query and SWR.

## Question 5

Question 5. Please copy and paste your CustomerV4 code.

Please make the web page beautiful. You can use any libraries you like. You do not need to spend more than 1 hour to implement this.

- Please use the V3 endpoint
