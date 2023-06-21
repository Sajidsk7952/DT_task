const container=document.querySelector('.beer-box')
const getData=async()=>{
    const data=await fetch('https://api.punkapi.com/v2/beers').then(res=>res.json())
    console.log(data);
    data.forEach(element => {
        createDiv(element)
    });
}
const createDiv=(data)=>{
    const beer=document.createElement('div');
    beer.classList.add('beer-content');
    beer.innerHTML=`<div class='img-box'>
    <img src='${data.image_url}' alt='${data.name}' class='beer-img'></img>
    </div><div class='beer-desc'><h3>${data.name}</h3><p>${data.tagline}</p><p>${data.description}</p></div>`;
    container.appendChild(beer);
}
getData();