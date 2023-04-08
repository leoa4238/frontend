import { MutableRefObject } from "react";
import { Query } from "./generated/types";

export interface IBoardDetailPresenterProps{
  data: Pick<Query, "fetchBoard">;
  onUpdateClick:()=>void,
}

export interface IBoardListPresenterProps{
  onNewBoard: ()=>void,
  onButtonClick:(a:number)=>void,
  data: Pick<Query, "fetchBoards">;
}

export interface IRowItemProps{
  type:'number'|'title'|'date'|'writer'
}

export interface IBoardWriteProps{
  data?:Pick<Query,"fetchBoard">;
  isEdit?:boolean;
  
}

export interface IBoardWritePresenterProps{
  inputRefs:MutableRefObject<HTMLInputElement[]>,
  onButton1:()=>void,
  isEdit?:boolean,
  data?:any
}