

const amici = [

    {
        img: './assets/img/edoardo.jpg',
        nome: 'Mercy',
        canzone: 'canzone1',
        cantante: 'artista1',
        album: 'album1',
        minuti: '8min',
    },
    {
        img: './assets/img/florencia.jpg',
        nome: 'Cleopatra',
        canzone: 'canzone2',
        cantante: 'artista1',
        album: 'album2',
        minuti: '6min',
    },
    {
        img: './assets/img/edoardo2.jpg',
        nome: 'Orione',
        canzone: 'canzone5',
        cantante: 'artista1',
        album: 'album3',
        minuti: '1min',
    },
    {
        img: './assets/img/thomas1.jpg',
        nome: 'Isara',
        canzone: 'canzone5',
        cantante: 'artista5',
        album: 'album4',
        minuti: '9min',
    },
    {
        img: './assets/img/thomas2.jpg',
        nome: 'Martino',
        canzone: 'canzone5',
        cantante: 'artista5',
        album: 'album5',
        minuti: '2min',
    },
   



]

console.log(amici);

function popolaAmici() {
amici.forEach(amici => {


    let row = document.createElement('div');
    row.classList.add('row');
    row.style.lineHeight = '4px';

    let col1 = document.createElement('div');
    col1.classList.add('col-xl-3');
    let avatarAmico = document.createElement('img');
    avatarAmico.classList.add('object-fit-cover', 'rounded-circle');
    avatarAmico.style.height = '60px';
    avatarAmico.style.width = '60px';
    avatarAmico.src = amici.img;


    
    let col2 = document.createElement('div');
    col2.classList.add('col-xl-6', 'my-3', 'text-center');
    let nomeAmico = document.createElement('p');
    nomeAmico.style.fontSize = '14px';
    nomeAmico.style.fontWeight = 'bold';
    nomeAmico.innerText = amici.nome;
    let canzone = document.createElement('p');
    canzone.style.fontSize = '12px';
    canzone.innerText = amici.canzone + '  -  '+ amici.cantante;
    let cd = document.createElement('p');
    cd.style.fontSize = '12px';
    cd.innerText = amici.album;

		let col3 = document.createElement("div");
		col3.classList.add("col-xl-3", "pt-3");
		let minuti = document.createElement("p");
		minuti.style.fontSize = "10px";
		minuti.innerText = amici.minuti;

		col1.appendChild(avatarAmico);
		col2.appendChild(nomeAmico);
		col2.appendChild(canzone);
		col2.appendChild(cd);
		col3.appendChild(minuti);

		row.appendChild(col1);
		row.appendChild(col2);
		row.appendChild(col3);

		let colAmici = document.getElementById("amici");

		colAmici.appendChild(row);
	});
}

popolaAmici();

//Sezione Playlist Colonna sx
const playlist = [

'Micini Tattici Nucleari',
'Gittame Mucho',
'Panic! at the Discord',
'Piripiripi',
'Il Pippo, il Pluto e il Paperino',
'Console Horror Vol.3',
'z-index 999 venuto dallo spazio',
'Bug Life',
'Playlist R&BG',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg'

]



function creaPlaylist () {


    let rowPlaylist = document.getElementById('playlist');
    let ul = document.createElement('ul');
    

    playlist.forEach(element => {
        let anchor = document.createElement('a');
        anchor.href= "#";
        anchor.style.textDecoration = 'none';
        anchor.classList.add('text-light');
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'text-dark');
        li.style.fontSize = '12px';
        anchor.innerHTML= element;
        li.appendChild(anchor);
        ul.appendChild(li);
        rowPlaylist.appendChild(ul);

    });
    console.log(playlist);
}

creaPlaylist();

