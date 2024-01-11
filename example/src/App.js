import React from 'react'
import NicePagination from 'nice-pagination'
import 'nice-pagination/dist/index.css'

const App = () => {
  return (
    <div >
      <NicePagination initialPage={1} totalPages={10} minButtonsToDots={6}
        type='simple'
        onPageChanged={(p) => console.log("SelectedPage:", p)}  />
        
      <NicePagination initialPage={1} totalPages={10} minButtonsToDots={6}
        type='square'
        onPageChanged={(p) => console.log("SelectedPage:", p)}  />
        
      <NicePagination initialPage={1} totalPages={10} minButtonsToDots={6}
        type='circle' 
        borderClass='bc' bgSelectedClass='bgsc' textSelectedClass='tsc'
        onPageChanged={(p) => console.log("SelectedPage:", p)}  />

      <NicePagination initialPage={1} totalPages={10} minButtonsToDots={6}
        type='circle'className='bg'  
        textClass='colorGreen' borderClass='bc' bgSelectedClass='bgsc' textSelectedClass='tsc'
        onPageChanged={(p) => console.log("SelectedPage:", p)}  />
    </div>
    
  );
}

export default App
