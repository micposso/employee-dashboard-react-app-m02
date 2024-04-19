import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";


export default function MediaCard({ data }) {
  console.log(data);
  return (
    <Card sx={{ maxWidth: 345, padding: 2 }}>
      <Box>
        <CardMedia
          sx={{
            height: 240,
            width: 240,
            backgroundSize: "contain",
            margin: "auto",
          }}
          image={`/employee-dashboard-react-app-m02/${data[0].image}`}
          title="profile image"
        />
      </Box>

      <CardContent>
        <EmojiNatureIcon />
        <Typography gutterBottom variant="h5" component="div">
          {data[0].firstName} {data[0].lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Deparment: {data[0].department}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Position: {data[0].position}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ marginTop: 2, justifyContent: "center" }}
        >
          <Chip label={data[0].skills[0]} />
          <Chip label={data[0].skills[0]} />
          <Chip label={data[0].skills[0]} />
        </Stack>
      </CardContent>
      <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
        <Chip label="Active" variant="outlined" />
        <Chip label="Hours: 20" variant="outlined" />
      </Stack>
    </Card>
  );
}
