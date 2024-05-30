let libro=[
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: 59900,
        formato: "Tapa blanda",
        isbn: "9780307389732",
        descripcion: "La historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.",
        estado: "Nuevo",
        ubicacion: "Pasillo 3, Estante 1",
        fecha_publicacion: "1967",
        editorial: "Torre de papel",
        paginas: 471,
        dimensiones: "13 x 2.5 x 20 cm",
        peso: "0.5 kg"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Distopía",
        idioma: "Español",
        precio: 39900,
        formato: "Tapa blanda",
        isbn: "9780451524935",
        descripcion: "Una novela sobre un futuro totalitario y opresivo.",
        estado: "Nuevo",
        ubicacion: "Pasillo 1, Estante 2",
        fecha_publicacion: "1949",
        editorial: "Laguna Libros",
        paginas: 328,
        dimensiones: "12.9 x 1.8 x 19.8 cm",
        peso: "0.3 kg"
    },
    {
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        genero: "Ficción",
        idioma: "Español",
        precio: 44900,
        formato: "Tapa blanda",
        isbn: "9780061120084",
        descripcion: "Una historia sobre la injusticia racial en el sur de los Estados Unidos.",
        estado: "Nuevo",
        ubicacion: "Pasillo 3, Estante 4",
        fecha_publicacion: "1960",
        editorial: "Torre de papel",
        paginas: 336,
        dimensiones: "13.2 x 1.9 x 20 cm",
        peso: "0.32 kg"
    },
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Novela",
        idioma: "Español",
        precio: 69900,
        formato: "Tapa dura",
        isbn: "9788491051369",
        descripcion: "Una novela sobre las aventuras del ingenioso hidalgo Don Quijote de la Mancha.",
        estado: "Nuevo",
        ubicacion: "Pasillo 11, Estante 2",
        fecha_publicacion: "1605",
        editorial: "Luna libros",
        paginas: 1072,
        dimensiones: "15.4 x 5.6 x 23.4 cm",
        peso: "1.1 kg"
    },
    {
        titulo: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        genero: "Gótica",
        idioma: "Español",
        precio: 39900,
        formato: "Tapa blanda",
        isbn: "9780141439570",
        descripcion: "Una novela sobre un hombre que permanece joven mientras su retrato envejece.",
        estado: "Nuevo",
        ubicacion: "Pasillo 2, Estante 6",
        fecha_publicacion: "1890",
        editorial: "Laguna Libros",
        paginas: 254,
        dimensiones: "13.1 x 1.7 x 19.8 cm",
        peso: "0.21 kg"
    },
    {
        titulo: "La metamorfosis",
        autor: "Franz Kafka",
        genero: "Ficción",
        idioma: "Español",
        precio: 29900,
        formato: "Tapa blanda",
        isbn: "9780805209685",
        descripcion: "Una novela sobre la transformación de un hombre en un insecto gigante.",
        estado: "Nuevo",
        ubicacion: "Pasillo 5, Estante 1",
        fecha_publicacion: "1915",
        editorial: "Torre de papel",
        paginas: 201,
        dimensiones: "13.5 x 1.2 x 20.3 cm",
        peso: "0.18 kg"
    },
    {
        titulo: "El Proceso",
        autor: "Franz Kafka",
        genero: "Ficción",
        idioma: "Español",
        precio: 34900,
        formato: "Tapa blanda",
        isbn: "9780805209999",
        descripcion: "Una novela sobre la incomprensible persecución judicial de un hombre.",
        estado: "Nuevo",
        ubicacion: "Pasillo 5, Estante 2",
        fecha_publicacion: "1925",
        editorial: "Langosta editores",
        paginas: 255,
        dimensiones: "13.5 x 1.5 x 20.3 cm",
        peso: "0.22 kg"
    },
    {
        titulo: "La divina comedia",
        autor: "Dante Alighieri",
        genero: "Épica",
        idioma: "Español",
        precio: 64900,
        formato: "Tapa blanda",
        isbn: "9780140448955",
        descripcion: "Un poema épico sobre el viaje de Dante a través del Infierno, el Purgatorio y el Paraíso.",
        estado: "Nuevo",
        ubicacion: "Pasillo 10, Estante 1",
        fecha_publicacion: "1320",
        editorial: "Luna libros",
        paginas: 798,
        dimensiones: "13.2 x 3.8 x 20.3 cm",
        peso: "0.68 kg"
    },
    {
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        genero: "Ciencia ficción",
        idioma: "Español",
        precio: 39900,
        formato: "Tapa blanda",
        isbn: "9781451673319",
        descripcion: "Una novela sobre un futuro donde los libros están prohibidos y quemados.",
        estado: "Nuevo",
        ubicacion: "Pasillo 8, Estante 2",
        fecha_publicacion: "1953",
        editorial: "Luna libros",
        paginas: 249,
        dimensiones: "13.3 x 1.5 x 20.3 cm",
        peso: "0.2 kg"
    },
    {
        titulo: "El nombre de la rosa",
        autor: "Umberto Eco",
        genero: "Misterio",
        idioma: "Español",
        precio: 49900,
        formato: "Tapa blanda",
        isbn: "9780156001311",
        descripcion: "Una novela de misterio ambientada en un monasterio medieval.",
        estado: "Nuevo",
        ubicacion: "Pasillo 4, Estante 1",
        fecha_publicacion: "1980",
        editorial: "Torre de papel",
        paginas: 512,
        dimensiones: "13.5 x 2.5 x 20 cm",
        peso: "0.4 kg"
    },
    {
        titulo: "Crimen y castigo",
        autor: "Fiódor Dostoyevski",
        genero: "Ficción",
        idioma: "Español",
        precio: 54900,
        formato: "Tapa blanda",
        isbn: "9780143107637",
        descripcion: "Una novela sobre la angustia moral y psicológica de un joven que comete un asesinato.",
        estado: "Nuevo",
        ubicacion: "Pasillo 6, Estante 3",
        fecha_publicacion: "1866",
        editorial: "Langosta editores",
        paginas: 671,
        dimensiones: "13 x 3 x 20 cm",
        peso: "0.6 kg"
    },
    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romántica",
        idioma: "Español",
        precio: 29900,
        formato: "Tapa blanda",
        isbn: "9780141439518",
        descripcion: "Una novela sobre la vida y las dificultades de las mujeres en el siglo XIX.",
        estado: "Nuevo",
        ubicacion: "Pasillo 2, Estante 3",
        fecha_publicacion: "1813",
        editorial: "Langosta editores",
        paginas: 279,
        dimensiones: "12.9 x 1.7 x 19.8 cm",
        peso: "0.25 kg"
    },
    {
        titulo: "En busca del tiempo perdido",
        autor: "Marcel Proust",
        genero: "Ficción",
        idioma: "Español",
        precio: 89900,
        formato: "Tapa blanda",
        isbn: "9780143039938",
        descripcion: "Una novela que narra las experiencias y recuerdos del narrador.",
        estado: "Nuevo",
        ubicacion: "Pasillo 7, Estante 2",
        fecha_publicacion: "1913",
        editorial: "Laguna Libros",
        paginas: 4211,
        dimensiones: "15 x 6 x 23 cm",
        peso: "2.4 kg"
    },
    {
        titulo: "Los miserables",
        autor: "Victor Hugo",
        genero: "Histórica",
        idioma: "Español",
        precio: 74900,
        formato: "Tapa blanda",
        isbn: "9780451419439",
        descripcion: "Una novela sobre las luchas y redenciones de varias personas en la Francia del siglo XIX.",
        estado: "Nuevo",
        ubicacion: "Pasillo 9, Estante 3",
        fecha_publicacion: "1862",
        editorial: "Luna libros",
        paginas: 1488,
        dimensiones: "14 x 4 x 21 cm",
        peso: "1.5 kg"
    },
    {
        titulo: "El Gran Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Ficción",
        idioma: "Español",
        precio: 29900,
        formato: "Tapa blanda",
        isbn: "9780743273565",
        descripcion: "Una novela sobre la vida y las aspiraciones de Jay Gatsby en los años 20.",
        estado: "Nuevo",
        ubicacion: "Pasillo 1, Estante 4",
        fecha_publicacion: "1925",
        editorial: "Laguna Libros",
        paginas: 180,
        dimensiones: "13 x 1.3 x 20 cm",
        peso: "0.18 kg"
    },
    {
        titulo: "Cumbres borrascosas",
        autor: "Emily Brontë",
        genero: "Gótica",
        idioma: "Español",
        precio: 39900,
        formato: "Tapa blanda",
        isbn: "9780141439556",
        descripcion: "Una novela sobre la pasión y el odio entre las familias Earnshaw y Linton.",
        estado: "Nuevo",
        ubicacion: "Pasillo 2, Estante 4",
        fecha_publicacion: "1847",
        editorial: "Torre de papel",
        paginas: 416,
        dimensiones: "13 x 2 x 20 cm",
        peso: "0.3 kg"
    },
    {
        titulo: "Drácula",
        autor: "Bram Stoker",
        genero: "Terror",
        idioma: "Español",
        precio: 34900,
        formato: "Tapa blanda",
        isbn: "9780141439464",
        descripcion: "Una novela sobre el conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
        estado: "Nuevo",
        ubicacion: "Pasillo 3, Estante 3",
        fecha_publicacion: "1897",
        editorial: "Langosta editores",
        paginas: 418,
        dimensiones: "13 x 2 x 20 cm",
        peso: "0.32 kg"
    },
    {
        titulo: "El guardián entre el centeno",
        autor: "J.D. Salinger",
        genero: "Ficción",
        idioma: "Español",
        precio: 29900,
        formato: "Tapa blanda",
        isbn: "9780316769488",
        descripcion: "Una novela sobre la vida de Holden Caulfield y su crítica a la sociedad.",
        estado: "Nuevo",
        ubicacion: "Pasillo 4, Estante 2",
        fecha_publicacion: "1951",
        editorial: "Laguna Libros",
        paginas: 214,
        dimensiones: "12.9 x 1.6 x 19.8 cm",
        peso: "0.2 kg"
    },
    {
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Español",
        precio: 99900,
        formato: "Tapa dura",
        isbn: "9780544003415",
        descripcion: "Una novela épica sobre el viaje para destruir el Anillo Único.",
        estado: "Nuevo",
        ubicacion: "Pasillo 12, Estante 1",
        fecha_publicacion: "1954",
        editorial: "Langosta editores",
        paginas: 1178,
        dimensiones: "15 x 5 x 23 cm",
        peso: "1.2 kg"
    },
    {
        titulo: "Anna Karenina",
        autor: "León Tolstói",
        genero: "Ficción",
        idioma: "Español",
        precio: 49900,
        formato: "Tapa blanda",
        isbn: "9780143035008",
        descripcion: "Una novela sobre la trágica vida de Anna Karenina y su amor prohibido.",
        estado: "Nuevo",
        ubicacion: "Pasillo 7, Estante 3",
        fecha_publicacion: "1877",
        editorial: "Luna libros",
        paginas: 964,
        dimensiones: "13 x 3 x 20 cm",
        peso: "0.9 kg"
    }
]



