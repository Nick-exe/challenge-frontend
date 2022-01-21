export interface UserTransaction {
  user: User;
  transactions: Transaction[];
  status: string;
  error_code: number;
}

export interface User {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  countryId: string;
  stateProvinceId: string;
  city: string;
  address: string;
  zipPostalCode: string;
}

export interface Product {
  verteItemId: string;
  pictures: string[];
  productName: string;
  shortDescription: string;
  title: string;
}

export interface App {
  publisher_id: string;
  game_id: string;
  placement_id: string;
  bundle_id: string;
  appv: string;
}

export interface Transaction {
  product: Product;
  app: App;
  price: number;
  shippingRateComputationMethodSystemName: string;
  shippingOption: string;
  CreditCardName: string;
  creditCardNumber: string;
  creditCardExpireYear: number;
  creditCardExpireMonth: number;
  creditCardCvv2: string;
}



