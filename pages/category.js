import React, { useState } from 'react'
import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import GroupPost from 'components/GroupPost'

function Category ({ data }) {
  return (
    <>
      <Layout title='Category - folks lyrics'>
        <div>
          <PageHeader title='Category' />
        </div>
        <div>
          { data.map((x,key) => {
            return <GroupPost key={key} data={x.alldata} title={x.catoryName} /> 
          } )}
         
        </div>
      </Layout>
    </>
  )
}


export default Category