function agregarLibro(libro) {
    titulo=prompt("ingrese el titulo del libro")
    autor=prompt("ingrese el autor del libro")
    genero=prompt("ingrese el genero del libro")
    idioma=prompt("ingrese el idioma del libro")
    precio=prompt(parseFloat("ingrese el precio del libro"))
    formato=prompt("ingrese el formato del libro")
    isbn=prompt("ingrese el isbn del libro")
    descripcion=prompt("ingrese la descripcion del libro")
    estado=prompt("ingrese el estado del libro")
    ubicacion=prompt("ingrese la ubicacion del libro")
    fecha_publicacion=prompt("ingrese la fecha de publicacion del libro")
    editorial=prompt("ingrese el editorial del libro")
    paginas=prompt(parseFloat("ingrese las paginas del libro"))
    dimensiones=prompt("ingrese las dimensiones del libro")
    peso=prompt("ingrese el peso del libro")
    libro.push({titulo,autor,genero,idioma,precio,formato,isbn,descripcion,estado,ubicacion,fecha_publicacion,editorial,paginas,dimensiones,peso})
    console.table(libro)
}

function mostrarLibro(libro) {
    console.table(libro)
}

function eliminarLibro(libro) {
    libro.pop()
    console.table(libro)
}

let lista0 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    precio: libro.precio,
};
});



