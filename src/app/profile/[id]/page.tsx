import React from 'react'

function page({params}:any) {
  return (
    <div>Userprofile
        <h1>userprofile {params.id}

        </h1>
    </div>
  )
}

export default page