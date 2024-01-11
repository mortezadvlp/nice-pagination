import React from 'react'
import PaginationBody from "./components/pagination-body";
import TypeContext from "./features/type-context";


export default function NicePagination({
  type = 'simple',  
  textClass = '',
  textSelectedClass = '', 
  borderClass = '', 
  bgSelectedClass = '',
  ...props
}) {

  return (
    <TypeContext.Provider 
          value={{type: type, borderClass: borderClass, bgSelectedClass: bgSelectedClass, textSelectedClass: textSelectedClass, textClass: textClass}} >
      <PaginationBody {...props} />
    </TypeContext.Provider>
  );
}