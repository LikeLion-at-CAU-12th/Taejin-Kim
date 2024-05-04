//모든 데이터 불러오는 함수
const url = './data/data.json';
const container = document.getElementById('container'); // container 이라는 dom 요소 가져오기

const fetchData = () => {
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

        datas.map((data)=>{ // map은 순회하는 것임(순회하면서 데이터 하나만 가져옴)
            const list = document.createElement('div');
            list.innerHTML = `제 이름은 ${data.name}입니다.
            저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}입니다~`; // dom요소 만든것임

            container.appendChild(list); // 컨테이너 요소에 list 값 넣는것
            console.log(data);
        }) 


    })

}