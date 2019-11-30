$('form').on('submit', (e)=>{
    e.preventDefault();
    console.log(e.target);
    const userInput = $('input[type="text"]').val();
    // const iconurls = 
    console.log(userInput);

    $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon/' + userInput.toLowerCase() + '/'
    }).then((data) => {
    

        //check for undefined
        //if undefined, do not append
        //append an item to list
        let pokeImage = "'"+ data.sprites.front_default + "'";
        $('#picture').prepend("<img src="+ pokeImage +"></img>")


    $('.number').html("#"+data.id);
    $('.name').html(data.name);
    $('.type1').html(data.types[0].type.name);
    $('.type2').html(data.types[1].type.name);
    $('.move1').html(data.moves[0].move.name);
    $('.move2').html(data.moves[1].move.name);
    $('.move3').html(data.moves[2].move.name);
    $('.move4').html(data.moves[3].move.name);
    },
    (error) => {
    console.log('bad request: ', error);
    })
})
