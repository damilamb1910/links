let goku=document.getElementById('goku')
let broly=document.getElementById('broly')
let piccolo=document.getElementById('piccolo')
let freezer=document.getElementById('freezer')
let vegueta=document.getElementById('vegueta')
let color=''
let web=document.getElementById('web')
let linkedin=document.getElementById('linkedin')
let instagram=document.getElementById('instagram')
let github=document.getElementById('github')
let whatsapp=document.getElementById('whatsapp')

function desaparecer(color){
    if(color==='web'){
        goku.className='goku'
    }else if(color==='linkedin'){
vegueta.className='goku'
    }else if(color==='github'){
        freezer.className='goku'
            }else if(color==='whatsapp'){
                piccolo.className='goku'
                    }else if(color==='instagram'){
                        broly.className='goku'
                            }
    
    
}

function pintar(color){
if(color==='web'){
    web.style.color='#FFFFFF'
    web.style.backgroundColor='#EFD512'
}else if(color==='linkedin'){
    linkedin.style.color='#FFFFFF'
    linkedin.style.backgroundColor='#009EE0'
}else if(color==='instagram'){
    instagram.style.color='#FFFFFF'
    instagram.style.backgroundColor='#EFD512'
}else if(color==='whatsapp'){
    whatsapp.style.color='#FFFFFF'
    whatsapp.style.backgroundColor='orange'
}else if(color==='github'){
    github.style.color='#FFFFFF'
    github.style.backgroundColor='#EFD512'
}

}
function desPintar(color){
    if(color==='web'){
        web.style.color='gray'
        web.style.backgroundColor='#363535'
    }else if(color==='linkedin'){
        linkedin.style.color='gray'
        linkedin.style.backgroundColor='#363535'
    }else if(color==='instagram'){
        instagram.style.color='gray'
        instagram.style.backgroundColor='#363535'
    }else if(color==='whatsapp'){
        whatsapp.style.color='gray'
        whatsapp.style.backgroundColor='#363535'
    }else if(color==='github'){
        github.style.color='gray'
        github.style.backgroundColor='#363535'
    }
    
    }
document.addEventListener('click',(e)=>{
    if (e.target.closest('#web')) {
       color='web'
       goku.className='goku__web'
       setTimeout(()=>{desaparecer(color)},3000)
       setTimeout(()=>{pintar(color)},1000)
       setTimeout(()=>{desPintar(color)},3000)
       setTimeout(()=>{window.open('https://damianlambert.web.app/', '_blank')},3000)
      }else if(e.target.closest('#linkedin')){
        color='linkedin'
       vegueta.className='vegueta__linkedin'
       setTimeout(()=>{desaparecer(color)},3000)
       setTimeout(()=>{pintar(color)},1000)
       setTimeout(()=>{desPintar(color)},3000)
       setTimeout(()=>{window.open('https://www.linkedin.com/in/damianlamberti/', '_blank')},3000)
      }else if(e.target.closest('#instagram')){
        color='instagram'
       broly.className='broly'
       setTimeout(()=>{desaparecer(color)},3000)
       setTimeout(()=>{pintar(color)},2000)
       setTimeout(()=>{desPintar(color)},3000)
       setTimeout(()=>{window.open('https://www.instagram.com/damianlamberti/', '_blank')},3000)
      }else if(e.target.closest('#github')){
        color='github'
       freezer.className='freezer'
       setTimeout(()=>{desaparecer(color)},3000)
       setTimeout(()=>{pintar(color)},1000)
       setTimeout(()=>{desPintar(color)},3000)
       setTimeout(()=>{window.open('https://github.com/damilamb1910', '_blank')},3000)
      }else if(e.target.closest('#whatsapp')){
        color='whatsapp'
       piccolo.className='piccolo'
       setTimeout(()=>{desaparecer(color)},3000)
       setTimeout(()=>{pintar(color)},1000)
       setTimeout(()=>{desPintar(color)},3000)
       setTimeout(()=>{window.open('https://wa.me/541136684089?text=¡Hola!+Vamos+a+crear+algo', '_blank')},3000)
      }

})

