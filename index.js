


// ==========  clients image in clients section ======= 
const comapanyLogoUrl = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMUkqb3xAVKhdFmnR-AMSc54Sr5CCGmnwCg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzl2swcDmN_6GvIrjTaPCZR7i9VPP4_30LjA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjlEOgjrmKB1ZRS6EnJaHkulR1Ra_bFFH1A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVzM05pP8UtmewbU4rmlQseHtFrOqZrXAiw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEXO-RySDYMTCWiDAhGm6gkwN9h-ZddJc_Q&usqp=CAU',

]
const clientsImages = document.getElementById('clients-images')
comapanyLogoUrl.forEach(url=>{
    const div = document.createElement('div')
    div.innerHTML = `<img src=${url} class= alt="">`
    clientsImages.appendChild(div)
})