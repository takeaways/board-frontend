import { Divider, Typography } from "@material-ui/core";

import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import ItemList from "src/components/ItemList";
import Http from "src/lib/api";
import { Item } from "src/lib/redux/features/products";

function Home({ list }: InferGetStaticPropsType<typeof getStaticProps>) {
  // const list = useSelector(productsSelector);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Home | takeaways</title>
        <meta name="author" content="takeaways: Geonil Jang" />
        <meta name="description" content="takeaways' next projects" />
        <meta name="keywords" content="nextjs, reduxtoolkit" />
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

export async function getStaticProps() {
  const API_URL = `/products.json?brand=${
    process.env.NODE_ENV === "development" ? "dior" : "maybelline"
  }`;

  const response = await Http.get(API_URL);
  const data: Item[] = response.data;

  return {
    props: {
      list: data,
    },
  };
}

export default Home;
