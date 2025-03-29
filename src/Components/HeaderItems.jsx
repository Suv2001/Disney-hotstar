import React from 'react'

function HeaderItems({name, icon, children}) {
  return (
    <div className={'text-uppercase mb-3 flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 hover:underline-width-2'}>
      {icon}
      {children || <h2 className={'hidden md:block'}>{name.toUpperCase()}</h2>}
    </div>
  )
}

export default HeaderItems
