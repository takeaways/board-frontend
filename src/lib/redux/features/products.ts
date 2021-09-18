import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import Http from "src/lib/api";

export type Item = {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign?: any;
  currency?: any;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number;
  category?: any;
  product_type: string;
  tag_list: any[];
  created_at: Date;
  updated_at: Date;
  product_api_url: string;
  api_featured_image: string;
  product_colors: any[];
};

export interface ProductState {
  products: Item[];
}

const initialState: ProductState = {
  products: [],
};

const API_URL = `/products.json?brand=${
  process.env.NODE_ENV === "development" ? "dior" : "maybelline"
}`;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await Http.get(API_URL);

    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Item[]>) => {
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export const productsSelector = (state: RootState) => state.products.products;
export default productSlice.reducer;
