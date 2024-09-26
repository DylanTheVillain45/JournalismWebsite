import React from 'react'

function ArticleThumbNail(key, id, title, author,content, img, date) {
  return (
    <div className='px-4 py-2 border-2'>
      <img src={img} alt="sfd" />
    </div>
  )
}

export default ArticleThumbNail