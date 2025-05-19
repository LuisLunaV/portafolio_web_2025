interface ICompanies{
  id:number;
  img:string;
}
interface IResponse{
  data:ICompanies[]
}

 const companies: IResponse ={
  data:[
    {
      id:1,
      img:'faro.svg',
    },
    {
      id:2,
      img:'panda.svg',
    },
    {
      id:3,
      img:'shsh.svg',
    },
    {
      id:4,
      img:'toks.svg',
    },
    {
      id:5,
      img:'office_depot.svg'
    }
  ]
}

export{
  type ICompanies,
  companies
}
