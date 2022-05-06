// import { Roles } from '../constants/roles.enum';

export interface ICustomerResponseData {
  customer: ICustomer;
  id: string;
}

export interface ICustomer {
  id: number;
  name: string;
  customer_type: string;
  address: IAddress;
  devices: IDevice[];
  trust_score: number;
  super_powers?: ISuperPowers[];
}

export interface IAddress {
  address?: string;
  point?: string;
  district?: string;
}

export interface IDevice {
  os: IDeviceSystem;
  use_count: number;
}

export interface IDeviceSystem {
  name: string;
  version: string;
}

export interface ISuperPowers {
  name: string;
  level: number;
}
