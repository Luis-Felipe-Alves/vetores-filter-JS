//Método .filter():

const alunos = ['Ana', 'Conda', 'Jacinto', 'Benga', 'Zé'];
const medias = [8, 5, 9, 10, 4.5];
const notaMin = 6;


if(alunos.length !== medias.length){

    console.log(`Alunos e médias não conferem!`)
    console.log(`Alunos: ${alunos.length}. Médias: ${medias.length}.`)

} else {
    
    // Observe que o método .filter() retornará elementos do array aplicado que atenderem à condição imposta no seu retorno.
    let reprovados = alunos.filter((elemento, index) => {
        if (medias[index] < 6){
            console.log(`${elemento} está REPROVADO!`)
        }
    } )

    console.log(`O tipo de reprovados é ${typeof reprovados}`);

    // for(i = 0; i < medias.length; i++){
        
    //     if(medias[i] < notaMin){
    //         console.log(`${alunos[i]} está reprovado(a)! Sua média foi ${medias[i]}`);
    //     }
    // }
}
