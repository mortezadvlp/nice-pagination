import PaginationBody from "./components/pagination-body";
import TypeContext from "./features/type-context";


export default function NicePagination({type = 'simple', ...props}) {

  return (
    <TypeContext.Provider value={type} >
      <PaginationBody {...props} />
    </TypeContext.Provider>
  );
}