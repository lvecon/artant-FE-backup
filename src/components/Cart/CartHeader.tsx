import { Flex, Box, Text } from "@chakra-ui/react";

export default function CartHeader() {
  return (
    <Flex gap="20px">
      <Box width="828px">
        <Box fontSize={"30px"}>
          장바구니에 2개의 상품이 있습니다
          <Flex gap="8px" fontSize="14px" maxW="772px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <mask
                id="mask0_678_13829"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="48"
                height="48"
              >
                <rect width="48" height="48" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_678_13829)">
                <path
                  d="M23.4036 39.8844C23.6652 39.8844 23.9331 39.8254 24.2075 39.7075C24.4818 39.5895 24.7036 39.4459 24.8728 39.2767L40.4652 23.6844C40.9677 23.1818 41.3556 22.6677 41.6286 22.1421C41.9017 21.6165 42.0382 21.0395 42.0382 20.4113C42.0382 19.7754 41.9017 19.1581 41.6286 18.5594C41.3556 17.9607 40.9677 17.4139 40.4652 16.919L32.9652 9.41903C32.4703 8.91647 31.9619 8.54787 31.4402 8.31323C30.9184 8.07863 30.3395 7.96133 29.7036 7.96133C29.0754 7.96133 28.4921 8.07863 27.9536 8.31323C27.4152 8.54787 26.9075 8.91647 26.4305 9.41903L24.6882 11.1613L28.3882 14.8728C28.7857 15.2626 29.0819 15.7062 29.2767 16.2036C29.4716 16.7011 29.569 17.2062 29.569 17.719C29.569 18.76 29.2286 19.6209 28.5479 20.3017C27.8671 20.9825 27.0062 21.3229 25.9652 21.3229C25.4523 21.3229 24.9517 21.2447 24.4632 21.0882C23.9748 20.9318 23.5357 20.6588 23.1459 20.269L19.319 16.4536L10.6844 25.0882C10.4818 25.2908 10.3299 25.5209 10.2286 25.7786C10.1273 26.0363 10.0767 26.2959 10.0767 26.5575C10.0767 27.0293 10.228 27.4184 10.5305 27.7248C10.8331 28.0312 11.2203 28.1844 11.6921 28.1844C11.9536 28.1844 12.2216 28.1254 12.4959 28.0075C12.7703 27.8895 12.9921 27.7459 13.1613 27.5767L19.4998 21.2382L20.9152 22.6536L14.5882 28.9921C14.3857 29.1947 14.2337 29.4248 14.1325 29.6825C14.0312 29.9402 13.9805 30.1998 13.9805 30.4613C13.9805 30.9075 14.1382 31.2882 14.4536 31.6036C14.769 31.919 15.1498 32.0767 15.5959 32.0767C15.8575 32.0767 16.1254 32.0177 16.3998 31.8998C16.6741 31.7818 16.8959 31.6382 17.0652 31.469L23.8652 24.6805L25.2805 26.0959L18.4921 32.8959C18.3152 33.0652 18.1697 33.287 18.0555 33.5613C17.9414 33.8357 17.8844 34.1037 17.8844 34.3652C17.8844 34.8113 18.0421 35.1921 18.3575 35.5075C18.6728 35.8228 19.0536 35.9805 19.4998 35.9805C19.7613 35.9805 20.0209 35.9299 20.2786 35.8286C20.5363 35.7273 20.7665 35.5754 20.969 35.3729L27.769 28.5844L29.1844 29.9998L22.3844 36.7998C22.1818 37.0023 22.0299 37.2453 21.9286 37.5286C21.8274 37.812 21.7767 38.0716 21.7767 38.3075C21.7767 38.7793 21.9427 39.16 22.2748 39.4498C22.6068 39.7395 22.9831 39.8844 23.4036 39.8844ZM23.3921 41.8844C22.3639 41.8844 21.4837 41.5082 20.7517 40.7556C20.0196 40.003 19.6985 39.0742 19.7882 37.969C18.6549 37.9818 17.7113 37.6434 16.9575 36.9536C16.2036 36.2639 15.8459 35.3011 15.8844 34.0652C14.6485 34.078 13.6748 33.7248 12.9632 33.0056C12.2517 32.2864 11.928 31.3383 11.9921 30.1613C10.8792 30.1741 9.94848 29.8613 9.19978 29.2229C8.45105 28.5844 8.07668 27.6959 8.07668 26.5575C8.07668 26.0447 8.17605 25.5312 8.37478 25.0171C8.57348 24.503 8.86771 24.0511 9.25748 23.6613L19.319 13.6113L24.4844 18.7767C24.6536 18.9536 24.8626 19.0991 25.1113 19.2132C25.36 19.3273 25.6408 19.3844 25.9536 19.3844C26.3818 19.3844 26.76 19.235 27.0882 18.9363C27.4164 18.6376 27.5805 18.2485 27.5805 17.769C27.5805 17.4562 27.5235 17.1754 27.4094 16.9267C27.2953 16.678 27.1498 16.469 26.9729 16.2998L20.0921 9.41903C19.5972 8.91647 19.0825 8.54787 18.5479 8.31323C18.0132 8.07863 17.428 7.96133 16.7921 7.96133C16.1639 7.96133 15.5934 8.07863 15.0805 8.31323C14.5677 8.54787 14.06 8.91647 13.5575 9.41903L7.46903 15.519C7.0408 15.9472 6.69463 16.4575 6.43053 17.0498C6.16643 17.6421 6.0267 18.2536 6.01133 18.8844C5.99593 19.3357 6.03438 19.7697 6.12668 20.1863C6.21901 20.603 6.36518 20.9947 6.56518 21.3613L5.04978 22.8767C4.71388 22.3408 4.45105 21.7235 4.26128 21.0248C4.07155 20.326 3.98438 19.6126 3.99978 18.8844C4.01515 17.9767 4.1972 17.1068 4.54593 16.2748C4.89463 15.4427 5.39335 14.7023 6.04208 14.0536L12.0921 8.00363C12.7895 7.31387 13.5273 6.80103 14.3055 6.46513C15.0838 6.12927 15.9254 5.96133 16.8305 5.96133C17.7357 5.96133 18.5709 6.12927 19.3363 6.46513C20.1017 6.80103 20.8293 7.31387 21.519 8.00363L23.2613 9.74593L25.0036 8.00363C25.7011 7.31387 26.4325 6.80103 27.1978 6.46513C27.9632 6.12927 28.7985 5.96133 29.7036 5.96133C30.6088 5.96133 31.4504 6.12927 32.2286 6.46513C33.0068 6.80103 33.7408 7.31387 34.4305 8.00363L41.8806 15.4536C42.5703 16.1434 43.1024 16.9177 43.4767 17.7767C43.8511 18.6357 44.0382 19.5177 44.0382 20.4229C44.0382 21.328 43.8511 22.1632 43.4767 22.9286C43.1024 23.694 42.5703 24.4216 41.8806 25.1113L26.2882 40.6921C25.8729 41.1075 25.4209 41.4101 24.9325 41.5998C24.444 41.7896 23.9305 41.8844 23.3921 41.8844Z"
                  fill="#5365AE"
                />
              </g>
            </svg>
            구매자를 위한 아트앤트의 구매 보호 프로그램으로 자신 있게 구매하고 ,
            드문 경우지만 상품이 도착하지 않거나, 손상된 상태로 도착하거나,
            설명과 다른 경우 전액 환불을 받으세요. 자격 보기
          </Flex>
        </Box>
      </Box>
      <Box maxW="412px" width="412px" height={"100%"}></Box>
    </Flex>
  );
}