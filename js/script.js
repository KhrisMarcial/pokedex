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
        let pokeImage = data.sprites.front_default;
        let pokeGif = 'http://www.pokestadium.com/sprites/xy/'+ userInput.toLowerCase() + '.gif';
        // $('#picture').attr('src', pokeImage);
        $('#picture').attr('src', pokeGif);
    
    let name = data.name;
    let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    let pokeAttr = {
        type1: data.types[0].type.name,
        type2 : data.types[1].type.name,
        move1 : data.moves[0].move.name,
        move2 : data.moves[1].move.name,
        move3 : data.moves[2].move.name,
        move4 : data.moves[3].move.name
    }

    console.log(pokeAttr.type1);

        $('.number').html("#"+data.id);
        $('.name').html(nameCapitalized);
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