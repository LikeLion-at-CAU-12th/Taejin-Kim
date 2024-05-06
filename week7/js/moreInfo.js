const container2 = document.getElementById("container2");

async function moreData(num){

    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${1}&serviceKey=${option.serviceKey}`;

    const fetchData = await fetch(url);
    console.log(fetchData);

    const toJson = await fetchData.json();
    console.log(toJson);

    const datas = await toJson.response.body.items.item;
    console.log(datas);

    const data = datas[num];
        const list = document.createElement('div');
        list.id = 'list';
        const info = document.createElement('span');
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

const receivedData = location.href.split('?')[1]; // location객체는 현재 페이지 // .href로 현재 페이지 url 가져옴.
moreData(receivedData); // 바로실행
