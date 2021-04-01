export interface State {
items: Item[],
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

export type Item = {
  id: string,
  qty: number,
  name: string,
  store: string,
  bought: boolean
}
export type Store = {
  id: string,
  store: string,
  color: string
}

type Attributes = {
  sub: string,
  email_verified: boolean,
  phone_number: string,
  phone_number_verified: string,
}

