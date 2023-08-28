// // 1. data load 
// // 2. show data on display 

const loadPhon = async (searchText) => {
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
const data = await res.json();
const phons = data.data
// console.log(phons);
displayPhons(phons)
}

const displayPhons = phons => {

    const phonContainer = document.getElementById('phone-container');
    phonContainer.textContent = '';
    
    phons = phons.slice(0,5);

    phons.forEach(phon => {
        console.log(phon);
        const phonCard = document.createElement('div');
        phonCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        phonCard.innerHTML = `
        <figure>
        <img
          src="${phon.image}"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phon.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `;
        phonContainer.appendChild(phonCard);
    });
}


const handleSearch = ()=>{
const searchField = document.getElementById('search-field');
 const searchText = searchField.value;
 console.log(searchText)
 loadPhon(searchText);
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


loadData()