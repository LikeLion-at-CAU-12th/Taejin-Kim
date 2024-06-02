// 여기가 카드 관련 파일임.

import React from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'

const UserSection = ({userData}) => {
  return (
    // CardBox는 카드 전체를 담고 있는 것. 따라서 map 이용해서 각 카드 작성
    <UserSecLayout>
        <UserCardBox>{userData.map((data, idx) => 
        <UserCard data={data} />) // UserCardBox에서 map으로 받아온 data가 UserCard의 props가 되어야 함. 그래야 각 카드에서 정보 불러오기 가능
        }</UserCardBox>
    </UserSecLayout>
  )
}

export default UserSection

const UserSecLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: center;
    gap: 2rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

const UserCardBox = styled.div`
    display: grid;
    width: 100%;
    // 3개의 컬럼을 가지게 됨.
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`