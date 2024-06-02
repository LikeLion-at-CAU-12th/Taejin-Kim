const container2 = document.getElementById("container2");

async function moreData(num){

    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${1}&serviceKey=${option.serviceKey}`;//파라미터 쓰려면 끝에 ? 붙이고 시작하면 됨 // 5개의 데이터를 받겠다는 의미.// & 쓰면 다른 변수들도 가져올 수 있다는 것

    const fetchData = await fetch(url);
    console.log(fetchData);

    const toJson = await fetchData.json();
    console.log(toJson);

    const datas = await toJson.response.body.items.item; // json을 받아와서 그 안에서 필요한 값들만 .으로 통해통해서 받아오는 것.
    console.log(datas);

    const data = datas[num];
        const list = document.createElement('div');
        list.id = 'list';
        const info = document.createElement('span'); // 글자 넣을 태그임. // 데이터 호출 할 때마다 5개씩 증가해서 5*count한다.
        info.innerText = `
        촬영날짜 : ${parsing(data.galCreatedtime)}
        촬영자 : ${data.galPhotographer}
        검색키워드 : ${data.galSearchKeyword}`

        list.appendChild(info);

        container2.appendChild(list);
}

function parsing(str) {
    let result = [];
    for (let i = 0; i < str.length; i +=2) {
        result.push(str.slice(i, i + 2));
    }
    return result[1]+'/'+result[2]+'/'+result[3];
}

if (document.title === "moreInfo0"){
    moreData(0);
}else if (document.title === "moreInfo1"){
    moreData(1);
}else if (document.title === "moreInfo2"){
    moreData(2);
}else if (document.title === "moreInfo3"){
    moreData(3);
}else if (document.title === "moreInfo4"){
    moreData(4);
}
