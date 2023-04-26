var products = [
    {
        id: 0,
        name: 0,
        price: 140,
        qty: 2
    },
    {
        id: 1,
        name: 1,
        price: 140,
    },
    {
        id: 2,
        name: 2,
        price: 140,
    },
    {
        id: 3,
        name: 3,
        price: 140,
    },
    {
        id: 4,
        name: 4,
        price: 140,
    },
    {
        id: 5,
        name: 5,
        price: 140,
    },
    {
        id: 6,
        name: 6,
        price: 140,
    },
    {
        id: 7,
        name: 7,
        price: 140,
    },
]

var buyInfo = JSON.parse(localStorage.getItem('buyinfo')) || { price: 0, qty: 0 }

var basket = JSON.parse(localStorage.getItem('basket')) || []

var wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

likeType = (id, cont) => {
    if (wishlist.findIndex(el => el.id === id) === -1) {
        return `<div class="like-btn" onclick="activateLike(${id},'${cont}')">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.96173 16.9109L8.42605 16.3219L7.96173 16.9109ZM11 3.50063L10.4596 4.02073C10.601 4.16763 10.7961 4.25063 11 4.25063C11.2039 4.25063 11.399 4.16763 11.5404 4.02073L11 3.50063ZM14.0383 16.9109L14.5026 17.4999L14.0383 16.9109ZM8.42605 16.3219C6.91039 15.1271 5.25307 13.9603 3.93829 12.4798C2.64922 11.0282 1.75 9.3345 1.75 7.1371H0.25C0.25 9.80263 1.3605 11.8361 2.81672 13.4758C4.24723 15.0866 6.07077 16.3752 7.49742 17.4999L8.42605 16.3219ZM1.75 7.1371C1.75 4.98623 2.96537 3.18252 4.62436 2.42419C6.23607 1.68748 8.40166 1.88258 10.4596 4.02073L11.5404 2.98053C9.0985 0.443521 6.26409 0.0253866 4.00076 1.05996C1.78471 2.07292 0.25 4.42503 0.25 7.1371H1.75ZM7.49742 17.4999C8.00965 17.9037 8.55954 18.3343 9.11682 18.6599C9.67386 18.9854 10.3096 19.25 11 19.25V17.75C10.6904 17.75 10.3261 17.6293 9.87361 17.3648C9.42132 17.1005 8.95208 16.7366 8.42605 16.3219L7.49742 17.4999ZM14.5026 17.4999C15.9292 16.3752 17.7528 15.0866 19.1833 13.4758C20.6395 11.8361 21.75 9.80263 21.75 7.1371H20.25C20.25 9.3345 19.3508 11.0282 18.0617 12.4798C16.7469 13.9603 15.0896 15.1271 13.574 16.3219L14.5026 17.4999ZM21.75 7.1371C21.75 4.42503 20.2153 2.07292 17.9992 1.05996C15.7359 0.0253866 12.9015 0.443521 10.4596 2.98053L11.5404 4.02073C13.5983 1.88258 15.7639 1.68748 17.3756 2.42419C19.0346 3.18252 20.25 4.98623 20.25 7.1371H21.75ZM13.574 16.3219C13.0479 16.7366 12.5787 17.1005 12.1264 17.3648C11.6739 17.6293 11.3096 17.75 11 17.75V19.25C11.6904 19.25 12.3261 18.9854 12.8832 18.6599C13.4405 18.3343 13.9903 17.9037 14.5026 17.4999L13.574 16.3219Z" fill="#B8926A"/>
                    </svg>
                </div>`
    } else {
        return `<div class="like-btn" onclick="unactivateLike(${id},'${cont}')">
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
                        <div class="like-btn-container like${product.id}">
                            ${likeType(product.id,cont)}
                        </div>
                    </div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price}$</div>
                </div>
            </div>
        `)
    })   
}

function initWishlist (cont) {
   let container =  document.querySelector(`.${cont}`)
   wishlist.forEach(wishlistElem => {
    container.insertAdjacentHTML('beforeend',`
        <div class="wishlist-elem elem${wishlistElem.id}">
            <div class="wishlist-img">
                <div class="like-btn-container">
                    <div class="like-btn" onclick="removeFromWishlist(${wishlistElem.id})">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.1371C0 11 4.01943 13.5914 6.96173 15.9109C8 16.7294 9 17.5 10 17.5C11 17.5 12 16.7294 13.0383 15.9109C15.9806 13.5914 20 11 20 6.1371C20 1.27416 14.4998 -2.17454 10 2.50063C5.50016 -2.17454 0 1.27416 0 6.1371Z" fill="#B8926A"/>
                        </svg> 
                    </div>
                </div>
            </div>
            <div class="wishlist-info">
                <div class="name-like">
                    <div class="name">${wishlistElem.name}</div>
                    <div class="like-btn2" onclick="removeFromWishlist(${wishlistElem.id})">
                        <svg class="noshow" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.1371C0 11 4.01943 13.5914 6.96173 15.9109C8 16.7294 9 17.5 10 17.5C11 17.5 12 16.7294 13.0383 15.9109C15.9806 13.5914 20 11 20 6.1371C20 1.27416 14.4998 -2.17454 10 2.50063C5.50016 -2.17454 0 1.27416 0 6.1371Z" fill="#B8926A"/>
                        </svg>  
                    </div>
                </div>
                <div class="price">140$</div>
            </div>
        </div>
    `)
   })
}

