const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1" //api url 중 앞의 값들은 똑같고 뒤에만 바뀌니까 베이스 설정해주자

const container = document.getElementById("container");

const option = {
    serviceKey:
      "QeZec0PpMB8wsYzJpzWypBjdEEvtwWLg7nqckYgZTj0gDNI5ijLDFqliClJyNsvb56eVwVUp%2BYG9sA6wo2QBKg%3D%3D",
    numofRows: 5,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
    pageNo: 1
  };

let count = -1;

async function getData(){

    const random = Math.floor(Math.random()*100 + 1); // 페이지넘버 랜덤으로 받아오기 위한 것.

    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${random}&serviceKey=${option.serviceKey}`;//파라미터 쓰려면 끝에 ? 붙이고 시작하면 됨 // 5개의 데이터를 받겠다는 의미.// & 쓰면 다른 변수들도 가져올 수 있다는 것

    count++;

    const fetchData = await fetch(url);
    console.log(fetchData);

    const toJson = await fetchData.json();
    console.log(toJson);

    const datas = await toJson.response.body.items.item; // json을 받아와서 그 안에서 필요한 값들만 .으로 통해통해서 받아오는 것.
    console.log(datas);

    datas.map((data, i)=>{ // 데이터 반복 횟수만큼 i 증가.
        const list = document.createElement('div');
        list.id = 'list';

        const image = document.createElement('img'); // data 찍어보고 대응되는 값 찾아서 원하는 것 찾아와야함.(data.galWebImageUrl 여기에 원하는 src 값 찍혀있었음)
        image.src = data.galWebImageUrl;

        const info = document.createElement('span'); // 글자 넣을 태그임. // 데이터 호출 할 때마다 5개씩 증가해서 5*count한다.
        info.innerText = `
        ${i+1 + 5*count}번째 사진
        제목 : ${data.galTitle}
        장소 : ${data.galPhotographyLocation}`; // 변수값을 중간에 넣어야 하면 백틱 `` 넣음

        const button = document.createElement('button');
        button.innerText = "더보기";

        list.appendChild(image);
        list.appendChild(info);
        list.appendChild(button);

        container.appendChild(list);
    });
}