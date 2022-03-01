// get search value 
const searchPhone = () => {
    const searchField = document.getElementById('search-result');
    const error = document.getElementById('error');
    const searchText = searchField.value;
    searchField.value = '';
    if (isNaN(searchText) || searchText === "") {
        error.innerText = "no results found";
    }
    // get url data 
    const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))

}
// search result the products
// searchPhone();
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-phone');
    searchResult.innerHTML = '';
    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img class="w-60" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">BRAND:${phone.brand}</h5>
                <p class="card-text">NAME:${phone.phone_name},MODEL: ${phone.slug}</p>
                <p class="card-text">This is the traditional brand of digital world. Communication and technology have been fast and grow with Apple.High tech and powerful chip</p>
                <button onclick="loadPhoneModel('${phone.slug}')" class="btn btn-info text-white">SEE MORE</button>
            </div>
         </div>`;
        searchResult.appendChild(div);
        error.innerText = '';
    })

};
//



const loadPhoneModel = phoneModel => {
    const url = `  
    https://openapi.programming-hero.com/api/phone/${phoneModel}
    `;
    console.log(phoneModel)
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetail(data.data))
}
// show phones detailes and models
const showPhoneDetail = mobile => {
    console.log(mobile);
    const phoneDetails = document.getElementById('phone-details');
    const box = document.createElement('div');
    box.classList.add('card');
    phoneDetails.innerText = '';
    box.innerHTML = `
    <img class="w-50 h-50" src="${mobile.image}"alt="...">
    <div class="card-body bg-dark">
       <h5 class="card-title text-white">${mobile.brand}</h5>
       <p class="card-text text-white">Model:${mobile.slug}</p>
       <p class="card-text text-white">Release Date:${mobile.releaseDate}</p>
       <button onclick="" class="btn btn-info text-white">Explore More</button>
   </div>
    `;
    phoneDetails.appendChild(box);
};
