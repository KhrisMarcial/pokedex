$('form').on('submit', (e)=>{
    e.preventDefault();
    console.log(e.target);
    const userInput = $('input[type="text"]').val();
    // const iconurls = 
    console.log(userInput);

    $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon/' + userInput.toLowerCase() + '/'
    }).then((data) => {
    
    $('#stat').html(data.moves[0].move.name);
    },
    (error) => {
    console.log('bad request: ', error);
    })
})
