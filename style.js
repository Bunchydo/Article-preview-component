var sharebutton = document.getElementById('sharebutton')
var activetogglediv = document.getElementById('active-toggle-div-id')

var triangledown = document.getElementById('triangle-down')


sharebutton.addEventListener('click',function(){
 if (activetogglediv.style.visibility == 'visible'){
    activetogglediv.style.visibility = 'hidden'

 }

 else{
    activetogglediv.style.visibility = 'visible'

 }

 if(triangledown.style.visibility == 'visible'){
    triangledown.style.visibility = 'hidden'
}

else{
    triangledown.style.visibility = 'visible'
}
})

