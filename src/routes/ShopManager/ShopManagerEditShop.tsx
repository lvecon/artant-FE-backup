import {
  Button,
  Flex,
  Text,
  Divider,
  Box,
  SkeletonCircle,
  SkeletonText,
  useToast,
} from "@chakra-ui/react";
import BlackButton from "../../components/commons/Button/BlackButton";
import { useEffect, useState } from "react";
import useUser from "../../lib/useUser";
import { useQuery } from "@tanstack/react-query";
import EditAnnouncement from "../../components/ShopManager/EditShop/EditAnnouncement";
import { PlusSVG } from "../../components/ShopManager/EditShop/Svg";
import EditAvatar from "../../components/ShopManager/EditShop/EditAvatar";
import EditArt from "../../components/ShopManager/EditShop/EditArt";
import EditBackgroundImg from "../../components/ShopManager/EditShop/EditBackgroundImg";
import EditShopContents from "../../components/ShopManager/EditShop/EditShopContents";
import { getShopDetails, updateShop } from "../../services/shopService";

interface ISection {
  id: number | null;
  title: string;
  product_count: number;
}

interface IImages {
  id: number | null;
  url: string;
  file: File | null;
  existed: boolean;
}

export default function ShopManagerEditShop() {
  const { userLoading, isLoggedIn, user } = useUser();
  const toast = useToast();

  const [shopPK, setShopPK] = useState();

  useEffect(() => {
    if (!userLoading) {
      setShopPK(user?.shop.pk);
    }
  }, [user]);

  const { isLoading, data } = useQuery(["shop", shopPK], getShopDetails);
  const [shortDescription, setShortDescription] = useState();
  const [announcement, setAnnouncement] = useState();
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState<ISection[]>([]);
  const [images, setImages] = useState<IImages[]>([]);

  const handleCreateSection = async () => {
    try {
      const sectionData = sections.map((section) => ({
        id: section.id ?? null,
        title: section.title,
      }));
      console.log(sectionData);
      const response = await updateShop(shopPK, {
        sections_input: sectionData,
      });

      // Handle any additional logic after successful creation
    } catch (error) {
      console.error("Error creating section:", error);
    }
  };

  const resetImages = () => {
    if (data?.images) {
      const newImages = data.images.map((item) => ({
        id: item.id,
        url: item.image,
        file: null,
        existed: true,
      }));
      setImages(newImages);
    }
  };

  useEffect(() => {
    console.log(data);
    setAnnouncement(data?.announcement ?? "");
    setShortDescription(data?.short_description ?? "");
    setDescriptionTitle(data?.description_title ?? "");
    setDescription(data?.description ?? "");
    setSections(data?.featured_sections ?? []);
    resetImages();
  }, [data]);

  return (
    <Flex flexDirection={"column"} gap={"24px"}>
      <Flex
        flexDirection={"column"}
        width={"1340px"}
        padding={"32px 0px 0px 60px"}
        alignItems={"center"}
        gap={"24px"}
        alignSelf={"stretch"}
      >
        <Flex
          width={"max"}
          alignSelf={"stretch"}
          fontSize={"22px"}
          fontWeight={"500"}
          paddingBottom={"24px"}
          borderBottom={"2px"}
        >
          <Text alignSelf={"stretch"} width={"1280px"}>
            스토어 설정
          </Text>
        </Flex>
        <Flex flexDirection={"column"} gap={"36px"}>
          <Flex
            flexDirection={"column"}
            gap={"30px"}
            alignItems={"center"}
            alignSelf={"stretch"}
          >
            <Flex flexDirection={"column"} gap={"30px"} alignSelf={"stretch"}>
              {data && user && (
                <EditBackgroundImg
                  shop_pk={user.shop.pk}
                  background_pic={data.background_pic}
                />
              )}
              {data && user ? (
                <EditAvatar
                  shop_name={data.shop_name}
                  shortDescription={shortDescription}
                  setShortDescription={setShortDescription}
                  shop_pk={user.shop.pk}
                  shop_avatar={data.avatar}
                />
              ) : (
                <Box padding="6" boxShadow="lg" bg="white">
                  <SkeletonCircle size="10" />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </Box>
              )}

              <Divider />
              <EditAnnouncement
                announcement={announcement}
                setAnnouncement={setAnnouncement}
                shop_pk={user && user.shop.pk}
              />
              <Divider />
              <EditArt
                common_sections={data ? data.common_sections : []}
                sections={sections}
                setSections={setSections}
                createSection={handleCreateSection}
              />
              <Divider />
              <Flex gap={"30px"} flexDirection={"column"}>
                {data && (
                  <EditShopContents
                    shop_pk={user && user.shop.pk}
                    data={data}
                    descriptionTitle={descriptionTitle}
                    setDescriptionTitle={setDescriptionTitle}
                    description={description}
                    setDescription={setDescription}
                    images={images}
                    setImages={setImages}
                    resetImages={resetImages}
                  />
                )}

                <Divider />
                <Flex flexDirection={"column"}>
                  <Flex>
                    <Text width={"352px"} padding={"24px"}>
                      쇼핑 정책
                    </Text>
                    <Text
                      color={"#666"}
                      alignSelf={"stretch"}
                      padding={"24px"}
                      borderBottom={"1px solid #EEE"}
                      width={"928px"}
                    >
                      최종 업데이트 : 2023년 7월 28일
                    </Text>
                  </Flex>
                  <Flex>
                    <Text width={"352px"} padding={"24px"}>
                      상품 정책
                    </Text>
                    <Flex
                      gap={"20px"}
                      width={"928px"}
                      padding={"24px"}
                      borderBottom={"1px solid #EEE"}
                    >
                      <Flex alignSelf={"stretch"} flexDirection={"column"}>
                        <Text>간단한 상점 정책 설정</Text>
                        <Text>
                          몇초만에 매장 정책을 만들 수 있는 빠른 템플릿을 제공해
                          드립니다.
                        </Text>
                      </Flex>
                      <BlackButton
                        title={"지금 사용해보세요"}
                        borderRadius={"100px"}
                        width="min"
                      />
                    </Flex>
                  </Flex>
                  <Flex>
                    <Text width={"352px"} padding={"24px"}>
                      자주 묻는 질문
                    </Text>
                    <Flex gap={"20px"} width={"928px"} padding={"24px"}>
                      <Flex alignSelf={"stretch"} flexDirection={"column"}>
                        <Text>
                          FAQ의 정보는 아트앤트의 정책이나 귀하의 매장 정책
                          이해에 도움이 됩니다.
                        </Text>
                        <Button background={"white"} width={"104px"}>
                          <Flex
                            gap={"2px"}
                            fontWeight={"500"}
                            alignItems={"center"}
                          >
                            <PlusSVG />
                            FAQ 추가
                          </Flex>
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Divider />
                <Flex justifyContent={"space-between"}>
                  <Button border={"1px"} background={"white"}>
                    취소
                  </Button>
                  <Flex gap={"8px"}>
                    <Button border={"1px"} background={"white"}>
                      미리보기
                    </Button>
                    <Button background={"black"} color={"white"}>
                      저장하기
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box height={"120px"} />
    </Flex>
  );
}
