//api 상에는 숫자 또는 영어로 값을 주고 받아서 이 파일을 통해 우리가 원하는 형식으로 바꿔줌
// param은 실제로 api에 전달해줄 값 의미
//title은 css적으로 표현할 것 의미

export const filterType = [
    {
        type: "all",
        param: "all",
        title: "전체"
    },
    {
        type: "gender",
        param: "male",
        title: "남"
    },
    {
        type: "gender",
        param: "female",
        title: "여"
    },
    {
        type: "part",
        param: "pm",
        title: "기획"
    },
    {
        type: "part",
        param: "design",
        title: "디자인"
    },
    {
        type: "part",
        param: "frontend",
        title: "프론트엔드"
    },
    {
        type: "part",
        param: "backend",
        title: "백엔드"
    },
]