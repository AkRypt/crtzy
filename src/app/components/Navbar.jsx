'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import constants from '../constants';
import LogoutOrLogin from './LogoutOrLogin';
import ProfileBtn from './ProfileBtn';

const navigation = [
  { name: constants.SEARCH, href: '/search' },
  { name: constants.EXPLORE, href: '/explore' },
  { name: constants.COMMUNITY, href: '/edit-profile' },
];

const onClickUser = () => {

}

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-indigo-500 md:order-1">
                    <h1 className="text-4xl font-serif text-black">{constants.APP_NAME}</h1>
                </div>
                <div className="text-gray-500 font-sans  order-3 w-full md:w-auto md:order-2">
                    {navigation.map((item) => (
                        <Link key={item.href} href={item.href}
                            className={`${
                                pathname === item.href
                                ? 'md:px-4 md:py-2 text-orange-500'
                                : 'md:px-4 md:py-2 hover:text-white hover:bg-orange-500'
                            } px-3 py-2 rounded-md font-bold`}
                            >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="order-2 flex flex-row items-center md:order-3">
                    <ProfileBtn />
                    <LogoutOrLogin />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;