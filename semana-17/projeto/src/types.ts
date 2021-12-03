export type user = {
   id: string
   name: string
   email: string
   password: string
}

export type product = {
   id: string
   name: string
   price: number
   imageUrl: string
}

export type purchase = {
   id: string
   user_id: string
   product_id: string
   quantity: number
   total_price: number
}