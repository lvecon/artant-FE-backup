import { Box } from "@chakra-ui/react";
import PaymentHeader from "../components/Payment/PaymentHeader";
import PaymentBody from "../components/Payment/PaymentBody";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
        gap={10}
        px={40}
        mt={"32px"}
        mb={"120px"}
      >
        <PaymentHeader />
        <PaymentBody data={data && data} />
      </Box>
    </Box>
  );
}
