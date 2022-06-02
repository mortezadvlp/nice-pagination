import React from 'react'
import { NicePagination } from 'nice-pagination'

const App = () => {
  return (
    <NicePagination initialPage={1} totalPages={10} minButtonsToDots={6}
      type='simple'
      onPageChanged={(p) => console.log("SelectedPage:", p)}  />
  );
}

export default App
