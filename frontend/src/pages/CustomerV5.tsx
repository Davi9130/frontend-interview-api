// Question 5. Please copy and paste your CustomerV4 code.
// Please make the web page beautiful. You can use any libraries you like.
import styled from "styled-components";
import { getQueryId } from "../utils";
import { Customer } from "../components/Customer";
import { Error } from '../components/Error';
import { useFetchCustomerResult } from '../hooks/useFetchCustomerResult';

export const CustomerV5 = () => {
    const id = getQueryId(window.location.search);
    const { customer, error } = useFetchCustomerResult(id);

    return (
        <StyledMain>
            <StyledContentCard>
            <StyledHeaderCard> 
                Customer V5
            </StyledHeaderCard>
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
            </StyledContentCard>
        </StyledMain>
    );
};

const StyledHeaderCard = styled.h1`
color: white;
text-transform: uppercase;
`;

const StyledContentCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: linear-gradient(180deg, rgba(61,118,168,1) 0%, rgba(100,148,185,1) 35%, rgba(104,177,193,1) 100%);
color: #3d3d3d;
border-radius: 20px;
padding: 20px;
max-width: 250px;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 30px;
  padding: 20px;
  min-height: 100vh;
  font-family: 'Notable', sans-serif;
  font-weight: bold;
  max-width: 600px;
`;