let lista1 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    genero: libro.genero,
    paginas: libro.paginas,
    precio: libro.precio,
};
});



let lista2 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    formato: libro.formato,
    idioma: libro.idioma,
    isbn: libro.isbn,
};
});



let lista3 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    autor: libro.autor,
    descripcion: libro.descripcion,
    estado: libro.estado,
    precio: libro.precio,
};
});



let lista4 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    dimensiones: libro.dimensiones,
    peso: libro.peso,
    fecha_publicacion: libro.fecha_publicacion,
};
});



let lista5 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    ubicacion: libro.ubicacion,
    editorial: libro.editorial,
    genero: libro.genero,
};
});



let lista6 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    descripcion: libro.descripcion,
    editorial: libro.editorial,
    fecha_publicacion: libro.fecha_publicacion,
};
});


let lista7 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    precio: libro.precio,
};
});



let lista8 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    paginas: libro.paginas,
    idioma: libro.idioma,
    precio: libro.precio,
};
});



let lista9 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    fecha_publicacion: libro.fecha_publicacion,
    editorial: libro.editorial,
    descripcion: libro.descripcion,
};
});



let lista10 = libro.map((libro) => {
    return {
    titulo: libro.titulo,
    peso: libro.peso,
    paginas: libro.editorial,
    formato: libro.formato,
};
});

