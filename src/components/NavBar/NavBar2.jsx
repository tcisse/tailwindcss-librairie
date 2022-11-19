import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiOutlineDown } from 'react-icons/ai'

const Down = () =>{
    return(
        <div className='
            flex flex-col h-[100px] 
            justify-between pl-[10px] 
            w-[100px] lg:ml-[265px] 
            mt-auto lg:mt-[40px] 
            bg-gray-500 relative 
            lg:absolute scale-up-center'
        >
            <p className='text-white hover:text-[#d66349]'><a href='/'>Articles</a></p>
            <p className='text-white hover:text-[#d66349]'><a href='/'>Links</a></p>
            <p className='text-white hover:text-[#d66349]'><a href='/'>Pricing</a></p>
        </div>
    )
}
const Menu = () =>{
    const [down, setDown] = useState( false );
    const handleOpen = () =>{
        setDown(!down)
    }
      return(
        <>
            <p className='max-[912px]:text-2xl text-white hover:text-[#d66349]'><a href='/'>Home</a></p>
            <p className='max-[912px]:text-2xl text-white hover:text-[#d66349]'><a href='/'>Product</a></p>
            <p className='max-[912px]:text-2xl text-white hover:text-[#d66349]'><a href='/'>Features</a></p>
            <div className='flex gap-1 items-center cursor-pointer' onClick={handleOpen}>
                <p className='max-[912px]:text-2xl text-white'>Dropdown</p>
                <AiOutlineDown color='#fff' size='12' style={{marginTop:'5px'}}/>
            </div>
            {down && (
                <Down />
            )}
            <p className='max-[912px]:text-2xl text-white hover:text-[#d66349]'><a href='/'>About</a></p>  
        </>
    )
 
}

const Navbar2 = () => {

  const [toggleMenu, setToggleMenu] = useState( false );

  return (
    <div className='bg-gray-800 flex justify-between items-center px-[2.5rem] py-6'>
        <div className='flex flex-1 justify-start items-center'>
            <div className='mr-8'>
                <p className='text-white font-bold text-[25px]'>Logo</p>
            </div>

            <div className=' hidden lg:flex flex-row lg:gap-[35px]'>
                  <Menu />
            </div>
        </div>

        <div className=' hidden lg:flex flex-end items-center lg:gap-3'>
            <input type="search" className='h-[40px] outline-none 
                rounded-[5px] focus:border-[#FF4820]' 
                style={{paddingInlineStart:'10px'}} 
            />
            <button type='button' className='
                bg-[#FF4820] text-[#fff] 
                cursor-pointer leading-[25px] 
                text-[18px] p-[8px] rounded-[5px] 
                outline-none'
            >Search</button>
        </div>

        <div className='lg:hidden'>
              {toggleMenu
                ? <RiCloseLine color='#fff' size='27' onClick={ () => setToggleMenu(false)} />
                : <RiMenu3Line color='#fff' size='27' onClick={ () => setToggleMenu(true)} />
              }
              {toggleMenu && (
                  <div className='-right-0 fixed top-0 bottom-0 z-30 w-full transition-all ease-in duration-500 bg-gray-800'>
                    <RiCloseLine color='#fff' size='27' style={{marginLeft:'9px', marginTop:'15px'}} onClick={ () => setToggleMenu(false)} />
                        <div className='flex flex-col gap-y-[15px] items-center mt-5'>
                            <Menu />
                            <div className='flex items-center gap-3 justify-center mt-3'>
                                <input type="search" className='h-[40px] w-[200px] outline-none 
                                    rounded-[5px] focus:border-[#FF4820]' 
                                    style={{paddingInlineStart:'10px'}}
                                />
                                <button type='button' className='
                                    bg-[#FF4820] text-[#fff] 
                                    cursor-pointer leading-[25px] 
                                    text-[18px] p-[8px] rounded-[5px] 
                                    outline-none'
                                >Search</button>
                            </div>
                        </div>
                  </div>
              )}
        </div>
    </div>
  )
}

export default Navbar2