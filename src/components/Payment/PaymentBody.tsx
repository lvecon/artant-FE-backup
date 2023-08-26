import {
  Box,
  Button,
  Checkbox,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import CartComponent from "../Cart/CartComponent";
import CartPanel from "../Cart/CartPanel";
import PaymentPanel from "./PaymentPanel";
import ReceiverInfo from "./ReceiverInfo";
import ProductInfo from "./ProductInfo";
import DiscountInfo from "./DiscountInfo";
import PointInfo from "./PointInfo";
import PayInfo from "./PayInfo";

export default function PaymentBody() {
  return (
    <Flex gap="40px" marginBottom={"40px"}>
      <Box width="828px">
        <Flex flexDirection={"column"} gap="40px" alignSelf={"stretch"}>
          <ReceiverInfo />
          <ProductInfo />
          <DiscountInfo />
          <PointInfo />
          <PayInfo />
        </Flex>
      </Box>
      <PaymentPanel />
    </Flex>
  );
}