import Card from "./Card"




export function IProductos({ data }) {
  return (
    <div className="contenedor-Card mycontainer mt-5">
        {
          data.map( ( dato ) => {
            return <Card key={ dato.id } dato={ dato } />
          }
          )
        }
      </div>
  )
}
