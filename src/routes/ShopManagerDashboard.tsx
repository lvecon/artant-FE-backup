import { Flex, Text, Box, Select, Wrap, Image } from "@chakra-ui/react";
import ArtPiece from "../components/commons/Card/ArtPiece";
import RecentlyViewed from "../components/RecentlyViewed";
import PdpCard from "../components/commons/Card/PdpCard";
import useUser from "../lib/useUser";
import { useState } from "react";
import { getShopProducts } from "../api";
import { useQuery } from "@tanstack/react-query";

export default function ShopManager() {
  const { userLoading, isLoggedIn, user } = useUser();
  const firstShopPK = user?.shop_pks[0] || null;
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery(
    ["shopProduct", firstShopPK, page],
    getShopProducts
  );

  return (
    <Flex
      padding={"32px 10px 120px 0px"}
      flexDirection={"column"}
      gap={"40px"}
      width={"1340px"}
    >
      <Flex
        minW={"989px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"} gap={"12px"}>
          <Box
            width="60px"
            height="60px"
            background="#F2F2F2"
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"5px"}
            border={
              "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
            }
            display={"flex"}
          >
            <Image
              width={"58px"}
              height={"58px"}
              src={user && user.shop_avatars[0]}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M29.9994 3.33333C30.2892 3.33333 30.568 3.43394 30.7899 3.61503L30.9157 3.73318L36.3695 9.61373L36.4205 9.67856C36.5902 9.90468 36.6667 10.1611 36.6667 10.4129L36.6642 13.6112C36.6642 15.2682 36.0332 16.7778 34.9985 17.913L34.9972 35.4167C34.9972 36.0495 34.527 36.5725 33.9169 36.6553L33.7472 36.6667H6.25139C5.61858 36.6667 5.09558 36.1963 5.01281 35.5863L5.00139 35.4167L5.00009 17.913C4.04499 16.8652 3.43394 15.4982 3.34559 13.9909L3.33449 13.6112L3.33418 10.4849C3.32073 10.2561 3.37014 10.0206 3.49406 9.80521L3.60283 9.64611L3.66813 9.56988L9.08294 3.73318C9.28006 3.52071 9.54351 3.38468 9.82711 3.34524L9.99933 3.33333H29.9994ZM25.1359 17.4035L25.116 17.433C23.9512 18.9907 22.092 19.9988 19.9974 19.9988C17.891 19.9988 16.0227 18.9793 14.8592 17.4068C13.6968 18.9793 11.8285 19.9988 9.72213 19.9988C8.94028 19.9988 8.19124 19.8583 7.49888 19.6013L7.50099 34.165H9.99869L9.99933 22.9183C9.99933 22.2855 10.4696 21.7625 11.0797 21.6798L11.2493 21.6683H18.7425C19.3754 21.6683 19.8984 22.1387 19.9812 22.7487L19.9925 22.9183L19.992 34.165H32.496L32.4964 19.6025C31.805 19.8588 31.057 19.9988 30.2765 19.9988C28.1687 19.9988 26.2994 18.9778 25.1359 17.4035ZM17.491 24.1683H12.4993V34.165H17.491V24.1683ZM28.7572 21.6683C29.39 21.6683 29.913 22.1387 29.9957 22.7487L30.0072 22.9183V28.755C30.0072 29.3878 29.5369 29.9108 28.9269 29.9937L28.7572 30.005H22.9215C22.2887 30.005 21.7657 29.5348 21.6829 28.9247L21.6715 28.755V22.9183C21.6715 22.2855 22.1417 21.7625 22.7519 21.6798L22.9215 21.6683H28.7572ZM27.506 24.1683H24.171V27.505H27.506V24.1683ZM13.6093 11.67H5.83433L5.83449 13.6112L5.84479 13.8963L5.89209 14.2817L5.94666 14.5421L6.02896 14.8288L6.11956 15.0752L6.18736 15.2318C6.23931 15.3449 6.29653 15.4551 6.35869 15.5621L6.53026 15.8312L6.62074 15.9557L6.83536 16.2151L7.07164 16.4553L7.23206 16.5968L7.30221 16.654C7.82643 17.0715 8.46094 17.3563 9.15499 17.4578L9.45594 17.4898L9.72213 17.4988C11.7797 17.4988 13.464 15.9003 13.6008 13.8774L13.6097 13.6112L13.6093 11.67ZM23.8844 11.67H16.1093L16.1097 13.6112C16.1097 15.5794 17.5724 17.206 19.4699 17.4633L19.7312 17.4898L19.9974 17.4988C22.055 17.4988 23.7392 15.9003 23.876 13.8774L23.885 13.6112L23.8844 11.67ZM34.1627 11.67H26.3877L26.3889 13.6112C26.3889 15.5794 27.8515 17.206 29.749 17.4633L30.0104 17.4898L30.2765 17.4988C31.217 17.4988 32.0795 17.1648 32.7519 16.609L32.9015 16.4788L33.0945 16.2893L33.3382 16.0073C33.4282 15.8924 33.512 15.7723 33.5889 15.6475L33.7614 15.3363L33.8662 15.1064L33.9634 14.8479L34.0129 14.6886L34.0767 14.4351L34.1239 14.1725L34.154 13.8946L34.1642 13.6112L34.1627 11.67ZM15.102 5.83166H10.5443L7.44766 9.16999H14.0754L15.102 5.83166ZM22.2804 5.83166H17.717L16.6904 9.16999H23.307L22.2804 5.83166ZM29.4527 5.83166H24.8954L25.922 9.16999H32.5494L29.4527 5.83166Z"
                  fill="#D9D9D9"
                />
              </svg> */}
            </Image>
          </Box>
          <Flex flexDirection={"column"} gap={"6px"}>
            <Text fontSize={"20px"}>
              어서오세요, {user && user.shop_names[0]}샵!
            </Text>
            <Text color="#666" as="u">
              새 목록 만들기
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"flex-end"} gap={"12px"}>
          <Text>artantshop.artant.com</Text>
          <Flex
            width={"36px"}
            height={"36px"}
            background={"black"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"100px"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_987_11200"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_987_11200)">
                <path
                  d="M10.6154 16.0769H7.07692C5.94897 16.0769 4.9875 15.6795 4.1925 14.8848C3.3975 14.09 3 13.1287 3 12.0011C3 10.8734 3.3975 9.91187 4.1925 9.11636C4.9875 8.32084 5.94897 7.92308 7.07692 7.92308H10.6154V8.92308H7.07692C6.23077 8.92308 5.50642 9.22437 4.90385 9.82693C4.30128 10.4295 4 11.1539 4 12C4 12.8462 4.30128 13.5705 4.90385 14.1731C5.50642 14.7756 6.23077 15.0769 7.07692 15.0769H10.6154V16.0769ZM8.5 12.5V11.5H15.5V12.5H8.5ZM13.3846 16.0769V15.0769H16.9231C17.7692 15.0769 18.4936 14.7756 19.0962 14.1731C19.6987 13.5705 20 12.8462 20 12C20 11.1539 19.6987 10.4295 19.0962 9.82693C18.4936 9.22437 17.7692 8.92308 16.9231 8.92308H13.3846V7.92308H16.9231C18.051 7.92308 19.0125 8.32047 19.8075 9.11526C20.6025 9.91006 21 10.8713 21 11.9989C21 13.1266 20.6025 14.0881 19.8075 14.8837C19.0125 15.6792 18.051 16.0769 16.9231 16.0769H13.3846Z"
                  fill="white"
                />
              </g>
            </svg>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"16px"}>
        <Text fontSize={"22px"} fontWeight={"500"}>
          첫판매를 위한 빠른 가이드
        </Text>
        <Flex alignItems={"flex-end"}>
          <Flex
            padding={"24px"}
            gap={"24px"}
            minW={"1340px"}
            maxW={"1340px"}
            flexDirection={"column"}
            border={
              "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
            }
          >
            <Text fontSize={"16px"} fontWeight={"500"}>
              ARTANT의 판매자 교육 전문가가 제공합니다.
            </Text>
            <Flex gap={"24px"} alignItems={"flex-end"} alignSelf={"stretch"}>
              <Flex flexDirection={"column"} gap={"12px"}>
                <Text>
                  • 이 페이지를 북마크에 추가하면 진행 상황을 쉽게 추적할 수
                  있습니다.
                </Text>
                <Text>
                  • 잘 팔리는 멋진 상점를 만드는 방법을 알아보세요. 보너스:
                  사진과 키워드에 대한 팁도 확인하세요.
                </Text>
                <Text>
                  • 리스팅을 더 추가하세요. 리스팅이 많을수록 구매자에게 노출될
                  기회가 많아집니다!
                </Text>
                <Text>
                  • 여러분의 노력을 자랑하세요! 소셜 미디어나 친구들과 상점을
                  공유하세요: ArtAntShop.etsy.com
                </Text>
              </Flex>
              <Flex
                justifyContent={"flex-end"}
                gap={"12px"}
                height={"min"}
                flex={"1 0 0"}
              >
                <Flex
                  padding={"8px 12px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"100px"}
                  as="u"
                >
                  나중에 알림
                </Flex>
                <Flex
                  padding={"8px 12px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"100px"}
                  as="u"
                >
                  다시 보여주지 않기
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"16px"} width={"1340px"}>
        <Flex
          alignSelf={"stretch"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex gap={"16px"} alignSelf={"stretch"}>
            <Text fontSize={"22px"} fontWeight={"500"}>
              다음에 대한 통계 개요
            </Text>
            <Select placeholder="오늘" width={"140px"} height={"40px"}>
              <option value="option1">1월</option>
              <option value="option2">2월</option>
              <option value="option3">3월</option>
            </Select>
          </Flex>
          <Text as="u">자세한 통계 보기</Text>
        </Flex>
        <Flex alignSelf={"stretch"}>
          <StatBox
            title={"총 조회수"}
            number={67}
            percent={10}
            hour={3}
            color={"#5365AE"}
          />
          <StatBox
            title={"방문"}
            number={67}
            percent={10}
            hour={3}
            color={"#B67914"}
          />
          <StatBox
            title={"주문"}
            number={1}
            percent={20}
            hour={7}
            color={"#F12E24"}
          />
          <StatBox
            title={"수익"}
            number={"40,000"}
            percent={16}
            hour={3}
            color={"#9E76BE"}
          />
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"16px"} width={"1340px"}>
        <Text fontSize={"22px"} fontWeight={"500"}>
          상점 체크 리스트
        </Text>
        <Flex
          padding={"40px 0px"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"12px"}
          as="u"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <mask
              id="mask0_987_11265"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="40"
              height="40"
            >
              <rect width="40" height="40" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_987_11265)">
              <path
                d="M20.0013 16.6667H27.6936V15H20.0013V16.6667ZM20.0013 25H27.6936V23.3334H20.0013V25ZM15.0013 17.8846C15.5761 17.8846 16.0617 17.6865 16.4581 17.2901C16.8544 16.8937 17.0526 16.4081 17.0526 15.8334C17.0526 15.2585 16.8544 14.773 16.4581 14.3766C16.0617 13.9802 15.5761 13.7821 15.0013 13.7821C14.4265 13.7821 13.9409 13.9802 13.5446 14.3766C13.1482 14.773 12.95 15.2585 12.95 15.8334C12.95 16.4081 13.1482 16.8937 13.5446 17.2901C13.9409 17.6865 14.4265 17.8846 15.0013 17.8846ZM15.0013 26.218C15.5761 26.218 16.0617 26.0198 16.4581 25.6234C16.8544 25.2271 17.0526 24.7415 17.0526 24.1667C17.0526 23.5919 16.8544 23.1063 16.4581 22.7099C16.0617 22.3136 15.5761 22.1154 15.0013 22.1154C14.4265 22.1154 13.9409 22.3136 13.5446 22.7099C13.1482 23.1063 12.95 23.5919 12.95 24.1667C12.95 24.7415 13.1482 25.2271 13.5446 25.6234C13.9409 26.0198 14.4265 26.218 15.0013 26.218ZM9.36026 33.3334C8.59318 33.3334 7.95269 33.0764 7.4388 32.5625C6.92491 32.0486 6.66797 31.4081 6.66797 30.6411V9.35898C6.66797 8.59189 6.92491 7.95141 7.4388 7.43752C7.95269 6.92363 8.59318 6.66669 9.36026 6.66669H30.6423C31.4094 6.66669 32.0499 6.92363 32.5638 7.43752C33.0777 7.95141 33.3346 8.59189 33.3346 9.35898V30.6411C33.3346 31.4081 33.0777 32.0486 32.5638 32.5625C32.0499 33.0764 31.4094 33.3334 30.6423 33.3334H9.36026ZM9.36026 31.6667H30.6423C30.8987 31.6667 31.1338 31.5599 31.3475 31.3462C31.5611 31.1325 31.668 30.8975 31.668 30.6411V9.35898C31.668 9.10259 31.5611 8.86755 31.3475 8.65385C31.1338 8.44019 30.8987 8.33335 30.6423 8.33335H9.36026C9.10387 8.33335 8.86883 8.44019 8.65514 8.65385C8.44147 8.86755 8.33464 9.10259 8.33464 9.35898V30.6411C8.33464 30.8975 8.44147 31.1325 8.65514 31.3462C8.86883 31.5599 9.10387 31.6667 9.36026 31.6667Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          지금 당장 해야 할 일은 없습니다.
        </Flex>
        <Flex flexDirection={"column"} gap={"-1px"} alignSelf={"stretch"}>
          <CheckButton title={"목록"} text={"모든 목록 보기"} type={true} />
          <CheckButton title={"활성 목록"} text={2} />
          <CheckButton title={"만료"} text={1} />
          <CheckButton title={"품절"} text={1} />
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"16px"}>
        <Text fontSize={"22px"} fontWeight={"500"}>
          최근 활동
        </Text>
        <Wrap gap={"40px"}>
          <Wrap spacing={"56.5px"}>
            {data &&
              data.products.slice(0, 4).map((art, index) => (
                <Flex flexDirection={"column"} alignItems={"flex-start"}>
                  <Image
                    objectFit={"cover"}
                    width={"290px"}
                    height={"247px"}
                    src={art["thumbnail"]}
                  />
                  <Flex
                    width={"290px"}
                    padding={"10px 0px 8px 8px"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"12px"}
                  >
                    {" "}
                    <Flex
                      alignSelf={"stretch"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                      gap={"5px"}
                    >
                      {" "}
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        fontFamily="Spoqa Han Sans Neo"
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="normal"
                        textTransform="capitalize"
                      >
                        [{art["category"]}]
                      </Text>
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        fontFamily="Spoqa Han Sans Neo"
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="130%" /* 이렇게 설정하면 18.2px로 계산됩니다. */
                        letterSpacing="0.035px"
                        textTransform="capitalize"
                        noOfLines={2}
                      >
                        {art["name"]} - {art["shop_name"]} 작가
                      </Text>
                    </Flex>
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="18px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="normal"
                      letterSpacing="-0.3px"
                    >
                      {art["price"].toLocaleString()}원
                    </Text>
                  </Flex>
                </Flex>
              ))}
          </Wrap>
        </Wrap>
      </Flex>
    </Flex>
  );
}

