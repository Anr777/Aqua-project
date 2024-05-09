



export function Button({ title = 'button', color, icon, background, clases }) {
  return (
    <button type="button" className={`${ color ? color : 'text-blue-600' }
     ${ background ? background : 'bg-transparent' } ${clases ? clases : ''} font-semibold  text-sm rounded-full px-3 py-1 max-sm:text-[16px]`}>
      {
        icon ? (
          <>
            <span>{ icon }</span>
            <span>{ title }</span>
            
          </>
        ) : (
          <span>{ title }</span>
        )
      }
    </button>
  )
}
