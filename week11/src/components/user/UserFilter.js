import React from 'react'
import styled from 'styled-components'
import { filterType } from '../../constants/filtertype'
import { getGenderUser, getPerPage } from '../../apis/userlist'


//얘가 api 호출함
// {} 언에 있는 것들이 각각의 props
const UserFilter = ({setFilter, setUserData, setCurPage}) => {
    // 필터 각각에 대해 param이 존재.
    // 따라서 type, param을 전달해줌
    const handleClick = async(type, param) => {
        if(type === "all"){
            //response가 axios이니까 await 써줘야 함 - 따라서 async를 꼭 써줘야 함(한 쌍임) -> 이 결과로 위에 async(type, param) 이렇게 된 것.
            const response = await getPerPage(1);
            //response값을 저장하기 위해서 새로운 상태(state)가 필요하다!
            //useState를 이용해서 이 값을 저장해주도록 합시다~~
            setUserData(response);
            // console.log(response);
            setCurPage(1);
        } else if (type === "gender"){
            const response = await getGenderUser(param);
            setUserData(response);
            // console.log(response);

            // 현재 페이지를 초기화하는 로직 - 현재 페이지를 1로 초기화해줌
            setCurPage(1);
        }
        setFilter(param); //다른 값으로도 변경 가능~  // 색상 변경 할때 이거 이용하기.
    }
  return (
    // FilterBox 여러개 복붙할 수도 있지만 이러면 보기 싫으니까 map함수를 이용해서 깔끔하게 해줌
    // .map(data, idx) => 이걸 통해 데이터와 데이터의 순서를 보내게 됨
    // FilterBox 내부에는 {data.title}이 들어가야 표현됨 -> data가 filterType
    // FilterBox가 onClick 된 경우의 동작 -> handleClick함수
    // 이때 함수는 반드시 return 문 위에 작성해야 함.
    <FilterLayout>{filterType.map(
        (data, idx) => 
        <FilterBox
        key={idx}
        onClick={() => handleClick(data.type, data.param)}>{data.title}</FilterBox>
    )}</FilterLayout>
  )
}

export default UserFilter


//styled-component
const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    // 여기 해당 css의 자식컴포넌트들 사이의 간격 의미 - gap
    gap: 2rem;
    // 스크롤바 없애는 코드
    &::-webkit-scrollbar{
        display: none;
    }
`

// 필터 각각의 박스(전체, 남, 여 ...)
const FilterBox = styled.div`
    display: flex;
    padding: 1rem 4rem 1rem 4rem;
    background-color: "#C9C9C9";
    border-radius: 1rem;
    font-size: 3rem;
    // 크기를 옆으로 줄일때 강제 줄바꿈 안되도록 제한하는 것 - white-space
    white-space: nowrap;
    //마우스를 위에 올렸을때 반응 - hover
    &:hover{
        cursor: pointer;
        color: white;
    }
`