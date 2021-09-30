# Setup

```
cd server
npm install
npm run dev
```

Open another terminal

```
cd frontend
npm install
npm start
```

# Questions

## Question 1

Please use fetch or another library and fetch the customer details with the id from the url.
Then, display the customer details in the page as an organized HTML.
You don't need to add beautiful styling.
For Question 1, you don't need to worry about error handling.

V1 endpoint is `http://localhost:3001/api/v1/customers/${customerId}`

## Question 2

Please copy and paste your CustomerV1 code.
Then, handle the error cases. In V2, the server randomly returns the 500 Internal Server Error with message.
Also, when the customer ID is 2, it responds with 404 Not Found.
When the server responds with an error, display the error message to the user.
Also, fetching might fail. In that case, display an error message "Failed to fetch the customer details" to the user.

Case 1: 500 Internal Server Error
Case 2: 404 Not Found
Case 3: Error in front end. "Failed to fetch the customer details"

V2 endpoint is `http://localhost:3001/api/v2/customers/${customerId}`

## Question 3

Question 3. Please copy and paste your CustomerV2 code.
Now, the V3 server might responds with a super user object.
customer ID 1 is the super user.
Please define a type for super users and show the details of users.

## Question 4

Question 4. Please copy and paste your CustomerV3 code.
Please make the web page beautiful. You can use any libraries you like.
