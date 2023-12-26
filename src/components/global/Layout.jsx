import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

const Layout = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();

  const searchHandler = () => {
    searchParam?.set("q", search);
    setSearchParam(searchParam);
    navigate(`/search/?q=${search}`);
  };

  return (
    <Stack direction="column" spacing={1}>
      <Box
        position="sticky"
        top={0}
        zIndex={99}
        bgColor="var(--chakra-colors-chakra-body-bg)"
        p={5}
      >
        <Stack direction="row" spacing={5} alignItems="center">
          <Box
            cursor="pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            R
          </Box>
          <Box style={{ width: "100%" }}>
            <InputGroup>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                type="search"
                onChange={({ target: { value } }) => {
                  setSearch(value);
                }}
                onKeyUp={(e) => {
                  if (e?.code === "Enter") {
                    searchHandler();
                  }
                }}
              />
            </InputGroup>
          </Box>
        </Stack>
      </Box>
      <Box>{children}</Box>
    </Stack>
  );
};
export default Layout;
