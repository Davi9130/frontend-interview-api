import React from 'react';
import { ICustomer } from '../interfaces/customer';
import { CustomerAddress } from './CustomerAddress';

interface ICustomerProps {
    customer: ICustomer;
  }

export const SuperCustomer: React.FunctionComponent<ICustomerProps> = ({ customer }: ICustomerProps) => {
    return (
        <div>
            <p>Customer Id: {customer?.id}</p>
            <p>Trust Score: {customer?.trust_score}</p>
            <hr />
            <CustomerAddress address={customer?.address} customerType={customer?.customer_type}/>
            <hr />
            <div>Devices: {
                customer?.devices.map(device =>
                    <li key={device.os.version}>{device.os.name} {device.os.version} {device.use_count}
                    </li>
                )}
            </div>
            <hr />
            <div>Super Powers: {
                customer?.super_powers?.map(power =>
                    <li key={power?.name}>
                        {power?.name} {power?.level}
                    </li>
                )}
            </div>
        </div>
    )
};