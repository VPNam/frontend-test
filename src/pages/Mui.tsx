import { Box, Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Mui = () => {
  const [options, setOptions] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const handleChange = (event: any, newValue: any) => {
    console.log("e", event.target.value);
    console.log("newValue", newValue);
  };
  const handleInputChange = (event: any, newValue: any) => {
    setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
    console.log("e", event.target.value);
    console.log("newValue", newValue);
  };
  useEffect(() => {
    (async () => {
      if (search !== "") {
        const data = await axios.get(`http://localhost:3333/posts?q=${search}`);
        setOptions(
          data?.data?.map((item: any) => ({ id: item.id, label: item.title }))
        );
      }
    })();
  }, [search]);

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        onChange={handleChange}
        onInputChange={handleInputChange}
      />
    </Box>
  );
};
export default Mui;
