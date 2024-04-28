import Titulo from './Titulo'

const Locales = ({width,height}) => {


    const iframeHtml = 
          `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1937.9134567519313!2d-76.22073262157907!3d-13.728926806620118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQzJzQ0LjEiUyA3NsKwMTMnMTAuNyJX!5e0!3m2!1ses-419!2spe!4v1714150126620!5m2!1ses-419!2spe" width=${width}   height=${height} style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    ;

    return (
      <>
        <Titulo titulo={'Encuentranos!'}/>
        <div dangerouslySetInnerHTML={{ __html: iframeHtml }} className='flex justify-center pt-5 pb-10' />
      </>
  
  )
  
}

export default Locales
