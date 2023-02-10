import axios, { AxiosResponse } from "axios"
import { ProductType } from "../../types/product";
import { api } from "../config";

type ListProductsRequest = {
  name?: string
}

type ListProductsResponse = {
  products: ProductType[];
  total: number;
}

export const ListProducts = async ({ name }: ListProductsRequest) => {
  const { data }: AxiosResponse<ListProductsResponse> = await api.get(`api/products/${name}`)

  return data
}