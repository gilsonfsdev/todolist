import Head  from 'next/head'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
      </Head>
      <footer className='flex items-center justify-center gap-10 bg-slate-300 p-8  text-sm'>
        <div className='text-left'>
          <p>Desenvolvido por</p>
          <p><span className='font-bold text-lg'>Gilson Ferreira</span>, 2023</p>
        </div>
        <ul className='flex gap-10 text-3xl'>
          <li><Link href="/"><i className="fa-brands fa-linkedin transition-colors duration-500 hover:text-sky-900"></i></Link></li>
          <li><Link href="/"><i className="fa-brands fa-github transition-colors duration-500 hover:text-sky-900"></i></Link></li>
        </ul>
      </footer>
    </>
  )
}

export default Footer

