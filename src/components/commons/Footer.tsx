import { LiaGreaterThanSolid } from "react-icons/lia";

import {
  Box,
  Button,
  HStack,
  IconButton,
  Divider,
  LightMode,
  Spacer,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center" // Center horizontally
      justifyContent="center" // Center vertically
    >
      <Box w="full">
        <HStack
          borderTopWidth={"1px"}
          borderTopColor={"#F1F1F5"}
          borderBottomWidth={"1px"}
          borderBottomColor={"#F1F1F5"}
          py={4}
          my={5}
        >
          <Link to={"/"}>
            <Text fontSize={"14pt"}>회사소개</Text>
          </Link>
          <Divider
            orientation="vertical"
            height="16px"
            borderColor="#D9D9D9"
            mx={2}
          />{" "}
          <Link to={"/"}>
            <Text fontSize={"14pt"}>이용약관</Text>
          </Link>
          <Divider
            orientation="vertical"
            height="16px"
            borderColor="#D9D9D9"
            mx={2}
          />{" "}
          <Link to={"/"}>
            <Text fontSize={"14pt"}>개인정보처리방침</Text>
          </Link>
          <Divider
            orientation="vertical"
            height="16px"
            borderColor="#D9D9D9"
            mx={2}
          />{" "}
          <Link to={"/"}>
            <Text fontSize={"14pt"}>청소년보호방침</Text>
          </Link>
          <Divider
            orientation="vertical"
            height="16px"
            borderColor="#D9D9D9"
            mx={2}
          />{" "}
          <Link to={"/"}>
            <Text fontSize={"14pt"}>광고문의</Text>
          </Link>
        </HStack>
        <Text fontSize={"14pt"} fontWeight={"500"}>
          (주)아트앤트
        </Text>
        <Box width="1280px" height="12px" />
        <Flex justifyContent={"space-between"}>
          <Box>
            <Flex>
              <Text color={"gray"} fontSize={"12pt"} letterSpacing={"-0.3px"}>
                대표이사 서존
              </Text>
              <Divider
                orientation="vertical"
                height="16px"
                borderColor="#D9D9D9"
                mx={2}
              />
              <Text color={"gray"} fontSize={"12pt"} letterSpacing={"-0.3px"}>
                서울특별시 강남구 영동대로 602, 6층 브이208호
              </Text>
              <Divider
                orientation="vertical"
                height="16px"
                borderColor="#D9D9D9"
                mx={2}
              />
              <Text color={"gray"} fontSize={"12pt"} letterSpacing={"-0.3px"}>
                호스팅서비스 사업자: (주)데이터앤트
              </Text>
              <Divider
                orientation="vertical"
                height="16px"
                borderColor="#D9D9D9"
                mx={2}
              />
              <Text color={"gray"} fontSize={"12pt"} letterSpacing={"-0.3px"}>
                사업자등록번호: 835-86-02785
              </Text>
            </Flex>
            <HStack marginBottom={10}>
              <Text color={"gray"} fontSize={"12pt"} letterSpacing={"-0.3px"}>
                통신판매업신고: 2023-서울삼성-0000
              </Text>
              <Divider
                orientation="vertical"
                height="16px"
                borderColor="#D9D9D9"
                mx={2}
              />

              <Text color={"gray"} fontSize={"12pt"} letterSpacing={"-0.3px"}>
                email: help@artant.co.kr
              </Text>
            </HStack>
          </Box>

          <Box>
            <Text fontWeight={"500"} fontSize={"24px"}>
              고객센터 0000-0000
            </Text>{" "}
            <Flex fontSize={"12px"} alignItems={"center"}>
              고객센터 바로가기
              <Box width="4px" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path d="M1 1L5 5L1 9" stroke="black" />
              </svg>
            </Flex>
          </Box>
        </Flex>

        <Text fontSize={"13pt"} marginBottom={3}>
          소비자피해보상
        </Text>
        <Text color={"gray"} fontSize={"12pt"} marginBottom={1}>
          고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
          구매 안전서비스로 소비자 피해보상 보험 서비스를 이용하실 수 있습니다.
        </Text>
        <Text color={"gray"} fontSize={"12pt"} marginBottom={1}>
          본 사이트의 모든 정보, 콘텐츠, UI등에 대한 복제, 전송, 배포, 스크래핑
          등의 행위는 엄격히 금지됩니다.
        </Text>
        <Text color={"gray"} fontSize={"12pt"} marginBottom={1}>
          Copyright ARTANT Inc. All Rights Reserved.
        </Text>
        <Box height={"48px"} />
      </Box>
    </Box>
  );
}
