import { FaStar, FaRegHeart } from "react-icons/fa";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ArtPiece from "../ArtPiece";
import Collection from "../Collection";

const images = [
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
];

export default function CollectionList({ title }) {
  const arts = [
    {
      pk: 1,
      source: "/assets/images/card_image_custom.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 4,
      reviews: 2532,
      price: 100000,
      originalPrice: 200000,
      free_shipping: true,
      is_best_seller: false,
    },
    {
      pk: 2,
      source: "http://localhost:3000/assets/images/card_image_custom-1.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 4,
      reviews: 2532,
      price: 100000,
      originalPrice: 200000,
      free_shipping: true,
      is_best_seller: false,
    },
    {
      pk: 3,
      source: "/assets/images/card_image_custom-2.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 4,
      reviews: 2532,
      price: 100000,
      originalPrice: 200000,
      free_shipping: false,
      is_best_seller: true,
    },
    {
      pk: 4,
      source: "/assets/images/card_image_custom-3.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 2,
      reviews: 2532,
      price: 120000,
      originalPrice: 200000,
      free_shipping: true,
      is_best_seller: true,
    },
  ];
  return (
    <Box my={10} maxW="1216px">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize={"30px"} as="b">
          {title}
        </Text>
        <Button>더 보기</Button>
      </Flex>
      <Box height={"24px"} />

      <Flex width="1216px" justifyContent="space-between">
        {arts.map((art, index) => (
          <Collection images={images} />
        ))}
      </Flex>
    </Box>
  );
}