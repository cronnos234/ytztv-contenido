// ✅ YouTube Z TV - Contenido Principal (GitHub)
// Actualiza este archivo para cambiar películas, series, animes y músicas

window.DATA = {
  // ===== PELÍCULAS =====
  peliculas: [
    { 
      titulo: "John Wick", 
      year: "2014", 
      genre: "Acción | Thriller",
      rating: "7.4",
      overview: "Un ex asesino a sueldo regresa cuando unos gánsteres matan a su perro.",
      thumb: "thumbnails/john-wick.jpg",
      url: "https://ia801708.us.archive.org/9/items/otro-dia-para-matar-4-k-hdr/Otro%20dia%20para%20Matar%204K%20HDR.mp4"
    },
    { 
      titulo: "John Wick 2", 
      year: "2017", 
      genre: "Acción | Thriller",
      rating: "7.5",
      overview: "John Wick se ve obligado a huir cuando un antiguo asociado pone precio a su cabeza.",
      thumb: "thumbnails/john-wick-2.jpg",
      url: "https://archive.org/download/john-wick-chapter-2/John.Wick.Chapter.2.2017.1080p.mp4"
    },
    { 
      titulo: "John Wick 3", 
      year: "2019", 
      genre: "Acción | Thriller",
      rating: "7.4",
      overview: "John Wick debe luchar por su vida mientras huye de asesinos internacionales.",
      thumb: "thumbnails/john-wick-3.jpg",
      url: "https://archive.org/download/john-wick-chapter-3/John.Wick.Chapter.3.2019.1080p.mp4"
    },
    { 
      titulo: "John Wick 4", 
      year: "2023", 
      genre: "Acción | Thriller",
      rating: "7.8",
      overview: "John Wick descubre un camino para derrotar a la Alta Mesa.",
      thumb: "thumbnails/john-wick-4.jpg",
      url: "https://archive.org/download/john-wick-chapter-4/John.Wick.Chapter.4.2023.1080p.mp4"
    },
    { 
      titulo: "Mad Max: Furia en la Carretera", 
      year: "2015", 
      genre: "Acción | Aventura",
      rating: "8.1",
      overview: "En un mundo post-apocalíptico, Max se une a Furiosa para escapar de un tirano.",
      thumb: "thumbnails/mad-max.jpg",
      url: "https://archive.org/download/mad-max-fury-road/Mad.Max.Fury.Road.2015.1080p.mp4"    },
    { 
      titulo: "The Batman", 
      year: "2022", 
      genre: "Acción | Crimen",
      rating: "7.8",
      overview: "Batman investiga la corrupción en Gotham mientras enfrenta al Enigma.",
      thumb: "thumbnails/the-batman.jpg",
      url: "https://archive.org/download/the-batman-2022/The.Batman.2022.1080p.mp4"
    },
    { 
      titulo: "Dune", 
      year: "2021", 
      genre: "Ciencia Ficción | Aventura",
      rating: "8.0",
      overview: "Paul Atreides lidera una rebelión en el planeta desierto Arrakis.",
      thumb: "thumbnails/dune.jpg",
      url: "https://archive.org/download/dune-2021/Dune.2021.1080p.mp4"
    },
    { 
      titulo: "Dune: Parte Dos", 
      year: "2024", 
      genre: "Ciencia Ficción | Aventura",
      rating: "8.5",
      overview: "Paul se une a Chani y los Fremen para vengarse de los conspiradores.",
      thumb: "thumbnails/dune2.jpg",
      url: "https://archive.org/download/dune-part-two/Dune.Part.Two.2024.1080p.mp4"
    },
    { 
      titulo: "Oppenheimer", 
      year: "2023", 
      genre: "Drama | Biografía",
      rating: "8.3",
      overview: "La historia del científico que desarrolló la bomba atómica.",
      thumb: "thumbnails/oppenheimer.jpg",
      url: "https://archive.org/download/oppenheimer-2023/Oppenheimer.2023.1080p.mp4"
    },
    { 
      titulo: "Barbie", 
      year: "2023", 
      genre: "Comedia | Fantasía",
      rating: "7.0",
      overview: "Barbie y Ken viven en Barbieland hasta que descubren el mundo real.",
      thumb: "thumbnails/barbie.jpg",
      url: "https://archive.org/download/barbie-2023/Barbie.2023.1080p.mp4"
    }
    // ✅ AGREGA MÁS PELÍCULAS AQUÍ - Copia y pega un bloque {} y cambia los datos
  ],

  // ===== ANIMES =====  
  animes: [
    { 
  titulo: "Naruto", 
  year: "2002", 
  genre: "Acción | Aventura",
  rating: "8.4",
  overview: "Naruto Uzumaki es un ninja adolescente que busca convertirse en Hokage.",
  thumb: "thumbnails/naruto.jpg",

  temporadas: [

    { 
      nombre: "Temporada 1",
      inicio: 1,
      fin: 52,
      baseURL: "https://archive.org/download/naruto-temporada-1-espanol-latino/Naruto-"
    },

    { 
      nombre: "Temporada 2",
      inicio: 53,
      fin: 104,
      baseURL: "https://archive.org/download/naruto-temporada-2-espanol-latino/Naruto-"
    },

    { 
      nombre: "Temporada 3",
      inicio: 105,
      fin: 158,
      baseURL: "https://archive.org/download/naruto-temporada-3-espanol-latino_20250908/Naruto-"
    },

    { 
      nombre: "Temporada 4",
      inicio: 159,
      fin: 220,
      baseURL: "https://archive.org/download/naruto-temporada-4-espanol-latino/Naruto-"
    }

  ]
},
    { 
      titulo: "Naruto Shippuden", 
      year: "2007", 
      genre: "Acción | Aventura",
      rating: "8.7",
      overview: "Naruto regresa después de dos años de entrenamiento para rescatar a su amigo.",
      thumb: "thumbnails/naruto-shippuden.jpg",
      temporadas: [
        { nombre: "Temporada 1", inicio: 1, fin: 50, baseURL: "https://archive.org/download/naruto-shippuden-temporada-1-espanol-latino_202509/Naruto%20Shippuden-0" }
     },

    { 
      nombre: "Temporada 2",
      inicio: 33,
      fin: 53,
      baseURL: "https://archive.org/download/naruto-shippuden-temporada-2-espanol-latino/Naruto Shippuden-0"
     }

     ]
   },
    { 
      titulo: "Dragon Ball Z", 
      year: "1989", 
      genre: "Acción | Aventura",
      rating: "8.8",
      overview: "Goku y sus amigos defienden la Tierra de poderosos enemigos.",
      thumb: "thumbnails/dbz.jpg",
      temporadas: [
        { nombre: "Saga Saiyan", inicio: 1, fin: 35, baseURL: "https://archive.org/download/dbz-saiyan/DBZ-" }
      ]
    },
    { 
      titulo: "Attack on Titan", 
      year: "2013", 
      genre: "Acción | Drama",
      rating: "9.0",
      overview: "Humanidad lucha por sobrevivir contra gigantes devoradores.",
      thumb: "thumbnails/aot.jpg",
      temporadas: [
        { nombre: "Temporada 1", inicio: 1, fin: 25, baseURL: "https://archive.org/download/aot-s1/AOT-" }
      ]
    },
    { 
      titulo: "Demon Slayer", 
      year: "2019", 
      genre: "Acción | Sobrenatural",
      rating: "8.7",      overview: "Tanjiro se convierte en cazador de demonios para salvar a su hermana.",
      thumb: "thumbnails/demon-slayer.jpg",
      temporadas: [
        { nombre: "Temporada 1", inicio: 1, fin: 26, baseURL: "https://archive.org/download/demon-slayer/DS-" }
      ]
    }
    // ✅ AGREGA MÁS ANIMES AQUÍ
  ],

  // ===== SERIES =====
  series: [
    { 
      titulo: "Malcolm in the Middle", 
      year: "2000", 
      genre: "Comedia Negra | Comedia Fisica | Drama",
      rating: "8.5",
      overview: "La serie sigue a una familia de seis (más tarde siete) integrantes y está protagonizada por Malcolm (Frankie Muniz), un chico relativamente normal al cual se le descubre mediante una prueba en la primera temporada que tiene un cociente intelectual del nivel de un genio.",
      thumb: "thumbnails/Malcolm-in-the-Middle.jpg",
     temporadas: [

    { 
      nombre: "Temporada 1",
      temporada: 1,
      inicio: 1,
      fin: 16,
      baseURL: "https://dn710700.ca.archive.org/0/items/malcolm-el-de-en-medio-s-01_202412/Malcolm%20El%20De%20En%20Medio%20S01E0"
    },

    { 
      nombre: "Temporada 2",
      temporada: 2,
      inicio: 1,
      fin: 25,
      baseURL: "https://ia601508.us.archive.org/29/items/malcolm-el-de-en-medio-t-02/Malcolm%20El%20De%20En%20Medio%20T02E"
    },

    { 
      nombre: "Temporada 3",
      temporada: 3,
      inicio: 1,
      fin: 22,
      baseURL: "https://dn721807.ca.archive.org/0/items/malcolm-el-de-en-medio-t-03/Malcolm%20El%20De%20En%20Medio%20T03E"
    },

    { 
      nombre: "Temporada 4",
      temporada: 4,
      inicio: 1,
      fin: 22,
      baseURL: "https://dn790003.ca.archive.org/0/items/malcolm-el-de-en-medio-t-04/Malcolm%20El%20De%20En%20Medio%20T04E"
    },

    { 
      nombre: "Temporada 5",
      temporada: 5,
      inicio: 1,
      fin: 22,
      baseURL: "https://dn721603.ca.archive.org/0/items/malcolm-el-de-en-medio-t-05/Malcolm%20El%20De%20En%20Medio%20T05E"
    },

    { 
      nombre: "Temporada 6",
      temporada: 6,
      inicio: 1,
      fin: 22,
      baseURL: "https://dn721801.ca.archive.org/0/items/malcolm-el-de-en-medio-t-06/Malcolm%20El%20De%20En%20Medio%20T06E"
    },

    { 
      nombre: "Temporada 7",
      temporada: 7,
      inicio: 1,
      fin: 22,
      baseURL: "https://dn720004.ca.archive.org/0/items/malcolm-el-de-en-medio-t-07/Malcolm%20El%20De%20En%20Medio%20T07E"
    }

  ]
},
    { 
      titulo: "Breaking Bad", 
      year: "2008", 
      genre: "Crimen | Drama",
      rating: "9.5",
      overview: "Un profesor de química se convierte en productor de metanfetamina.",
      thumb: "thumbnails/breaking-bad.jpg",
      url: "https://archive.org/download/breaking-bad/BB.S01E01.1080p.mp4"
    },
    { 
      titulo: "Game of Thrones", 
      year: "2011", 
      genre: "Fantasía | Drama",
      rating: "9.2",
      overview: "Nobleza lucha por el control del Trono de Hierro en Westeros.",
      thumb: "thumbnails/got.jpg",
      url: "https://archive.org/download/got/GOT.S01E01.1080p.mp4"
    },
    { 
      titulo: "The Last of Us", 
      year: "2023", 
      genre: "Drama | Horror",
      rating: "8.8",
      overview: "Joel y Ellie atraviesan un Estados Unidos post-apocalíptico.",
      thumb: "thumbnails/tlou.jpg",
      url: "https://archive.org/download/tlou/TLU.S01E01.1080p.mp4"
    },
    { 
      titulo: "Stranger Things", 
      year: "2016", 
      genre: "Ciencia Ficción | Horror",
      rating: "8.7",
      overview: "Niños enfrentan fuerzas sobrenaturales en Hawkins, Indiana.",
      thumb: "thumbnails/stranger-things.jpg",
      url: "https://archive.org/download/stranger-things/ST.S01E01.1080p.mp4"
    },
    { 
      titulo: "The Witcher", 
      year: "2019",       genre: "Fantasía | Aventura",
      rating: "8.0",
      overview: "Geralt de Rivia, un cazador de monstruos, busca su destino.",
      thumb: "thumbnails/witcher.jpg",
      url: "https://archive.org/download/witcher/TW.S01E01.1080p.mp4"
    }
    // ✅ AGREGA MÁS SERIES AQUÍ
  ],

  // ===== MÚSICAS =====
  musicas: [
    { 
      titulo: "Linkin Park - Numb", 
      year: "2003", 
      genre: "Rock | Nu Metal",
      rating: "9.0",
      overview: "Video musical oficial de Linkin Park.",
      thumb: "thumbnails/numb.jpg",
      url: "https://archive.org/download/linkin-park-numb/Numb.1080p.mp4"
    }

    // ✅ AGREGA MÁS MÚSICAS AQUÍ
  ]
};
