import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React, { useMemo } from "react";
import { Item } from "src/lib/redux/features/products";

interface Props {
  list: Item[];
}

function ItemList({ list }: Props) {
  const listItems = useMemo(() => {
    const listItems: Item[][] = [];
    for (let i = 0; i < list.length; i += 3) {
      listItems.push(list.slice(i, i + 3));
    }
    return listItems;
  }, [list]);

  return (
    <Grid container spacing={2} justifyContent="space-around">
      {listItems.map((items, index) => (
        <Grid
          key={index}
          item
          container
          spacing={2}
          justifyContent="space-around"
          xs={4}
        >
          {items.map((item) => (
            <Grid key={item.name} item>
              <Link href={`/view/${item.id}`}>
                <a>
                  <Card style={{ height: 320 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={item.name}
                        height="140"
                        image={item.image_link}
                        title={item.name}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.category} - {item.product_type}
                        </Typography>
                        <Typography gutterBottom variant="h5">
                          ${item.price}
                        </Typography>
                        <Typography gutterBottom variant="h5">
                          {item.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemList;
