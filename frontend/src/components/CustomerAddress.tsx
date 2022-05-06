import React from 'react';
import styled from 'styled-components';
import { Roles } from '../enums/roles.enum';
import { IAddress } from '../interfaces/customer';

interface ICustomerProps {
    address: IAddress;
    customerType: string;
}

export const CustomerAddress: React.FunctionComponent<ICustomerProps> = ({ address, customerType }: ICustomerProps) => {
    return (
        <StyledAddressContent>
            {customerType === Roles.NORMAL ? (
                <p>Address: {address}</p>
            ) : (
                <>
                    <p>Address Point: {address?.point}</p>
                    <p>Address District: {address?.district}</p>
                </>
            )}
        </StyledAddressContent>
    )
};

const StyledAddressContent = styled.div`
  background-color: #adc6d9;
`;