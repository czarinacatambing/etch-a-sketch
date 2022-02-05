const body = document.querySelector('body');
const container = document.createElement('div');
const clearBtn = document.querySelector('button')
container.setAttribute('style','display: flex;  flex-direction: column; height: 800px; width:1850px; border-style: solid; border-width:.2 ')

for(let i=0; i<45; i++){
    const row = document.createElement('div')
    row.setAttribute('style', 'display: flex; flex:1' )
    
    for(let k=0; k<100; k++) {
        const col = document.createElement('div')
        col.setAttribute('class', 'box' )
        col.setAttribute('style', 'flex:1;' )
        
        row.appendChild(col)
    }

    container.appendChild(row)

}


body.appendChild(container)

clearBtn.addEventListener('click', () => {
    // https://stackoverflow.com/questions/37439605/restart-reset-and-replay-a-transition-css/37448517
    // https://stackoverflow.com/questions/11131875/what-is-the-cleanest-way-to-disable-css-transition-effects-temporarily

    container.classList.add('notransition')
    setTimeout(function(){
        container.classList.remove('notransition');
      },40);

   
})