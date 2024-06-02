import React from 'react'
import styled from 'styled-components'
import { getPerPage } from '../../apis/userlist'

const PageSelection = ({curPage, setUserData, setCurPage}) => {
    const handleClick = async(page) => {
        const response = await getPerPage(); // 필수과제3관련
        const offset = 5;
        const end = page*offset// 2page에는 6-10
        console.log(page);
        console.log(response);

        setUserData(response.slice(end-5,end));
        setCurPage(page);
    }
  return (
    <SelectionLayout>{[1,2,3,4,5,6].map(
        (val) => 
        <PageBox
        key={val}
        // val이랑 curPage랑 같으면 트루 아니면 false -> 이걸로 아래 styled-components에서 색 표현함.
        $active={val === curPage ? true:false} // $붙이면서 애니메이션으로 표현 가능(그냥 권장사항 - 구분 위한 것) - 눌려져있으면 검정, 아니면 회색으로 표현
        // 페이지 숫자 클릭 할 때마다 새로운 정보 받아와야하니까 handleClick 으로 구현
        onClick={() => handleClick(val)}>
            {val}
        </PageBox>
    )}</SelectionLayout>
  )
}

export default PageSelection

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"}; // 컬러 값을 동적으로 주기위한 로직 // props로 정보 받아옴
    &:hover{
        cursor: pointer;
        color: white;
    }
`