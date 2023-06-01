//============= SIDE BAR ===============
//============= SIDE BAR ===============
const manuItems = document.querySelectorAll('.menu-item');

// removeActive =============
const removeActive = () => {
    manuItems.forEach(subitem => {
        subitem.classList.remove('active')
    });
}


manuItems.forEach(subitem => {
    subitem.addEventListener('click', () => {
        removeActive();
        subitem.classList.add('active');

       if(subitem.id != 'notifice'){
        document.querySelector('.notification').style.display = 'none'
       }else{
        document.querySelector('.notification').style.display = 'block'
        document.querySelector('#notifice .count').style.display = 'none'
       }
    });
})

//============= Massage ===============
//============= Massage ===============
const msgNotific = document.querySelector('#message');
const msgBox = document.querySelector('.messages');


msgNotific.addEventListener('click', () => {
    msgBox.classList.add('box-sh');
    document.querySelector('#message .count').style.display = 'none';

    setTimeout(() => {
        msgBox.classList.remove('box-sh');
    }, 3000);
})


//============= Theme Customize ===============
//============= Theme Customize ===============

const themeManu = document.querySelector('#themeMenu');
const themeBox = document.querySelector('.theme');

themeManu.addEventListener('click', () => {
    themeBox.style.display = 'grid'
})


// Friend Request Button===
const addBtn = document.querySelectorAll('#add');
const delBtn = document.querySelectorAll('#del');

addBtn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.style.display = 'none'
    })
});

delBtn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.style.display = 'none'
    })
})


// Window Event ===
window.addEventListener('scroll', () => {
    themeBox.style.display = 'none'
    document.querySelector('.notification').style.display = 'none'
})