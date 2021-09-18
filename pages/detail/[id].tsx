import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Loading from "src/components/Loading";
import Product from "src/components/Product";
import Http from "src/lib/api";
import { Item } from "src/lib/redux/features/products";

const getUrl = (id: string) => `/products/${id}.json`;

function View({ item }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading open />;
  }

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

export async function getStaticPaths() {
  const API_URL = `/products.json?brand=${
    process.env.NODE_ENV === "development" ? "dior" : "maybelline"
  }`;

  const response = await Http.get(API_URL);
  const data: Item[] = response.data;

  return {
    // paths: [
    //   { params: { id: "414" } },
    //   { params: { id: "468" } },
    //   { params: { id: "495" } },
    // ],
    paths: data
      .slice(0, 9)
      .map(({ id }) => ({ params: { id: id.toString() } })),
    fallback: true, // false 없는 페이지 대응을 안해줌
  };
}

export const getStaticProps: GetStaticProps<{ item: Item }> = async (
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
