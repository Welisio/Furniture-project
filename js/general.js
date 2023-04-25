var products = [
    {
        id: 0,
        name: 0,
        price: 140,
        color: 'blue'
    },
    {
        id: 1,
        name: 1,
        price: 140,
        color: 'brown'
    },
    {
        id: 2,
        name: 2,
        price: 140,
        color: 'blue'
    },
    {
        id: 3,
        name: 3,
        price: 140,
        color: 'brown'
    },
    {
        id: 4,
        name: 4,
        price: 140,
        color: 'blue'
    },
    {
        id: 5,
        name: 5,
        price: 140,
        color: 'brown'
    },
    {
        id: 6,
        name: 6,
        price: 140,
        color: 'brown'
    },
    {
        id: 7,
        name: 7,
        price: 140,
        color: 'brown'
    },

]

var wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

likeType = (id, cont) => {
    if (wishlist.findIndex(el => el.id === id)) {
        return `<div class="like-btn" onclick="activateLike(${id, cont})">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.96173 16.9109L8.42605 16.3219L7.96173 16.9109ZM11 3.50063L10.4596 4.02073C10.601 4.16763 10.7961 4.25063 11 4.25063C11.2039 4.25063 11.399 4.16763 11.5404 4.02073L11 3.50063ZM14.0383 16.9109L14.5026 17.4999L14.0383 16.9109ZM8.42605 16.3219C6.91039 15.1271 5.25307 13.9603 3.93829 12.4798C2.64922 11.0282 1.75 9.3345 1.75 7.1371H0.25C0.25 9.80263 1.3605 11.8361 2.81672 13.4758C4.24723 15.0866 6.07077 16.3752 7.49742 17.4999L8.42605 16.3219ZM1.75 7.1371C1.75 4.98623 2.96537 3.18252 4.62436 2.42419C6.23607 1.68748 8.40166 1.88258 10.4596 4.02073L11.5404 2.98053C9.0985 0.443521 6.26409 0.0253866 4.00076 1.05996C1.78471 2.07292 0.25 4.42503 0.25 7.1371H1.75ZM7.49742 17.4999C8.00965 17.9037 8.55954 18.3343 9.11682 18.6599C9.67386 18.9854 10.3096 19.25 11 19.25V17.75C10.6904 17.75 10.3261 17.6293 9.87361 17.3648C9.42132 17.1005 8.95208 16.7366 8.42605 16.3219L7.49742 17.4999ZM14.5026 17.4999C15.9292 16.3752 17.7528 15.0866 19.1833 13.4758C20.6395 11.8361 21.75 9.80263 21.75 7.1371H20.25C20.25 9.3345 19.3508 11.0282 18.0617 12.4798C16.7469 13.9603 15.0896 15.1271 13.574 16.3219L14.5026 17.4999ZM21.75 7.1371C21.75 4.42503 20.2153 2.07292 17.9992 1.05996C15.7359 0.0253866 12.9015 0.443521 10.4596 2.98053L11.5404 4.02073C13.5983 1.88258 15.7639 1.68748 17.3756 2.42419C19.0346 3.18252 20.25 4.98623 20.25 7.1371H21.75ZM13.574 16.3219C13.0479 16.7366 12.5787 17.1005 12.1264 17.3648C11.6739 17.6293 11.3096 17.75 11 17.75V19.25C11.6904 19.25 12.3261 18.9854 12.8832 18.6599C13.4405 18.3343 13.9903 17.9037 14.5026 17.4999L13.574 16.3219Z" fill="#B8926A"/>
                    </svg>
                </div>`
    } else {
        return `<div class="like-btn" onclick="unactivateLike(${id, cont})">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6.1371C0 11 4.01943 13.5914 6.96173 15.9109C8 16.7294 9 17.5 10 17.5C11 17.5 12 16.7294 13.0383 15.9109C15.9806 13.5914 20 11 20 6.1371C20 1.27416 14.4998 -2.17454 10 2.50063C5.50016 -2.17454 0 1.27416 0 6.1371Z" fill="#B8926A"/>
                    </svg>   
                </div>`
    }
}

function initProducts  (cont) {
    let container = document.querySelector(`.${cont}`)
    products.forEach(product => {
        container.insertAdjacentHTML('beforeend',`
            <div class="swiper-slide">
                <div class="product">
                    <div class="product-img">
                        <div class="like-btn-container ${cont + product.id}">
                            ${likeType(product.id)}
                        </div>
                    </div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price}$</div>
                </div>
            </div>
        `)
    })   
}

function activateLike (id, cont) {
    if (wishlist.findIndex(el => el.id === id) !== -1) return
    let container = document.querySelector(`.${cont + id}`)
    console.log(cont + id)
    container.insertAdjacentHTML('beforeend', likeType(id, cont)) 
    wishlist.push(products[id])
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

function unactivateLike (id, cont) {
    let container = document.querySelector(`.${cont + id}`)
    container.insertAdjacentHTML('beforeend', likeType(id, cont))
    wishlist.splice(products[products.indexOf(products[id])].id, 1)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}