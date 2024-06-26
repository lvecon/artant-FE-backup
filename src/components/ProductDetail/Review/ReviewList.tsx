import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import StarRating from "../../commons/StarRating";
import ReviewItem from "./ReviewItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewPhotos from "./ReviewPhotos";
import PaginationController from "../../commons/PaginationController";
import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../../services/productService";

interface IReview {
  user: {
    name: string;
    avatar: string;
  };
  product_name: string;
  content: string;
  rating: number;
  created_at: string;
  rating_item_quality: number | null;
  rating_shipping: number | null;
  rating_customer_servie: number | null;
  images: string[];
  reply: {
    name: string;
    avatar: string;
    created_at: string;
  } | null;
}

const options = {
  relevance: "추천순",
  created_at: "최신순",
};

export default function ReviewList() {
  const [selectedOption, setSelectedOption] = useState("relevance");
  const [page, setPage] = useState(1);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const { pk } = useParams();

  const { isLoading, data } = useQuery([pk, page, selectedOption], getReviews);

  const handlePageChange = (event, value) => {
    setPage(value); // Update the page when the user changes it
  };

  console.log("데이터", data);
  console.log(data?.length);

  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <Menu>
          <MenuButton
            as={Button}
            width="162px"
            colorScheme="white"
            rightIcon={<FaChevronDown />}
            color="#666"
            textAlign="right"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            letterSpacing="-0.3px"
            textTransform="capitalize"
          >
            정렬 기준 : {options[selectedOption]}
          </MenuButton>
          <MenuList minWidth="120px" marginLeft={"30px"}>
            {Object.keys(options).map((optionKey) => (
              <MenuItem
                key={optionKey}
                color="#666"
                textAlign="right"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                letterSpacing="-0.3px"
                textTransform="capitalize"
                onClick={() => setSelectedOption(optionKey)}
                onMouseEnter={() => setHoveredOption(optionKey)}
                onMouseLeave={() => setHoveredOption(null)}
                bg={
                  (selectedOption === optionKey && hoveredOption === null) ||
                  hoveredOption === optionKey
                    ? "gray.200"
                    : "transparent"
                }
              >
                <span>{options[optionKey]}</span>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      {isLoading ? null : (
        <>
          {/* {data.reviews.length == 0 ? ( */}
          {true ? (
            <Box padding={"40px"} textAlign={"center"}>
              <Text>리뷰 없음</Text>
            </Box>
          ) : (
            <>
              {data["reviews"].map((review: IReview, index) => (
                <ReviewItem review={review} key={index} />
              ))}

              <PaginationController
                page={page}
                itemCount={data ? data.total_count : 0}
                pagination={5}
                handleChange={handlePageChange}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
