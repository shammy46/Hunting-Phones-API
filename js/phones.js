const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);

}

const displayPhones = (phones,isShowAll) => {

    const phoneContainer = document.getElementById('phone-container');
    //clear phone container before searching and adding cards
    phoneContainer.textContent = '';
    console.log(phones.length);

    const showAllContainer = document.getElementById('show-all-container');

    if (phones.length > 12 && !isShowAll ) {

        showAllContainer.classList.remove('hidden');
        phones = phones.slice(0, 12);
       
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    
        

   


    phones.forEach(phone => {
        console.log(phone);


        const phoneCard = document.createElement('div');
        phoneCard.classList = `card  bg-base-100 p-4 shadow-xl`;

        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        `;

        phoneContainer.appendChild(phoneCard);
    });

    toggleLoadingSpinner(false);
}

//handle search button
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText,isShowAll);
}

//toggle loading spinner

const toggleLoadingSpinner = (isloading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isloading) {
        loadingSpinner.classList.remove('hidden');

    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}


//handle show all
const handleShowAll= (isShowAll)=>{
    handleSearch(true);
}
