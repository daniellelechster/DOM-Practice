const promoApplication = () => {

let seasonalPromo = document.querySelector("#seasonal-promo")
let isPromoApplied = false;

    const changeTheme = () => {
        isPromoApplied = !isPromoApplied
        document.body.classList.toggle("seasonal-promo")

        if(isPromoApplied) {
            document.querySelector("#seasonal-promo-img").setAttribute("src", "./assets/images/matcha.jpg")
        } else {
            document.querySelector("#seasonal-promo-img").setAttribute("src", "./assets/images/psl.jpg")
        }
    }

    seasonalPromo.addEventListener("click", ()=> {
        changeTheme()
    })





}
// &&(AND) ||(OR) !(NOT)//

promoApplication()