function StatBox({ title, number, percent, hour, color }) {
  return (
    <Flex
      padding={"24px"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"24px"}
      flex={"1 0 0"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      {title}
      <Flex flexDirection={"column"} alignItems={"center"} gap={"24px"}>
        <Flex
          gap={"6px"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={"center"}
        >
          <Text fontSize={"66px"} fontWeight={"700"} color={color}>
            {number}
          </Text>
          <Text fontSize={"12px"} color={"#666"}>
            {percent}%
          </Text>
        </Flex>
        <Flex
          gap={"2px"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={"12px"}
          color={"#666"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <mask
              id="mask0_987_11228"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="16"
            >
              <rect x="0.875" width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_987_11228)">
              <path
                d="M11.3058 10.9026L11.7776 10.4308L9.20833 7.86123V4.66667H8.54167V8.13847L11.3058 10.9026ZM8.87723 14C8.04753 14 7.26748 13.8426 6.53707 13.5277C5.80666 13.2128 5.17129 12.7855 4.63098 12.2457C4.09068 11.7059 3.66294 11.0711 3.34777 10.3414C3.03259 9.61163 2.875 8.83192 2.875 8.00223C2.875 7.17253 3.03244 6.39248 3.34732 5.66207C3.66221 4.93166 4.08955 4.29629 4.62935 3.75598C5.16915 3.21568 5.80391 2.78794 6.53363 2.47277C7.26337 2.15759 8.04308 2 8.87277 2C9.70247 2 10.4825 2.15744 11.2129 2.47232C11.9433 2.78721 12.5787 3.21455 13.119 3.75435C13.6593 4.29415 14.0871 4.92891 14.4022 5.65863C14.7174 6.38837 14.875 7.16808 14.875 7.99777C14.875 8.82747 14.7176 9.60752 14.4027 10.3379C14.0878 11.0683 13.6605 11.7037 13.1207 12.244C12.5809 12.7843 11.9461 13.2121 11.2164 13.5272C10.4866 13.8424 9.70692 14 8.87723 14ZM8.875 13.3333C10.3528 13.3333 11.6111 12.8139 12.65 11.775C13.6889 10.7361 14.2083 9.47778 14.2083 8C14.2083 6.52222 13.6889 5.26389 12.65 4.225C11.6111 3.18611 10.3528 2.66667 8.875 2.66667C7.39722 2.66667 6.13889 3.18611 5.1 4.225C4.06111 5.26389 3.54167 6.52222 3.54167 8C3.54167 9.47778 4.06111 10.7361 5.1 11.775C6.13889 12.8139 7.39722 13.3333 8.875 13.3333Z"
                fill="#777777"
              />
            </g>
          </svg>{" "}
          {hour}시간 전
        </Flex>
      </Flex>
    </Flex>
  );
}

function CheckButton({ title, text, type = false }) {
  return (
    <Flex flexDirection={"column"} gap={"-1px"} alignSelf={"stretch"}>
      <Flex
        padding={"16px 24px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        alignSelf={"stretch"}
        border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
      >
        <Text>{title}</Text>
        {type ? <Text as="u">{text}</Text> : <Text as="u">{text}</Text>}
      </Flex>
    </Flex>
  );
}
