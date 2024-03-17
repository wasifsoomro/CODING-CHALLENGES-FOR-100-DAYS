//create anonumous object in function and function return object

function make_album (album: {artsit: string, title:string, tracks?:number}) {
    console.log(album)
}

make_album({artsit: "Artist1", title: "Album1"})
make_album({artsit: "Artist2", title: "Album2"})
make_album({artsit: "Artist1", title: "Album1", tracks: 8})