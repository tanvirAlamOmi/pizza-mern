import React from 'react'

export default function ErrorComponent({message, icon = false}) {
  return (
    <div>
      {icon && (
        <img 
            src='https://www.pngall.com/wp-content/uploads/2017/05/Alert-PNG-HD.png' 
            height= "150px"
        />
      )}
        
        <div className={`alert alert-danger ${icon ? 'mt-5': ''}`} role="alert">
            {message}
        </div>
    </div>
  )
}
