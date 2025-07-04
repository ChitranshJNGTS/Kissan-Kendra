import React from 'react'
import ComingSoon from '../components/ComingSoon'
import BlogContent from '../components/BlogContent'
import Breadcrumb from '../components/BreadCrumb'

const Blog = () => {
  return (
    <>
      <Breadcrumb title='Blog'
        paths={[{ name: "blog" }]} />
      <BlogContent />
    </>
  )
}

export default Blog
