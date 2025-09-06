let isPromoApplied = false;







const changeTheme = () => {
    isPromoApplied = !isPromoApplied
    document.body.classList.toggle("seasonal-promo")

    if(isPromoApplied) {
        document.querySelector("#seasonal-promo-img").setAttribute("src", "./assets/images/matcha.jpg")
    }
}

// &&(AND) ||(OR) !(NOT)//