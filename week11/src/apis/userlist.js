import axios from "axios";

// UserFilter를 통해 요청을 보내는 함수
export const baseURL = "https://gominzipsession.o-r.kr";

// 전체에서 페이지별로 불러오는 것 의미
// 페이지 1-6까지 호출하는 것임
// 대부분의 response는 헤더와 데이터로 구성. -> 우리가 원하는 값은 보통 data
export const getPerPage = async(page) => {
    const response = await axios.get(`${baseURL}/lionlist?page=${page}`);
    return response.data;
}

export const getGenderUser = async(gender) => {
    const response = await axios.get(`${baseURL}/lionlist?gender=${gender}`);
    return response.data;
}

export const getPartUser = async(part) => {
    const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
    return response.data;
}