import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";

import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";

const Search = () => {
  const [searchFilters, setsearchFilters] = useState(false);

  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        background="gray.300"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setsearchFilters((prev) => !prev)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" fontWeight="bold" p="4">
        properties {router.query.purpose}
      </Text>
    </Box>
  );
};

export default Search;
