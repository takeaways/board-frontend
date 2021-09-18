import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import Product from "src/components/Product";
import Http from "src/lib/api";
import { Item } from "src/lib/redux/features/products";

const getUrl = (id: string) => `/products/${id}.json`;

function View({
  item,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      {item && <Product product={item} />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ item: Item }> = async (
  context
) => {
  const id = context.params?.id;
  const apiUrl = getUrl(String(id));
  const res = await Http.get<Item>(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
};

export default View;
