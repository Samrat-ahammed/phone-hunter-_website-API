// // 1. data load 
// // 2. show data on display 

const loadPhon = async (searchText ,isShowAll) => {
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
const data = await res.json();
const phons = data.data
displayPhons(phons ,isShowAll)

// if(searchText=== res){
//   displayPhons(phons ,isShowAll)
// }else{
//   alert('no phon');
// }
// console.log(phons);

}

const displayPhons = (phons, isShowAll) => {

    const phonContainer = document.getElementById('phone-container');
    phonContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container');
    if(phons.length > 12 && !isShowAll){
       showAllContainer.classList.remove('hidden');
    }else{
      showAllContainer.classList.add('hidden');
    }
   if(!isShowAll){
    phons = phons.slice(0,12);
   }

    phons.forEach(phon => {
        console.log(phon);
        const phonCard = document.createElement('div');
        phonCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        phonCard.innerHTML = `
        <figure>
        <img
          src="${phon.image}"
          alt="phone"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phon.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-center">
          <button onclick="handleShowDDetail('${phon.slug}')" class="btn btn-primary">Show details</button>
        </div>
      </div>
        `;
        phonContainer.appendChild(phonCard);
    });
    toggle(false);
}


const handleSearch = (isShowAll)=>{
  toggle(true);
const searchField = document.getElementById('search-field');
 const searchText = searchField.value;
 console.log(searchText)
 loadPhon(searchText, isShowAll);
}

const toggle = (isLoading)=> {
  const loadingSpinner = document.getElementById('loading-spinner');
if(isLoading){
  loadingSpinner.classList.remove('hidden');
}
else{
  loadingSpinner.classList.add('hidden');

}
}

const handleShowAll = ()=>{
  handleSearch(true);
}


// show all handle 
const handleShowDDetail =async (id) => {
// load single data
const res = await fetch (`https://openapi.programming-hero.com/api/phone/${id}`)
const data = await res.json();
const phon = data.data;
showPhonDetails(phon);
}


const showPhonDetails = (phon)=>{
  console.log(phon);
  const phonName = document.getElementById('phon-name');
  phonName.innerText = phon.name;

  const showDetailsContainer = document.getElementById('show-detail-container');
  showDetailsContainer.innerHTML = `
  <img
  src="${phon.image}"
  alt="phone"
/>
<p><span>${phon?.mainFeatures?.storage}</span> </p>
  `;
 

  show_detail_Model.showModal();
}

loadPhon();



// const loadData = async  (searchText) => {

//  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
//  const data = await res.json()
//  const phon = data.data;
//  displayPhons(phon)
// //  console.log(phon);
// }


// const displayPhons = phons=>{
//     const phonContainer = document.getElementById('phone-container');
//   phons.forEach(phon => {
//     const phonCard = document.createElement('div');
//     phonCard.classList = 'card w-96 bg-base-100 shadow-xl'
//     phonCard.innerHTML = `
 
//   <figure><img src="${phon.image}" alt="Shoes" /></figure>
//   <div class="card-body">
//     <h2 class="card-title">${phon.phone_name}</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>

//     `;
//     phonContainer.appendChild(phonCard)
//   })
// }


// const handleSearch = () =>{
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
    
// loadData(searchText);
// }


// loadData()