import Axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";

import Product from "src/components/Product";
import { Item } from "src/lib/redux/features/products";

function View() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Item | undefined>(undefined);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const getData = useCallback(() => {
    if (id) {
      Axios.get(API_URL).then((response) => {
        setProduct(response.data);
      });
    }
  }, [API_URL, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return product ? <Product product={product} /> : null;
}

export default View;
