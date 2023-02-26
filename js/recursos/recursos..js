let formulario = document.querySelector('#formulario')
let nombre = document.querySelector('#nombre').value
let celular = document.querySelector('#celular').value
let mail = document.querySelector('#mail').value
let consulta = document.querySelector('#texto').value

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    // const nuevaConsulta = {
    //     nombre: nombre,
    //     celular: celular,
    //     mail: mail,
    //     consulta: consulta,
    // }
    if (mail === '' || consulta === '') {
        Swal.fire({
          icon: 'error',
          text: 'Falta completar mail y/o consulta',
        })} else{ alert('enviado correctamente')}
//    if(nombre == '' || celular =='' || mail =='' || consulta =='')
    // Swal.fire({
    //         text: 'Debes completar todos los Campos',
    //   }) 
})
 


// botonEnviar.addEventListener('submit', (e)=>{
//    console.log(e.target.value)



// })

// let cambioColor = document.querySelector ('#botonEnviar')
// cambioColor.addEventListener('mouseover', function (e) {
//  cambioColor.style.background = 'red' 
// })

// cambioColor.addEventListener('mouseout', function (e) {
//   cambioColor.style.background = 'blue'} )


//   let foto_congreso = document.getElementById('#foto_congreso')


