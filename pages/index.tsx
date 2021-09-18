import { Divider, Typography } from "@material-ui/core";

import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "src/components/ItemList";

import {
  fetchProducts,
  productsSelector,
} from "src/lib/redux/features/products";

function Home() {
  const list = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Home | takeaways</title>
      </Head>
      <Typography variant="h3" style={{ padding: "40px 0" }}>
        베스트 아이템
        <Divider />
      </Typography>
      <ItemList list={list.slice(0, 9)} />

      <Typography variant="h3" style={{ padding: "40px 0" }}>
        신상품
        <Divider />
      </Typography>

      <ItemList list={list.slice(9)} />
    </div>
  );
}

export default Home;
