interface ITecnologia {
  img: string
  name: string
  categoria: string
  information: string
}

interface IResponseData {
  response: {
    tecnologias: ITecnologia[]
  }
}

const tecnologias: IResponseData = {
  response: {
    tecnologias: [
      {
        img: 'html.svg',
        name: 'HTML',
        categoria: 'front',
        information: `Lenguaje de marcado de hiper texto, se utiliza para estructurar
           paginas web permitiendo organizar texto, imágenes, enlaces y otros elementos en una página. Es la base de cualquier sitio web.`,
      },
      {
        img: 'css.svg',
        name: 'CSS',
        categoria: 'front',
        information:
          'Hojas de estilo en cascada, se utiliza para dar estilo, diseño y buena presentacion a los elementos de marcado html.',
      },
      {
        img: 'bootstrap.svg',
        name: 'Bootstrap',
        categoria: 'front',
        information: `Bootstrap es una biblioteca multiplataforma o conjunto de
              herramientas de código abierto para diseño de sitios y
              aplicaciones web.`,
      },
      {
        img: 'javascript.svg',
        name: 'JavaScript',
        categoria: 'front',
        information: `Es un lenguaje de programacion ligero, se define como orientado a
              objetos, imperativo, debilmente tipado y dinamico.`,
      },
      {
        img: 'TS.svg',
        name: 'TypeScript',
        categoria: 'front',
        information: `TypeScript mejora la escalabilidad, mantenibilidad y seguridad del
              código JavaScript a través de datos tipados, interfaces,
              clases, etc.`,
      },
      {
        img: 'vue.svg',
        name: 'Vue.js',
        categoria: 'front',
        information: `Vue.js es un framework JavaScript progresivo para construir interfaces modernas y dinámicas. Fácil de integrar, escalable, ideal para
        aplicaciones web interactivas`,
      },
      {
        img: 'node.svg',
        name: 'Node.js',
        categoria: 'back',
        information: `Node.js es una plataforma de código abierto basada en JavaScript
              que se utiliza para crear aplicaciones web rápidas y escalables en
              el lado del servidor.`,
      },
      {
        img: 'express.svg',
        name: 'Express.js',
        categoria: 'back',
        information: `Express.js es un framework minimalista y flexible para Node.js, ideal para crear APIs y aplicaciones web rápidas y escalables con enrutamiento y middleware eficientes.`,
      },
      {
        img: 'nest.svg',
        name: 'NestJS',
        categoria: 'back',
        information: `NestJS: Framework Node.js progresivo para construir aplicaciones backend eficientes y escalables usando TypeScript, con soporte nativo para arquitectura modular.`,
      },
      {
        img: 'php.svg',
        name: 'PHP',
        categoria: 'back',
        information: `PHP es un lenguaje de programación de código abierto y popular para
              la creación de aplicaciones web dinámicas y sitios web.`,
      },
      {
        img: 'laravel.svg',
        name: 'Laravel',
        categoria: 'back',
        information: `Laravel es un framework PHP moderno y elegante, ideal para crear aplicaciones web con enrutamiento, autenticación y bases de datos simplificados.`,
      },
      {
        img: 'csharp.svg',
        name: 'C# (C SHARP)',
        categoria: 'back',
        information: `C# es un lenguaje de programación moderno, orientado a objetos y con seguridad de tipos, creado por Microsoft para desarrollar aplicaciones robustas.`,
      },
      {
        img: 'mysql.svg',
        name: 'MySQL',
        categoria: 'db',
        information: `Sistema de gestion de base de datos relacional, es uno de los
              gestores de datos mas popular del mundo, todo para entornos de
              desarrollo web.`,
      },
      {
        img: 'sqlserver.svg',
        name: 'SQL Server',
        categoria: 'db',
        information: `SQL Server es un sistema de gestión de bases de datos relacional creado por Microsoft, diseñado para almacenar, recuperar y analizar datos de manera eficiente y segura ideal para aplicaciones empresariales.`,
      },
      {
        img: 'sqlite.svg',
        name: 'SQLite',
        categoria: 'db',
        information: `
        SQLite es un sistema de gestión de bases de datos relacional, ligero y sin servidor, ideal para aplicaciones móviles, embebidas y pequeños proyectos.
       `,
      },
      {
        img: 'git.svg',
        name: 'Git',
        categoria: 'control',
        information: `Es un software de control de versiones pensando en la eficiencia,
              la confiabilidad y la compatibilidad de un gran numero de archivos
              de codigo fuente.`,
      },
      {
        img: 'github.svg',
        name: 'GitHub',
        categoria: 'control',
        information: `Es una plataforma de desarrollo colaborativo basada en Git, que permite alojar, gestionar y compartir proyectos de código, facilitando el trabajo en equipo, el control de versiones y la integración continua.`,
      },
      {
        img: 'ubuntu.svg',
        name: 'Ubuntu',
        categoria: 'sistema_operativo',
        information: `
        Ubuntu es un sistema operativo gratuito basado en Linux, conocido por su facilidad de uso, seguridad y soporte comunitario amplio.
        Es ideal para usuarios personales, desarrolladores y empresas que buscan alternativas libres a otros sistemas operativos.
        `,
      },
      {
        img: 'debian.svg',
        name: 'Debian',
        categoria: 'sistema_operativo',
        information: `
      Debian es un sistema operativo libre y estable basado en Linux, conocido por su fiabilidad, seguridad y amplio soporte para múltiples arquitecturas.
       Es ampliamente utilizada en servidores, sistemas embebidos y por usuarios que valoran el control y la personalización.
        `,
      },
      {
        img: 'windowsserver.svg',
        name: 'Windows Server',
        categoria: 'sistema_operativo',
        information: `Windows Server es un sistema operativo de Microsoft diseñado para gestionar redes empresariales, alojar servicios críticos y administrar recursos centralizados como usuarios y datos.`,
      },
      {
        img: 'bash.svg',
        name: 'Bash',
        categoria: 'control',
        information: `
Bash es un intérprete de comandos para sistemas Unix/Linux, usado para interactuar con el sistema operativo y automatizar tareas mediante scripts.
Es una herramienta fundamental para la gestión del sistema y el desarrollo en entornos Unix.
        `,
      },
      {
        img: 'postman.png',
        name: 'Postman',
        categoria: 'control',
        information: `
Postman es una plataforma colaborativa para desarrollo de APIs. Permite diseñar, probar, documentar y monitorear solicitudes HTTP de forma intuitiva.
        `,
      },
    ],
  },
}

export { tecnologias, type ITecnologia, type IResponseData }
