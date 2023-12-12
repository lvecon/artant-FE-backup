import { Flex, Text, Wrap } from "@chakra-ui/react";
import PdpCard from "../commons/Card/PdpCard";
import SimilarProductCard from "../commons/Card/SimilarProductCard";
import { useQueries, useQuery } from "@tanstack/react-query";
import CardSmall from "../commons/Card/CardSmall";
import { getRecentlyViewedProducts } from "../../services/userService";

interface Product {
  pk: number;
  name: string;
  original_price: number;
  rating: number;
  rating_count: number;
  price: number;
  thumbnail: string; // Adjust this according to your API response
  category: string;
  shop_name: string;
  is_best_seller: boolean;
  is_star_seller: boolean;
  free_shipping: boolean;
  is_liked: boolean;
}

export default function SimilarItemFive({ title }) {
  const { isLoading, data } = useQuery(
    ["RecentlyViewedProducts"],
    getRecentlyViewedProducts
  );

  return (
    <Flex
      flexDirection={"column"}
      gap={"20px"}
      alignItems={"flex-start"}
      width={"1280px"}
    >
      <Text fontSize={"24px"} fontWeight={"500"}>
        {title}
      </Text>
      {isLoading || !data ? null : (
        <Wrap spacing={"20px"} spacingY={"120px"}>
          {data.slice(0, 5).map((art: Product, index) => (
            <PdpCard
              pk={art.pk}
              source={art.thumbnail}
              title={art.name}
              description=""
              artist={art.shop_name}
              price={art.price}
              originalPrice={art.original_price}
              free_shipping={art.free_shipping}
              is_best_seller={art.is_best_seller}
              is_liked={art.is_liked}
              key={index}
            />
          ))}
        </Wrap>
      )}
      {/* <Flex gap={"40px"} flexWrap={"wrap"}>
        {arts.map((art, index) => (
          <SimilarProductCard
            pk={art.pk}
            source={art.source}
            title={art.title}
            description={art.description}
            artist={art.artist}
            price={art.price}
            originalPrice={art.originalPrice}
            free_shipping={art.free_shipping}
            is_best_seller={art.is_best_seller}
            is_liked={art.is_liked}
            key={index}
          />
        ))}
      </Flex> */}
    </Flex>
  );
}