function initBasket (cont) {
    let container =  document.querySelector(`.${cont}`)
    basket.forEach(basketEl => {
        container.insertAdjacentHTML('beforeend', `
            <div class="basket-elem elem${basketEl.id}">
                <div class="cross" onclick="removeFromBasket(${basketEl.id})">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8878 15.7376C16.9633 15.8131 17.0232 15.9027 17.064 16.0014C17.1049 16.1 17.1259 16.2057 17.1259 16.3125C17.1259 16.4192 17.1049 16.5249 17.064 16.6236C17.0232 16.7222 16.9633 16.8118 16.8878 16.8873C16.8123 16.9628 16.7227 17.0227 16.6241 17.0635C16.5254 17.1044 16.4197 17.1254 16.313 17.1254C16.2062 17.1254 16.1005 17.1044 16.0019 17.0635C15.9032 17.0227 15.8136 16.9628 15.7381 16.8873L9.00045 10.1486L2.2628 16.8873C2.11034 17.0398 1.90356 17.1254 1.68795 17.1254C1.47234 17.1254 1.26557 17.0398 1.11311 16.8873C0.96065 16.7349 0.875 16.5281 0.875 16.3125C0.875 16.0969 0.96065 15.8901 1.11311 15.7376L7.85178 8.99996L1.11311 2.26231C0.96065 2.10985 0.875 1.90307 0.875 1.68746C0.875 1.47186 0.96065 1.26508 1.11311 1.11262C1.26557 0.960162 1.47234 0.874512 1.68795 0.874512C1.90356 0.874512 2.11034 0.960162 2.2628 1.11262L9.00045 7.85129L15.7381 1.11262C15.8906 0.960162 16.0973 0.874512 16.313 0.874512C16.5286 0.874512 16.7353 0.960162 16.8878 1.11262C17.0403 1.26508 17.1259 1.47186 17.1259 1.68746C17.1259 1.90307 17.0403 2.10985 16.8878 2.26231L10.1491 8.99996L16.8878 15.7376Z" fill="#2D2D2B"/>
                    </svg> 
                </div>
                <img src="../pics/wishlist1.png" alt="">
                <div class="subtitle">${basketEl.name}</div>
                <div class="qty-color">
                    <div class="circle1"></div>
                    <div class="qty">
                        <div class="plus" onclick="product.plus()">+</div>
                        <div class="num">${buyInfo.qty}</div>
                        <div class="minus" onclick="product.minus()">-</div>
                    </div>
                </div>
                <div class="price">${buyInfo.price}</div>
            </div>
        `)
    })
    if (basket.length !== 0) {
        document.querySelector('.price2').innerText = buyInfo.price
        document.querySelector('.count').innerText = buyInfo.qty
    }
}

