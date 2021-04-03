export interface State {
items: Product[],
user: any,
authState: any,
unsubscribeAuth: () => void,
isNavOpen: boolean,
stores: Store[]
}
export interface User {
username: string,
attributes: Attributes
}

export type Product = {
  id: string,
  qty: number,
  name: string,
  store: Store,
  bought: boolean
}
export type Store = {
  id: string,
  name: string,
  color: string
}

type Attributes = {
  sub: string,
  email_verified: boolean,
  phone_number: string,
  phone_number_verified: string,
}

