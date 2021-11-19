import * as React from "react";

//style
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { ItemImage } from "../../styles";
const ItemItem = ({ item }) => {
  console.log(item);
  return (
    <>
      <ImageListItem key={item.image}>
        <ItemImage
          src={`${item.image}?w=248&fit=crop&auto=format`}
          srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.name}
          subtitle={item.price}
          sx={{ height: 0.2, width: 1 }}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.name}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    </>
  );
};

export default ItemItem;
