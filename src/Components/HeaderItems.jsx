import React from 'react'

function HeaderItems({name, icon}) {
  return (
      <div
          className={'text-uppercase flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8  hover:underline-width-2'}>
    <icon>{icon}</icon>
    <h2>{name.toUpperCase()}</h2>
</div>
)
}

export default HeaderItems