function activateLike (id, cont) {
    if (wishlist.findIndex(el => el.id === id) !== -1) return
    wishlist.push(products[id])
    let container = document.querySelectorAll(`.like${id}`)
    container.forEach(like => { like.innerHTML = likeType(id, cont) })
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

function unactivateLike (id, cont) {
    wishlist.splice(wishlist.findIndex(el => el.id === products[products.indexOf(products[id])].id), 1)
    let container = document.querySelectorAll(`.like${id}`)
    container.forEach(like => { like.innerHTML = likeType(id, cont) })
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

function removeFromWishlist (id) {
    wishlist.splice(wishlist.findIndex(el => el.id === id), 1)
    document.querySelector(`.elem${id}`).remove()
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

function addToBasket () {
    if  (basket.findIndex(el => el.id === 0) !== -1 || buyInfo.qty === 0) return
    products[0].qty = buyInfo.qty
    products[0].price = buyInfo.price
    basket.push(products[0])
    localStorage.setItem('basket', JSON.stringify(basket))
}

function removeFromBasket (id) {
    basket.splice(basket.findIndex(el => el.id === id), 1)
    document.querySelector(`.elem${id}`).remove()
    document.querySelector('.price2').innerText = '0'
    document.querySelector('.count').innerText = '0'
    localStorage.setItem('basket', JSON.stringify(wishlist))
}

let product = {
    init: function () {
        let num = document.querySelector('.num')
        let price = document.querySelector('.price > h3') || document.querySelector('.price')
        num.innerText = buyInfo.qty
        price.innerText = buyInfo.price        
    },
    plus: function () {
        let num = document.querySelector('.num')
        let price = document.querySelector('.price > h3') || document.querySelector('.price')
        
        let txtNum = Number(num.textContent)
        let txtPrice = Number(price.textContent.split('$')[0])
        price.innerText = txtPrice + 180 + "$"
        num.innerText = txtNum + 1
        buyInfo.qty = num.textContent
        buyInfo.price = price.textContent
        if (document.querySelector('.summary')) {
            document.querySelector('.price2').innerText = buyInfo.price
            document.querySelector('.count').innerText = buyInfo.qty
        }
        localStorage.setItem('buyinfo', JSON.stringify(buyInfo))
        console.log(buyInfo)
    },
    minus: function () {
        let num = document.querySelector('.num')
        let price = document.querySelector('.price > h3') || document.querySelector('.price')
        let txtNum = Number(num.textContent)
        let txtPrice = Number(price.textContent.split('$')[0])
        if (txtNum === 0) return
        price.innerText = txtPrice - 180 + "$"
        num.innerText = txtNum - 1
        buyInfo.qty = num.textContent
        buyInfo.price = price.textContent
        if (document.querySelector('.summary')) {
            document.querySelector('.price2').innerText = buyInfo.price
            document.querySelector('.count').innerText = buyInfo.qty
        }
        localStorage.setItem('buyinfo', JSON.stringify(buyInfo))
        console.log(buyInfo)
    }
}

function openMobMenu () {
    let body = document.querySelector('body')
    let shadow = document.querySelector('.shadow')
    let mobMenu = document.querySelector('.mob-menu')
    shadow.style.display = 'block'
    mobMenu.style.display = 'block'
    body.style.overflow = 'hidden'
}

function closeMobMenu () {
    let body = document.querySelector('body')
    let shadow = document.querySelector('.shadow')
    let mobMenu = document.querySelector('.mob-menu')
    shadow.style.display = 'none'
    mobMenu.style.display = 'none'
    body.style.overflow = 'auto'
}

function openSearch () {
    let body = document.querySelector('body')
    let searchField = document.querySelector('.search-field')
    let shadow = document.querySelector('.shadow')
    shadow.style.display = 'block'
    searchField.style.display = 'flex'
    body.style.overflow = 'hidden'
}

function closeSearch () {
    let body = document.querySelector('body')
    let searchField = document.querySelector('.search-field')
    let shadow = document.querySelector('.shadow')
    shadow.style.display = 'none'
    searchField.style.display = 'none'
    body.style.overflow = 'auto'
}

function showBasketItemsQty () {
    if (basket.length > 0) {
        let basketCircle = document.querySelector('.basket-circle')
        basketCircle.style.display = 'flex'
        basketCircle.innerText = basket.length
    }
}

function saveAcc () {
    let name = document.querySelector('.name1').value
    let surname = document.querySelector('.surname').value
    if (!name || !surname) {
        alert('Name and surname fields must be fulfilled !')
        return
    }
    document.querySelector('.personal-info1').innerText = name + ' ' + surname
    document.querySelector('.personal-info2').innerText = name + ' ' + surname
    
    document.querySelector('.account-wishlist').style.display = 'flex'
    document.querySelector('.account-login').style.display = 'none'

    

    document.querySelector('.heart-container1').innerHTML = `   
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.1371C0 11 4.01943 13.5914 6.96173 15.9109C8 16.7294 9 17.5 10 17.5C11 17.5 12 16.7294 13.0383 15.9109C15.9806 13.5914 20 11 20 6.1371C20 1.27416 14.4998 -2.17454 10 2.50063C5.50016 -2.17454 0 1.27416 0 6.1371Z" fill="#2D2D2B"/>
    </svg>
    `
    document.querySelector('.heart-container2').innerHTML = `
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.1371C0 11 4.01943 13.5914 6.96173 15.9109C8 16.7294 9 17.5 10 17.5C11 17.5 12 16.7294 13.0383 15.9109C15.9806 13.5914 20 11 20 6.1371C20 1.27416 14.4998 -2.17454 10 2.50063C5.50016 -2.17454 0 1.27416 0 6.1371Z" fill="#2D2D2B"/>
    </svg>`
}

function finishOrder () {
    let body = document.querySelector('body')
    let dialog = document.querySelector('.centerpoint')
    let shadow = document.querySelector('.shadow')
    body.style.overflow = 'hidden'
    shadow.style.display = 'block'
    dialog.style.display = 'block'
    window.scrollTo(0, 0);
}

function closeFinishOrder () {
    let body = document.querySelector('body')
    let dialog = document.querySelector('.centerpoint')
    let shadow = document.querySelector('.shadow')
    body.style.overflow = 'auto'
    shadow.style.display = 'none'
    dialog.style.display = 'none'
    window.scrollTo(0, 0);
}