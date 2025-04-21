interface IServicios{
  clase_box:string;
  icon_class:string;
  nombre:string;
  description:string;
}

interface IResponse{
  data:IServicios[];
}
const servicios:IResponse = {
data:[
  {
    clase_box:'box-uno',
    icon_class:'fa-code',
    nombre:'Front-end developer',
    description:`Te ofrezco seguridad y cumplimiento al crear, diseñar, actualizar
                 y mantener portales web avanzados del lado del cliente (Front-end)
                 a través de: HTML5, CSS3, JavaScript y REACT JS. Te encantará tu
                 sitio web.`
  },{
    clase_box:'box-dos',
    icon_class:'fa-mobile-alt',
    nombre:'Responsive web design',
    description:`Su sitio se mostrará correctamente en cualquier dispositivo,
                 incluidas computadoras de escritorio, tabletas y teléfonos
                 móviles. Un buen y atractivo diseño web lo ayuda a mantener sus
                 clientes potenciales en su sitio, que es la cara digital de su
                 negocio.`
  },{
    clase_box:'box-tres',
    icon_class:'fa-database',
    nombre:'Backend developer',
    description:`Como desarrollador backend, me he estado preparando para construir
                 APIs (Interfaces de Programación de Aplicaciones), manteniendo buenas
                 prácticas de código, actualmente trabajo con Node.js y MySql.`
  },
]
}

export {
  servicios,
  type IServicios
}
