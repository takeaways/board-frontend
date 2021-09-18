import { Button } from "@material-ui/core";
import Image from "next/image";
import { Item } from "src/lib/redux/features/products";

import styles from "styles/Product.module.css";

interface Props {
  product: Item;
}

function Product({ product }: Props) {
  const { image_link, name, price, description } = product;
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div>
          <Image src={image_link} alt={name} />
        </div>
        <div className={styles.infoWrap}>
          <strong>{name}</strong>
          <strong className={styles.price}>${price}</strong>
          <Button
            style={{ backgroundColor: "orange", color: "white" }}
            variant="contained"
          >
            Buy
          </Button>
        </div>
      </header>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default Product;
