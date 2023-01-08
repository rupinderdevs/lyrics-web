import React, { useState } from 'react'

export default function Pagination ({totalPages,currentPage,onPageChange}) {
  let [activePage, setactivePage] = useState(currentPage)

  let count = []
  
  for (let i = 1; i <= totalPages; i++) {
    count.push(i)
  }

  const hasNext = () => {
    setactivePage(activePage = activePage + 1)
    onPageChange(activePage)
  }
  const hasPrv = () => {
    setactivePage(activePage = activePage - 1)
    onPageChange(activePage)
  }

  let classes =
    'py-2 px-3 leading-tight text-shade-white/[0.80] hover:bg-shade-red hover:text-tonez-blue/[.90] bg-white/[.10] hover:text-tonez-blue/[.90] transition-all duration-500'
  return (
    <nav aria-label='Page navigation example'>
      <ul className='flex items-center justify-center'>
        <li className={activePage <= 1 ? 'opacity-10' : ''}>
          <button
            onClick={hasPrv}
            className={
              classes +
              ' rounded-tl-lg rounded-bl-lg ' +
              (activePage <= 1 ? 'cursor-not-allowed' : '')
            }
            disabled={activePage <= 1 ? true : false}
          >
          &#x2B05;  Previous
          </button>
        </li>
        {count.map((data, key) => (
          <li key={key}>
            {' '}
            <button
              onClick={() => {setactivePage((activePage = data))
                onPageChange(activePage)
              }}
              className={
                classes +
                ' ' +
                (activePage == data
                  ? 'bg-tonez-white/[.90] text-tonez-blue/[.90]'
                  : '')
              }
            >
              {data}
            </button>{' '}
          </li>
        ))}

        <li className={activePage >= totalPages ? 'opacity-10' : ''}>
          <button
            onClick={hasNext}
            className={
              classes +
              ' rounded-tr-lg rounded-br-lg ' +
              (activePage >= totalPages ? 'cursor-not-allowed' : '')
            }
            disabled={activePage >= totalPages ? true : false}
            >

           Next <span> &#10143; </span>
           {/* https://www.w3schools.com/charsets/ref_utf_dingbats.asp */}
          </button>
        </li>
      </ul>
    </nav>
  )
}
