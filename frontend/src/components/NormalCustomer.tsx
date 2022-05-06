import React from 'react';
import { ICustomer } from '../interfaces/customer';
import { CustomerAddress } from './CustomerAddress';

interface ICustomerProps {
    customer: ICustomer;
}

export const NormalCustomer: React.FunctionComponent<ICustomerProps> = ({ customer }: ICustomerProps) => {
    return (
        <div>
            <p>Customer Id: {customer?.id}</p>
            <p>Trust Score: {customer?.trust_score}</p>
            <hr />
            <CustomerAddress address={customer?.address} customerType={customer?.customer_type} />
            <hr />
            <div>Devices: {
                customer?.devices.map(device =>
                    <li key={device.os.version}>{device.os.name} {device.os.version} {device.use_count}
                    </li>
                )}
            </div>
        </div>
    )
};