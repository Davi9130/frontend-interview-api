export interface Customer {
  address: string;
  customer_type: string;
  devices: {
    os: {
      name: string;
      version: string;
    };
    use_count: number;
  }[];
  id: number;
  name: string;
  trust_score: number;
}

export interface ApiCustomerResp {
  customer: Customer;
  id: number;
}

export interface CustomerError {
  message: string;
}

export interface SuperCustomerWithPower extends Customer {
  super_powers: {
    name: "string";
    level: number;
  }[];
}

export type SuperCustomer = Omit<SuperCustomerWithPower, "address"> & {
  address: {
    point: "string";
    district: "string";
  };
};
