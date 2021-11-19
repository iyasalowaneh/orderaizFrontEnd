import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//actions
import { createItem } from "../../store/actions/itemActions";
//style
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const AddItem = () => {
  const [item, setItem] = useState({
    name: "",
    price: "",
    cost: "",
    quantity: "",
    image: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createItem(item, history));
  };
  const handleImage = (event) => {
    setItem({ ...item, image: event.target.files[0] });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Item
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Item Name"
                  name="name"
                  autoComplete="name"
                  onChange={handleChange}
                  value={item.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="family-name"
                  onChange={handleChange}
                  value={item.price}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="cost"
                  label="Cost"
                  name="cost"
                  autoComplete="family-name"
                  onChange={handleChange}
                  value={item.cost}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="quantity"
                  label="Quantity"
                  id="quantity"
                  onChange={handleChange}
                  value={item.quantity}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="image"
                  label="Item Image"
                  type="file"
                  id="image"
                  onChange={handleImage}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add{" "}
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddItem;
