import * as React from "react";

//style
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import ItemItem from "./ItemItem";
import { useSelector } from "react-redux";

const ItemList = () => {
  const items = useSelector((state) => state.items.items);

  const itemsArray = items.map((item) => (
    <ItemItem item={item} key={item.id} />
  ));

  return (
    <ImageList sx={{ margin: 6 }}>
      <ImageListItem key="Subheader" cols={6}></ImageListItem>
      {itemsArray}
    </ImageList>
  );
};

export default ItemList;
