//모든 데이터 불러오는 함수

// fetch.js에서 전역변수로 이미 지정했으니까 여기서는 전역변수 다시 지정하면 오류뜸.

const filterData = () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    } // 컨테이너의 첫번째 자식값을 가져오는게 container.firstChild 이다. // 컨테이너의 첫번째 자식값이 있으면 그것을 지움(by .removeChild)
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        console.log(response.frontend); // json으로 변환된 형태가 찍히는 것임. (처음에는 promise로 데이터 잘 받아왔는지만 확인했음.)
        // .frontend를 추가해서 frontend 안에 있는 배열 요소들만 출력하게 함
        const datas = response.frontend;

        datas
        .filter((data)=>data.role == '아기사자')

        .map((data)=>{ // map은 순회하는 것임(순회하면서 데이터 하나만 가져옴) // .은 앞의 datas에 이어지는 것임
            const list = document.createElement('div');
            list.innerHTML = `제 이름은 ${data.name}입니다.
            저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}입니다~`; // dom요소 만든것임

            container.appendChild(list); // 컨테이너 요소에 list 값 넣는것
            console.log(data);
        }) 


    })

}