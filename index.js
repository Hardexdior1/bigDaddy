let hamburgerMenu=document.getElementById('hamburgerMenu')
// i got the menu bar from html 
let removeMen=document.getElementById('removeMen')
// same for this 

let listItems=document.querySelector('.listItems')
// and this


hamburgerMenu.addEventListener('click',()=>{
    hamburgerMenu.style.display='none'
    removeMen.style.display='initial'

    if(listItems.classList.contains('listItems')){
        listItems.classList.remove('listItems')
        listItems.classList.add('listItemsSHow')


    }

    // listItems.style.position='absolute'
    // listItems.style.left=0
    // listItems.style.right=0
    // listItems.style.top=+1350




    removeMen.addEventListener('click',()=>{

        if(listItems.classList.contains('listItemsSHow')){
            listItems.classList.remove('listItemsSHow')

            listItems.classList.add('listItems')
    
    
        }

        hamburgerMenu.style.display='initial'
        removeMen.style.display='none'
    })
})





