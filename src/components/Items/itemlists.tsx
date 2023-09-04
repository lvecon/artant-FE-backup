import { Box, Button, ButtonGroup, Grid, HStack, Text } from "@chakra-ui/react";
import ArtPiece from "../commons/Card/ArtPiece";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import CustomSelect from "./CustomSelect";
import DrawerFilter from "./Drawer/DrawerFilter";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getProductsParameter } from "../../api";
import PaginationController from "../commons/PaginationController";

interface IProduct {
  pk: number;
  name: string;
  original_price: number;
  rating: number;
  rating_count: number;
  price: number;
  thumbnail: string; // Adjust this according to your API response
  category: string;
  shop_name: string;
  free_shipping: boolean;
  is_best_seller: boolean;
  is_liked: boolean;
}

export default function Itemlists() {
  const [itemCount, setItemCount] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState("추천순");
  const handleSelectionChange = (value: string) => {
    setSelectedValue(value);
    console.log(selectedValue);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { category } = useParams();

  const stringParam = useParams();

  console.log(location.search.substring(1));

  const { isLoading, data } = useQuery(
    [
      encodeURIComponent(category!),
      location.search.substring(1),
      selectedValue,
    ],
    getProductsParameter
  );

  return (
    <Box
      px={{
        base: 10,
        lg: 40,
      }}
      marginTop={"60px"}
    >
      <Text
        color="#000"
        fontFamily="Spoqa Han Sans Neo"
        fontSize="30px"
        fontStyle="normal"
        fontWeight={400}
        lineHeight="normal"
        letterSpacing="-1px"
        textTransform="capitalize"
        textAlign={"center"}
      >
        {stringParam["category"]}
      </Text>
      <HStack
        justifyContent={"right"}
        spacing={"2px"}
        borderBottomWidth={"2px"}
        borderBottomColor={"#000"}
      >
        {isLoading ? (
          <Text
            color="#FF5B59"
            textAlign={"right"}
            fontFamily="Spoqa Han Sans Neo"
            fontSize="14px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="normal"
            letterSpacing="-1px"
            textTransform="capitalize"
            marginTop={"-12px"}
            marginRight={0}
            marginBottom={"21px"}
          >
            0
          </Text>
        ) : (
          <Text
            color="#FF5B59"
            textAlign={"right"}
            fontFamily="Spoqa Han Sans Neo"
            fontSize="14px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="normal"
            letterSpacing="-1px"
            textTransform="capitalize"
            marginTop={"-12px"}
            marginRight={0}
            marginBottom={"21px"}
          >
            {data["total_count"].toLocaleString()}
          </Text>
        )}

        <Text
          color="#000"
          textAlign={"right"}
          fontFamily="Spoqa Han Sans Neo"
          fontSize="14px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          letterSpacing="-1px"
          textTransform="capitalize"
          marginTop={"-12px"}
          marginLeft={0}
          marginBottom={"21px"}
        >
          개의 상품이 있습니다
        </Text>
      </HStack>
      <HStack marginTop={"20px"} justifyContent={"space-between"}>
        <DrawerFilter />
        <div>
          <CustomSelect onSelectionChange={handleSelectionChange} />
        </div>
      </HStack>

      {isLoading ? (
        <Box />
      ) : (
        <>
          <Grid
            mt={10}
            columnGap={4}
            rowGap={8}
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
          >
            {data["products"].map((art: IProduct, index) => (
              <ArtPiece
                pk={art.pk}
                source={art.thumbnail}
                category={art.category}
                title={art.name}
                description={""}
                artist={art.shop_name}
                star={art.rating}
                reviews={art.rating_count}
                price={art.price}
                originalPrice={art.original_price}
                free_shipping={art.free_shipping}
                is_best_seller={art.is_best_seller}
                is_liked={art.is_liked}
                key={art.name}
              />
            ))}
          </Grid>
          <PaginationController
            itemCount={data["total_count"]}
            pagination={40}
          />
        </>
      )}
    </Box>
  );
}

const optionStyle = {
  fontFamily: "Spoqa Han Sans Neo",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "-0.3px",
  /* Add any additional text styles here */
};
