// Si sabes la estructura del error
interface IErrorItem  {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}

interface IErrors {
  errors: IErrorItem[]; // Array de objetos con esa estructura
}

export{
 type IErrors
}
