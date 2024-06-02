import React, {useState} from 'react'
import styled from 'styled-components'
import UserFilter from '../components/user/UserFilter'
import UserSection from '../components/user/UserSection'
import PageSelection from '../components/user/PageSelection'

const UserInfo = () => {
    // api response값을 부모 컨테이너인 UserInfo 에서 불러와야 그 자식 컴포넌트인 UserFilter, UserSection 모두에서 사용 가능함!!
    // 이때 부모 컴포넌트에서 props로 자식 컴포넌트로 정보 넘겨주면 해결 가능
    // userData는 받아온 정보를 담고있는 변수 / setUserData는 userData가 바뀌도록 하는 트리거
    const [userData, setUserData] = useState([]);
    // 페이지 정보를 넘기는 것.
    const [curPage, setCurPage] = useState(); //initial value === undefined // 초기값을 지정안했음
    const [filter, setFilter] = useState(); //색상 넣을 때 얘 이용하세요~
  return (
    //부모태그는 항상 Layout
    //<h1>은 자식 태그
    //오렌지색 박스가 ContentBox
    // UserFilter와 UserCard는 각각의 새로운 컴포넌트로 호출
    // 각 컴포넌트에 필요한 데이터를 넘겨줌 / ex) setUserData = {setUserData} / 이 이후 해당 컴포넌트 js파일로 가서 props지정해줘야함.
    <MainLayout>
        <h1>🦁12기 아기사자 리스트🦁</h1>
        <ContentBox>
            <UserFilter 
            setFilter={setFilter}
            filter={filter}
            setUserData={setUserData}
            setCurPage={setCurPage} />
            <UserSection userData={userData} />
            {filter === "all" && <PageSelection  // filter값이 all인 경우에만 하단에 페이지 넘버 출력되도록 하는 것. / &&연산자를 통해 앞의 조건이 충족된 경우에만 실행되도록 함
            curPage={curPage}
            setUserData={setUserData}
            setCurPage={setCurPage} />}
        </ContentBox>
    </MainLayout>
  )
}

export default UserInfo

// styled-componant로 레이아웃이랑 컨텐트 박스 만들기
const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    // 안쪽에 h1 제목을 넣어줄 것임
    // 메인 레이아웃 아래에 있는 것들은 & >로 표현가능
    & > h1{
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 1rem;
    border: 5px solid #ff7710;
`