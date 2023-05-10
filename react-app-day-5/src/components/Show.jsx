import React from 'react'

function Show({text}) {
    console.log("rendering in show", text);

  return (
    <div>{text}</div>
  )
}

export default React.memo(Show)
// export default Show