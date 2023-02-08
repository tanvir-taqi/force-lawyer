


// ==========  clients image in clients section ======= 
const comapanyLogoUrl = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMUkqb3xAVKhdFmnR-AMSc54Sr5CCGmnwCg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzl2swcDmN_6GvIrjTaPCZR7i9VPP4_30LjA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjlEOgjrmKB1ZRS6EnJaHkulR1Ra_bFFH1A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVzM05pP8UtmewbU4rmlQseHtFrOqZrXAiw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEXO-RySDYMTCWiDAhGm6gkwN9h-ZddJc_Q&usqp=CAU',
]
const clientsImages = document.getElementById('clients-images')
 comapanyLogoUrl.forEach(url => {

    const div = document.createElement('div')
    div.innerHTML = `<img src=${url} class= alt="">`
    clientsImages.appendChild(div)
})

// ========= responsive ========== 
const barIcon = document.getElementById('bar-icon')
const navbar = document.getElementById('navbar-list')

barIcon.addEventListener('click', () => {
   
    navbar.classList.toggle('show')
})


//  ============  services ========= 

const services = [
    {
        packageName: 'Silver',
        recomended: false,
        servicesName: [
            'Consultation for legal information and advice',
            'Consultation to review documents (such as agreements, leases, wills, corporation documents, do-it-yourself court forms)',
            'Mediation, arbitration, or other third party services',
            'Preparation of documents',
            'Representing clients in negotiations (possibly under “collaborative lawyering” agreement where both attorneys withdraw if either side chooses to litigate)',
            'Representing clients in court, arbitration, administrative and legislative hearings'
        ],
        price: 999.99

    },
    {
        packageName: 'Gold',
        recomended: true,
        servicesName: [
            'Consultation for legal information and advice',
            'Consultation to review documents (such as agreements, leases, wills, corporation documents, do-it-yourself court forms)',
            'Mediation, arbitration, or other third party services',
            'Preparation of documents',
            'Representing clients in negotiations (possibly under “collaborative lawyering” agreement where both attorneys withdraw if either side chooses to litigate)',
            'Representing clients in court, arbitration, administrative and legislative hearings'
        ],
        price: 1999.99

    },
    {
        packageName: 'Platinum',
        recomended: false,
        servicesName: [
            'Consultation for legal information and advice',
            'Consultation to review documents (such as agreements, leases, wills, corporation documents, do-it-yourself court forms)',
            'Mediation, arbitration, or other third party services',
            'Preparation of documents',
            'Representing clients in negotiations (possibly under “collaborative lawyering” agreement where both attorneys withdraw if either side chooses to litigate)',
            'Representing clients in court, arbitration, administrative and legislative hearings'

        ],
        price: 1999.99

    }
]

const serviceCard = document.getElementById('service-cards')

services.forEach(service => {
    const div = document.createElement('div')
    // div.classList.add('service-card')
    div.innerHTML = `<div class='service-card ${service?.recomended ? "recomended":""}'>

    <h2 class=''>${service?.packageName} Package <span class='recomended-badge'> ${service?.recomended ? "Recomended":""}</span> </h2>
    ${service?.servicesName?.map(sr => `<p>${sr}</p>`)
        }
        <h5 class='price'>Subscription Fee: ${service?.price} USD/year</h5>
    <button class="btn black-text">Subscribe Now</button>
   </div>`
    serviceCard.appendChild(div)
})