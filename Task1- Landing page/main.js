// back-to-top coding:
let backToTop = document.querySelector('.back-to-top')

window.onscroll= () =>{
    if (document.body.animate >1200 || document.documentElement.scrollTop >1200){
        backToTop.style.display = 'flex'
    }
    else{
        backToTop.style.display='none'
    }
}

// navbar menu

let menuItems = document.getElementsByClassName('menu-item')
Array.from(menuItems).forEach((item, index)=>{
    item.onclick=(e)=>{
        let currMenu=document.querySelector('.menu-item.active')
        currMenu.classList.remove('.active')
        item.classList.remove('active')
    }
})

// food category

let foodMenuList= document.querySelector('.food-item-wrap')
let foodCategory = document.querySelector('.food-category')
let categoryBtn =foodCategory.querySelectorAll('button')

Array.from(categoryBtn).forEach((item,index)=>{
    item.onclick = (e)=>{
        let currCategory = foodCategory.querySelector('button.active')
        currCategory.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList = 'food-item-wrap '+ e.target.getAttribute('data-food-type')
    }
})
