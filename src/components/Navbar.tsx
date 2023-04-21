import React from 'react';
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='bg-slate-300 '>
      <div className='flex justify-between p-5 max-w-5xl m-auto'>
        <h3>To<span>Do</span> List</h3>
        <nav>
          <ul>
            <li><Link href="/">Sair</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar