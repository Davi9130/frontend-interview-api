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
