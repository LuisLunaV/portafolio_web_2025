interface Icons{
clase:string;
color:string;
url?:string;
}

interface IProyectos {
  id: number
  name: string
  description: string
  carpeta: string
  img: string[]
  technologies: Icons[]
}

interface IResponse {
  data: IProyectos[]
}
const proyectos: IResponse = {
  data: [
    {
      id: 1,
      name: 'Drive-Thrue Queretaro',
      description: 'jdkslajdklsajdklsajdkljsakldjaklsjdklasjkldjaklsjkl',
      carpeta: 'drive-thrue',
      img: [
        'img-cero.jpeg',
        'img-uno.jpeg',
        'img-dos.jpeg',
        'img-tres.jpeg',
        'img-cuatro.jpeg',
        'img-cinco.jpeg',
      ],
      technologies: [
        {
         clase:'fa-html5',
         color:'color-blanco'
        },
        {
          clase:'fa-css3',
          color:'color-blanco'
        },
        {
         clase:'fa-js',
         color:'color-blanco'
        },
        {
          clase:'fa-bootstrap',
          color:'color-blanco'
         },
         {
          clase:'fa-node-js',
          color:'color-blanco'
         },
         {
          clase:'fa-github',
          color:'color-blanco',
          url:'https://github.com/LuisLunaV/Pedidos-drivethru-shake-shack'
         }
      ]
    },
    {
      id: 2,
      name: 'Tablero de turnos',
      description: 'jdkslajdklsajdklsajdkljsakldjaklsjdklasjkldjaklsjkl',
      carpeta: 'turnos-shake',
      img: ['img-cero.png', 'img-uno.jpg', 'img-dos.jpg', 'img-tres.jpg'],
      technologies: [
        {
         clase:'fa-html5',
         color:'color-blanco'
        },
        {
          clase:'fa-css3',
          color:'color-blanco'
        },
        {
         clase:'fa-js',
         color:'color-blanco'
        },
        {
          clase:'fa-bootstrap',
          color:'color-blanco'
         },
         {
          clase:'fa-node-js',
          color:'color-blanco'
         },
         {
          clase:'fa-github',
          color:'color-blanco',
          url:'https://github.com/LuisLunaV/Pedidos-drivethru-shake-shack'
         }
      ]
    },
    {
      id: 3,
      name: 'Sistema para envio de NIPs',
      description: 'jdkslajdklsajdklsajdkljsakldjaklsjdklasjkldjaklsjkl',
      carpeta: 'consultas-nip',
      img: [
        'img-cero.png',
        'img-uno.png',
        'img-dos.png',
        'img-tres.png',
        'img-cuatro.png',
        'img-cinco.png',
      ],
      technologies: [
        {
         clase:'fa-html5',
         color:'color-blanco'
        },
        {
          clase:'fa-css3',
          color:'color-blanco'
        },
        {
         clase:'fa-js',
         color:'color-blanco'
        },
        {
          clase:'fa-bootstrap',
          color:'color-blanco'
         },
         {
          clase:'fa-node-js',
          color:'color-blanco'
         },
         {
          clase:'fa-github',
          color:'color-blanco',
          url:'https://github.com/LuisLunaV/Pedidos-drivethru-shake-shack'
         }
      ]
    },
    {
      id: 4,
      name: 'Sistemas de entrada',
      description: 'jdkslajdklsajdklsajdkljsakldjaklsjdklasjkldjaklsjkl',
      carpeta: 'ODM-Officedepot',
      img: [
        'img-cero.png',
        'img-uno.png',
        'img-dos.png',
        'img-tres.png',
        'img-cuatro.png',
        'img-cinco.png',
      ],
      technologies: [
        {
         clase:'fa-html5',
         color:'color-blanco'
        },
        {
          clase:'fa-css3',
          color:'color-blanco'
        },
        {
         clase:'fa-js',
         color:'color-blanco'
        },
        {
          clase:'fa-bootstrap',
          color:'color-blanco'
         },
         {
          clase:'fa-php',
          color:'color-blanco'
         },
         {
          clase:'fa-laravel',
          color:'color-blanco'
         },
         {
          clase:'fa-github',
          color:'color-blanco',
          url:'https://github.com/LuisLunaV/Pedidos-drivethru-shake-shack'
         }
      ]
    },
  ],
}

export { proyectos, type IProyectos , type Icons}
