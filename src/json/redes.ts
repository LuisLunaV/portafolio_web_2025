interface IRedes{
  id:number,
  name:string,
  clase:string
}
interface IResponse{
  data:IRedes[]
}

const redes: IResponse={
  data:[{
    id:1,
    name:'Facebook',
    clase:'fab fa-facebook-square'
  },{
    id:2,
    name:'Twitter',
    clase:'fab fa-twitter-square'
  },{
    id:3,
    name:'GitHub',
    clase:'fab fa-github-square'
  },{
    id:4,
    name:'Telefono',
    clase:'fas fa-mobile-alt'
  },{
    id:5,
    name:'Mensaje',
    clase:'fas fa-envelope'
  }]
}

export{
  type IRedes,
  redes
}
