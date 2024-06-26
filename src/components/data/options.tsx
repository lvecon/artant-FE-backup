export const subCategory = [
  "회화",
  "프린트",
  "사진",
  "일러스트레이션",
  "공예",
  "조각",
  "K-아트",
  "혼합미디어",
];

export const subCategoryFilter = [
  "모든작품",
  "회화",
  "프린트",
  "사진",
  "일러스트레이션",
  "공예",
  "조각",
  "K-아트",
  "혼합미디어",
];

export const subsubCategory: Record<string, string[]> = {
  // prettier-ignore
  "회화": [
      "유화",
      "수채화",
      "아크릴",
      "스프레이",
      "혼합기법",
      "잉크",
      "연필&목탄",
      "과슈",
    ],
  // prettier-ignore
  "프린트": [
      "디지털 프린트",
      "영화&음악포스터",
      "판화",
      "질감복원프린트",
    ],
  // prettier-ignore
  "사진": [
      "칼라",
      "모노톤",
    ],
  // prettier-ignore
  "일러스트레이션": [
      "디지털",
      "펜&잉크",
      "파스텔",
      "설계&도면",
      "마커(Marker)",
      "연필&목탄",
    ],
  // prettier-ignore
  "공예": [
      "도예",
      "목공",
      "금속",
      "유리",
      "종이",
      "비즈&보석",
      "가죽",
      "섬유예술",
    ],
  // prettier-ignore
  "조각": [
      "장식품",
      "아트피규어",
    ],
  // prettier-ignore
  "K-아트": [
      "수묵화",
      "서예",
      "웹툰캐릭터",
    ],
  // prettier-ignore
  "혼합미디어": [
      "캔버스",
      "페이퍼 꼴라쥬",
      "모자이크",
      "기타소재"
    ],
};

export const color_options = [
  "화이트",
  "블랙",
  "블루",
  "그린",
  "그레이",
  "오렌지",
  "퍼플",
  "레드",
  "브라운",
  "옐로우",
  "골드",
  "실버",
  "컬러풀",
];

export const color_options_dict = [
  { label: "화이트", value: "white" },
  { label: "블랙", value: "black" },
  { label: "블루", value: "blue" },
  { label: "그린", value: "green" },
  { label: "그레이", value: "gray" },
  { label: "오렌지", value: "orange" },
  { label: "퍼플", value: "purple" },
  { label: "레드", value: "red" },
  { label: "브라운", value: "brown" },
  { label: "옐로우", value: "yellow" },
  { label: "골드", value: "gold" },
  { label: "실버", value: "silver" },
  { label: "컬러풀", value: "colorful" },
];

export const shipping_options = [
  "아트앤트 기프트 카드 허용",
  "선물 포장 가능",
  "사용자 정의 가능 ",
];

export const yearOptions = Array.from(
  { length: new Date().getFullYear() - 1900 + 1 },
  (_, index) => (1900 + index).toString()
);
export const monthOptions = Array.from({ length: 12 }, (_, index) =>
  (index + 1).toString()
);
export const dayOptions = Array.from({ length: 31 }, (_, index) =>
  (index + 1).toString()
);
