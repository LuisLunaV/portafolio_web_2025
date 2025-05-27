 interface IMensajes {
  Msg_email: string;
  Msg_texto: string;
}


// export interface TopLevel {
//   errors: Error[];
// }

 interface IErrorMsg {
  type:     string;
  value:    string;
  msg:      string;
  path:     string;
  location: string;
}

export{
  type IMensajes,
  type IErrorMsg
}
