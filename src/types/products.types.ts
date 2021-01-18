export interface Product {
    id: string,
    title: string,
    value: number,
    quantity: number
  }
  
  export interface Products {
    products: Product[],
    loading: boolean,
    error: boolean
  }