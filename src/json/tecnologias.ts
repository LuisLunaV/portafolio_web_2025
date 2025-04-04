interface ITecnologia {
  img: string
  name: string
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
        information:
          'Lenguaje de marcado de hiper texto, se utiliza para estructurarpaginas web y su contenido.',
      },
      {
        img: 'css.svg',
        name: 'CSS',
        information:
          'Hojas de estilo en cascada, se utiliza para dar estilo, diseño y buena presentacion a los elementos de marcado html.',
      },
      {
        img: 'bootstrap.svg',
        name: 'Bootstrap',
        information: `Bootstrap es una biblioteca multiplataforma o conjunto de
              herramientas de código abierto para diseño de sitios y
              aplicaciones web.`,
      },
      {
        img: 'javascript.svg',
        name: 'JavaScript',
        information: `Es un lenguaje de programacion ligero, se define como orientado a
              objetos, imperativo, debilmente tipado y dinamico.`,
      },
      {
        img: 'git.svg',
        name: 'Git',
        information: `Es un software de control de versiones pensando en la eficiencia,
              la confiabilidad y la compatibilidad de un gran numero de archivos
              de codigo fuente.`,
      },
      {
        img: 'github.svg',
        name: 'GitHub',
        information: `Es un servicio de hosting para alojar proyectos y codigo fuente
              utilizando el sistema de control de versiones Git.`,
      },
      {
        img: 'mysql.svg',
        name: 'MySQL',
        information: `Sistema de gestion de base de datos relacional, es uno de los
              gestores de datos mas popular del mundo, todo para entornos de
              desarrollo web.`,
      },
      {
        img: 'node.svg',
        name: 'Node.js',
        information: `Node.js es una plataforma de código abierto basada en JavaScript
              que se utiliza para crear aplicaciones web rápidas y escalables en
              el lado del servidor.`,
      },
      {
        img: 'TS.svg',
        name: 'TypeScript',
        information: `TypeScript mejora la escalabilidad, mantenibilidad y seguridad del
              código JavaScript a través de datos tipados, interfaces,
              clases, etc.`,
      },
      {
        img: 'php.svg',
        name: 'PHP',
        information: `PHP es un lenguaje de programación de código abierto y popular para
              la creación de aplicaciones web dinámicas y sitios web.`,
      },
      {
        img: 'laravel.svg',
        name: 'Laravel',
        information: `Laravel es un framework PHP moderno y elegante, ideal para crear aplicaciones web con enrutamiento, autenticación y bases de datos simplificados.`,
      },
      {
        img: 'vue.svg',
        name: 'Vue.js',
        information: `Vue.js es un framework JavaScript progresivo para construir interfaces modernas y dinámicas. Fácil de integrar, escalable, ideal para
        aplicaciones web interactivas`,
      },
      {
        img: 'express.svg',
        name: 'Express.js',
        information: `Express.js es un framework minimalista y flexible para Node.js, ideal para crear APIs y aplicaciones web rápidas y escalables con enrutamiento y middleware eficientes.`,
      },
    ],
  },
}

export{
  tecnologias,
  type ITecnologia,
  type IResponseData
}
