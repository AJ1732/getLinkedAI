import { Fragment, useState } from 'react'
import { ReactSVG } from "react-svg"
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import menu from '../files/vectors/hamMenu.svg'
import menuClose from '../files/images/menuClose.svg'
// import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const navigation = [
  { name: 'Timeline', href: '#timeline', current: true },
  { name: 'Overview', href: '#overview', current: false },
  { name: 'FAQs', href: '#FAQs', current: false },
  { name: 'Contact', href: 'contact', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [ current, setCurrent ] = useState(false)
  navigation.map( item => (
    // let navCurrent = item.current
    console.log(item.current)
  ));

  return (

    <div className=''>
    
    
    <Disclosure as="nav" className="border-b border-divider relative sm:pt-10 sm:pb-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Nav Link */}
              {
                open?
                '':
                <Link to={`.`} className='font-clashDisplay absolute left-12 font-sxl font-bold | sm:text-4xl'>get<span className='text-text-purple'>linked</span></Link>
              }

              <div className="relative flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                {/* <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div> */}
                <div className="hidden  sm:ml-6 sm:block">
                  <div className="flex sm:justify-center sm:items-center space-x-4">
                    {navigation.map((item) => (
                      <HashLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </HashLink>
                    ))}

                    <Link to={`register`} className='w-38 h-10 rounded mx-28 pt-2 | text-sxxl text-center font-normal tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple'>Register</Link>
                  </div>
                </div>
              </div>



              {/* Right */}
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>

              <div className="absolute inset-y-0 right-8 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ReactSVG src={menuClose} className="block p-2 border-2 border-lg-from-purple rounded-full" aria-hidden="true" />
                  ) : (
                    <ReactSVG src={menu} className="block p-2" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden w-full h-screen flex flex-col absolute bg-bg-purple z-10">
            <div className="space-y-1 px-12 pb-3 pt-2">
              {navigation.map((item) => (
                <HashLink
                  key={item.name}
                  as="a"
                  to={item.href}
                  smooth
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'hover:text-text-purple',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </HashLink>
              ))}
            </div>
            <Link to={`register`} className='w-40 ml-16 mt-6 mb-20 py-5 px-4 rounded | text-sxxl text-center font-medium tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple'>Register</Link>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}
