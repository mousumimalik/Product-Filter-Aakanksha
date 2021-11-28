
const btns = document.querySelectorAll(".btn");
const brandBtns = document.querySelectorAll(".brand-btn");
const products = document.querySelectorAll(".slide-cover");
const sidebarBtn = document.querySelector('.sidebar__btn');
const sidebarContainer = document.querySelector(".sidebar__container");
const exploreContainer = document.querySelector(".explore-container");
const sidebarOptions = document.querySelectorAll(".sidebar__options");
const filtersApplyBtn = document.querySelector(".sidebar__applyBtn");

// Search by filter
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();
        
        const filter = e.target.dataset.filter;
        
        products.forEach(product => {
            let productCategory = product.children[1].children[0].childNodes[3].textContent;
            console.log(productCategory);

            if(filter=="all"){
                product.style.display="flex";
            }else{
                if(productCategory.trim() === filter){
                    product.style.display="flex";
                }else{
                    product.style.display="none";
    
                }
            }
        })
    });
};
  
function filterFun(event) {
    var input, filter, div, li, i;

    input = document.getElementById("services-myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("services-myDropdown");
    li = div.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }    
    }  
}

// Brand
for (i = 0; i < brandBtns.length; i++) {
    brandBtns[i].addEventListener("click", (e) => {
        e.preventDefault();
        
        const filter = e.target.dataset.filter;
        
        products.forEach(product => {
            console.log(product.children[1].children[0].children[2].children[1].textContent);
            let productCategory = product.children[1].children[0].children[2].children[1].textContent;

            if(filter=="all"){
                product.style.display="flex";
            }else{
                if(productCategory.trim() === filter){
                    product.style.display="flex";
                }else{
                    product.style.display="none";
    
                }
            }
        })
    });
};

function brandFilterFun(event) {
    var input, filter, div, li, i;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    li = div.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }  
    }
}

// sidebar 
sidebarBtn.addEventListener('click',function(){
    sidebarContainer.classList.toggle('show-sidebar');
    exploreContainer.classList.toggle('move-container');
});
function accrodian(){
    for(let i = 0; i < sidebarOptions.length;i++){
        sidebarOptions[i].addEventListener('click', function(){
            let panel = this.nextElementSibling;
            console.log(sidebarOptions[i]);
            let sidebarIcon = sidebarOptions[i].lastElementChild;
            sidebarIcon.classList.toggle('rotate');
            this.classList.toggle('active');
            if (panel.style.display === "flex") {
                panel.style.display = "none";
              } else {
                panel.style.display = "flex";
              }
        });
    }
}
accrodian();

// close button
filtersApplyBtn.addEventListener("click", function() {
    sidebarContainer.classList.toggle('show-sidebar');
    exploreContainer.classList.toggle('move-container');
});