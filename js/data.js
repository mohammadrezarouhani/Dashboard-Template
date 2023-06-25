
const users = [
    {
        id: 1,
        name: 'اقبال ',
        family: 'حسن نژاد',
        phone: '+905000000',
        image: 'src\\profile-1.jpg'
    }, {
        id: 2,
        name: 'امیر',
        family: 'روحانی',
        phone: '+905000000',
        image: 'src\\profile-1.jpg'
    }, {
        id: 3,
        name: 'مریم ',
        family: 'مفیدی',
        phone: '+905000000',
        image: 'src\\profile-2.jpg'
    }, {
        id: 4,
        name: 'زهرا',
        family: 'حمزای',
        phone: '+905000000',
        image: 'src\\profile-1.jpg'
    }, {
        id: 5,
        name: 'احسان ',
        family: 'علامه',
        phone: '+905000000',
        image: 'src\\profile-3.jpg'
    }, {
        id: 6,
        name: 'محمد امیر',
        family: 'قربانی',
        phone: '+905000000',
        image: 'src\\profile-3.jpg'
    }, {
        id: 7,
        name: 'عرفان',
        family: 'باقری',
        phone: '+905000000',
        image: 'src\\profile-2.jpg'
    }
]


const products = [
    {
        id: 1,
        name: "ساعت هوشمند",
        price: '180000IR',
        image: 'src\\prd1.jpg'
    }, {
        id: 2,
        name: "ساعت هوشمند",
        price: '180000IR',
        image: 'src\\prd2.jpg'
    }, {
        id: 3,
        name: "ساعت هوشمند",
        price: '180000IR',
        image: 'src\\prd4.jpg'
    }, {
        id: 4,
        name: "ساعت هوشمند",
        price: '180000IR',
        image: 'src\\prd5.jpg'
    }
]


// Dashboard
const dashboardTableBody = document.getElementById('recent-user-table')

function renderDashboardRecentUser() {
    users.slice(0, 5).forEach((el) => {
        let tr = document.createElement('tr');
        dashboardTableBody.appendChild(tr);

        for (i = 1; i < 4; i++) {
            let td = document.createElement('td')
            td.textContent = Object.values(el)[i]
            tr.appendChild(td)
        }
    });
}

renderDashboardRecentUser()


// Products 
const productContainer = document.getElementById('products-container')

function renderProductCard() {
    while (productContainer.firstChild) {
        productContainer.removeChild(productContainer.firstChild);
    }

    products.forEach((el) => {
        let div = document.createElement('div')
        div.classList.add('products')

        let img = document.createElement('img')
        img.src = el.image
        div.appendChild(img)

        let innerDiv = document.createElement('div')
        innerDiv.classList.add('info')
        div.appendChild(innerDiv)

        let h2 = document.createElement('h2')
        h2.textContent = el.name
        innerDiv.appendChild(h2)

        let h3 = document.createElement('h3')
        h3.textContent = el.price
        innerDiv.appendChild(h3)

        let input = document.createElement('input')
        input.value = "ADD to Card"
        input.type = "button"
        innerDiv.appendChild(input)

        productContainer.appendChild(div)
    })
}

renderProductCard()


// Users
const usersTableBody = document.getElementById('users-table')

function renderAllUsersCard() {

    while (usersTableBody.firstChild) {
        usersTableBody.removeChild(usersTableBody.firstChild);
    }

    users.forEach((el) => {
        let tr = document.createElement('tr');
        usersTableBody.appendChild(tr);

        let tdImage = document.createElement('td')
        let img = document.createElement('img')
        img.src = el.image
        tdImage.appendChild(img)
        tr.appendChild(tdImage)

        let tdName = document.createElement('td')
        tdName.innerText = el.name
        tr.appendChild(tdName)

        let tdFamily = document.createElement('td')
        tdFamily.innerText = el.family
        tr.appendChild(tdFamily)

        let tdPhone = document.createElement('td')
        tdPhone.innerText = el.phone
        tr.appendChild(tdPhone)

        let tdLink = document.createElement('td')
        let a = document.createElement('a')
        a.href = "#"
        a.innerText = "جزییات"
        tdLink.appendChild(a)
        tr.appendChild(tdLink)
    });
}

renderAllUsersCard()


// popup

function showPopup(status) {
    const popup = document.getElementById('popup')
    const message = document.getElementById('message')

    if (status == 'success') {
        message.innerText = ' با موفقیت افزوده شد'
        message.style.color = 'green'
        popup.style.display = 'block'

        setTimeout(() => {
            popup.style.display = 'none'
        }, 3000)

    } else if (status == "failure") {
        message.innerText = 'لطفا تمامی فیلد های خالی را پرکنید'
        message.style.color = 'red'
        popup.style.display = 'block'

        setTimeout(() => {
            popup.style.display = 'none'
        }, 3000)
    }
}


// Product
const prodctOverlay = document.getElementById('overlay-1')
const productAdd = document.getElementById('productAdd')
productAdd.onclick = addProduct

function addProduct() {
    const productNameInput = document.getElementById('productNameInput')
    const productPriceInput = document.getElementById('prodPriceInput')

    if (productNameInput.value && productPriceInput.value) {
        products.push(
            {
                name: productNameInput.value,
                price: productPriceInput.value,
                image: 'src\\images.png'
            }
        )
        productNameInput.value = ''
        productPriceInput.value = ''
        prodctOverlay.style.display = 'none'
        showPopup('success')
        renderProductCard()

    } else {
        showPopup('failure')
    }
}


// Add Users
const userOverlay = document.getElementById('overlay-2')
const userAdd = document.getElementById('userAdd')
userAdd.onclick = addUser

function addUser() {
    const userNameInput = document.getElementById('userNameInput')
    const userFamilyInput = document.getElementById('familyInput')
    const phoneInput = document.getElementById('phoneInput')

    if (userNameInput.value && userFamilyInput.value && phoneInput.value) {
        users.unshift({
            name: userNameInput.value,
            family: userFamilyInput.value,
            phone: phoneInput.value,
            image: 'src\\profile-1.jpg'
        })
        showPopup('success')

        userNameInput.value = ''
        userFamilyInput.value = ''
        phoneInput.value = ''
        userOverlay.style.display = 'none'
        renderAllUsersCard()
    } else {
        showPopup('failure')
    }

}