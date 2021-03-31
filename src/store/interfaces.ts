export interface State {
items: Item[],
user: User
}

export type Item = {
  id: string,
  qty: number,
  name: string,
  store: string,
  bought: boolean
}

export interface User {
username: string,
attributes: Attributes
}

type Attributes = {
  sub: string,
  email_verified: boolean,
  phone_number: string,
  phone_number_verified: string,
}