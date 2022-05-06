import React from 'react';
import styled from "styled-components";
import { ICustomer } from '../interfaces/customer';
import { NormalCustomer } from './NormalCustomer';
import { SuperCustomer } from './SuperCustomer';

interface ICustomerProps {
  customer: ICustomer;
}

export const Customer: React.FunctionComponent<ICustomerProps> = ({ customer }: ICustomerProps) => {

  return (
    <StyledCard>
      {customer.customer_type === 'super' ? (
        <SuperCustomer customer={customer} />
      ) : (
        <NormalCustomer customer={customer} />
      )
      }
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
