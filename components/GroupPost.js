import React, { useState, useEffect } from 'react'
import SingleLyrics from './SingleLyrics'
import GroupPostSkelton from './skelton/GroupPostSkelton'
import Link from 'next/link'

export default function GroupPost ({
  data,
  title,
  loading,
  numberCols = '3',
  seeAllbtn,
  perPage = 2,
  LoadMore,
  onPageChange,
  activePage = 1,
  showNumber
}) {
  // const [btnLoading, setBtnLoading] = useState(false)
  if (loading)
    return (
      <GroupPostSkelton
        perPage={perPage}
        title={title}
        numberCols={numberCols}
      />
    )
  return (
    <div className='text-center my-10 md:my-20 text-white '>
      <span className='text-3xl xl:text-4xl font-bold uppercase'>Popular Lyrics</span>
      <div
        className={`text-left my-10 md:my-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-${numberCols} gap-8`}
      >
        {data
          ? data.map((d, key) => {
              return (
                <SingleLyrics
                  key={key}
                  title={d.title.rendered}
                  slug={d.slug}
                  id={d.id}
                  Url={d.source_url}
                  date={d.date}
                  showNumber={showNumber}
                />
              )
            })
          : 'nodata'}
      </div>
      {/* {seeAllbtn ? (
        <Link href='/latest'>
          <a className='bg-shade-red/[.30] text-white mx-auto w-1/3 my-4 block text-center px-10 py-4 rounded-full'>
            See All
          </a>
        </Link>
      ) : (
        <Button
          key={1}
          Text='Load More'
          onClick={LoadMore}
          isLoading={btnLoading}
        />
        <div>
          <Pagination totalPages={totalPages} currentPage={activePage} onPageChange={onPageChange} />
        </div>
        ''
      )} */}
    </div>
  )
}