let agregarDescento = libro.map((libro) => {
    return {
        ...libro,
        descuento: 20
    };
    });

let libroConDescuentos = agregarDescento.map((libro) => {
    return {
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        precio: libro.precio,
        descuento: libro.descuento
    };
});

let librosCaros = libro.filter((libro) => {
    return libro.precio > 50000;
})

let librosConMasPaginas = libro.filter((libro) => {
    return libro.paginas > 700
})

let librosConMasPaginasX = librosConMasPaginas.map((libro) => {
    return {
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        paginas: libro.paginas,
    };
});

let paginasMayorMenor= libro.sort((a,b) => b.paginas - a.paginas);

let LibrosCarosResumidos = libro
.filter((libro) => {
    return libro.precio > 50000;
})
.map((titulo) => {
    return {
    titulo: titulo.titulo,
    autor: titulo.autor,
    precio: titulo.precio
};
});

let menosPaginasResumidas = libro
.filter((libro) => {
    return libro.paginas < 100;
})
.map((libro) => {
    return {
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    paginas: libro.paginas
};
}); 

let LibrosCarosMayorMenor = libro
.filter((libro) => {
    return libro.precio > 50000;
})
.map((titulo) => {
    return {
    titulo: titulo.titulo,
    autor: titulo.autor,
    precio: titulo.precio
}
})
.sort((a,b) => b.precio - a.precio);

let paginasMayorMenorResumidos = libro
.sort((a,b) => b.paginas - a.paginas)
.map((libro) => {
    return {
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        paginas: libro.paginas
}
})



let msg
let msg2
let msg3
let option
let eliminar
function inicio() {

do {
    
    msg = "Elija una opcion\n"
    msg += "1. mostrar libros \n"
    msg += "2. eliminar libro \n"
    msg += "3. agregar libro \n"
    msg += "4. Listar libros \n"
    msg += "5. Los resumenes de este segmento \n"

    option=parseInt(prompt(msg))
    switch (option) {
        case 1:
            mostrarLibro(libro)
        break;
        case 2:
            eliminarLibro(libro)
        break;
        case 3:
            agregarLibro(libro)
        break;
        case 4:
            msg2 = "Elija una opcion\n"
            msg2 += "1. lista de libros \n"
            msg2 += "2. 10 iteraciones diferentes \n"
            msg2 += "3. lista de libros con descuento \n"

            let option_listas=parseInt(prompt(msg2))
            switch (option_listas) {
                case 1 :
                    console.table(lista0)
                    break;
                case 2 :
                    console.table(lista1)
                    console.table(lista2)
                    console.table(lista3)
                    console.table(lista4)
                    console.table(lista5)
                    console.table(lista6)
                    console.table(lista7)
                    console.table(lista8)
                    console.table(lista9)
                    console.table(lista10)
                    break;
                case 3 :
                    console.table(libroConDescuentos)
                    break;
                default:
                    alert("ingrese un dato valido")
                    break;
            }
        break;
        case 5 :
            msg3 = "1. libros caros \n"
            msg3 += "2. libros con mas paginas \n"
            msg3 += "3. libros con paginas de mayor a menor\n"
            msg3 += "4. libros con precio mayor a 50000 \n"
            msg3 += "5. libros con paginas menor a 100 \n"
            msg3 += "6. libros con precio mayor a 50000 y de mayor a menor  \n"
            msg3 += "7. libros con paginas mayor a menor resumidas y por numero mas alto\n"

            

            let option_filter=parseInt(prompt(msg3))
            switch (option_filter) {
                case 1 :
                    console.table(librosCaros)
                    break;
                case 2 :
                    console.table(librosConMasPaginasX)
                    break;
                case 3 :
                    console.table(paginasMayorMenor)
                    break;
                case 4 :
                    console.table(LibrosCarosResumidos)
                    break;
                case 5 :
                    console.table(menosPaginasResumidas)
                    break;
                case 6 :
                    console.table(LibrosCarosMayorMenor)   
                     break;    
                case 7 :
                    console.table(paginasMayorMenorResumidos)
                    break;    
                default :
                alert("ingrese un dato valido")
                    break;
                }
            break;       
        default :
            alert("ingrese un dato valido")
            break;
             
    } } while (option = 0);}

    
let continuar
do {
    inicio()
     continuar = prompt("Desea volver al menu")
} while (continuar === "si");


