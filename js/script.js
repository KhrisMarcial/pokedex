$('form').on('submit', (e)=>{
    e.preventDefault();

    const userInput = $('input[type="text"]').val();

    const addPokeInfo = (info) =>{
        let ul = document.getElementById("pokemon");
        let li = document.createElement("li");
        li.setAttribute('class','list-group-item');
        li.appendChild(document.createTextNode(info));
        ul.appendChild(li);
    }

    const addMoves = (move) => {
        let ul = document.getElementById("moveset");
        let li = document.createElement("li");
        li.setAttribute('class','list-group-item');
        li.appendChild(document.createTextNode(move));
        ul.appendChild(li);
    }

    const clearInfo = () => {
        $('#moveset').empty();
        $('#pokemon').empty();
    }

    clearInfo();

    $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon/' + userInput.toLowerCase() + '/'
    }).then((data) => {
    
        console.log(data);
        //check for undefined
        //if undefined, do not append
        //append an item to list
        let pokeImage = data.sprites.front_default;
        let pokeGif = 'http://www.pokestadium.com/sprites/xy/'+ userInput.toLowerCase() + '.gif';
        // $('#picture').attr('src', pokeImage);
        $('#picture').attr('src', pokeGif);
    
    let name = data.name;
    let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    let pokeAttr = [
        {
            "moves" : {
                move1 : "Move 1: " + data.moves[0].move.name,
                move2 : "Move 2: " + data.moves[1].move.name,
                move3 : "Move 3: " + data.moves[2].move.name,
                move4 : "Move 4: " + data.moves[3].move.name
            },

            "types" : {
                type1: "Type 1: " + data.types[0].type.name,
                type2: "Type 2: " + data.types[1].type.name
            }
        }
    ]

    const appendInfo = () => {

        clearInfo();

            Object.keys(pokeAttr[0].moves).forEach(name => {
                if (pokeAttr[0].moves[name] !== undefined) {
                    addMoves(pokeAttr[0].moves[name]);
            }
        }
    );

            Object.keys(pokeAttr[0].types).forEach(name => {
                if (pokeAttr[0].types[name] !== undefined) {
                 addPokeInfo(pokeAttr[0].types[name]);
            }
        }
    );

    $('.number').html("#"+data.id);
    $('.name').html(nameCapitalized);

    }

    appendInfo();
        },
        (error) => {
        console.log('bad request: ', error);
        })
})