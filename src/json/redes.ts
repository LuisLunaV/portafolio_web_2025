interface IRedes{
  id:number;
  name:string;
  clase:string;
  url?:string;
  telefono?:number;
}
interface IResponse{
  data:IRedes[]
}

const redes: IResponse={
  data:[{
    id:1,
    name:'Facebook',
    clase:'fab fa-facebook-square',
    url:'https://www.facebook.com/luis.luna.35380/'
  },{
    id:2,
    name:'Twitter',
    clase:'fab fa-twitter-square',
    url:'https://x.com/hakerluy44'
  },{
    id:3,
    name:'GitHub',
    clase:'fab fa-github-square',
    url:'https://github.com/LuisLunaV'
  },{
    id:4,
    name:'Telefono',
    clase:'fas fa-mobile-alt',
    telefono:2212301084
  },{
    id:5,
    name:'Mensaje',
    clase:'fas fa-envelope',
  }]
}

export{
  type IRedes,
  redes
}
