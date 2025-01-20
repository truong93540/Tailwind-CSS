import { useState } from 'react';
import images from '~/asset/images';

// t-[#07a787]

// Responsive
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px

// media screen and (min-width: 1024px) {
// font-size: 36px;
// }

// sm: tailwind class
// md: tailwind class
// lg: tailwind class

function Home() {
    const currentTheme = localStorage.getItem('theme');

    const [darkMode, setDarkMode] = useState(currentTheme);

    if (darkMode == 'dark') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    const cssBackGroundDarkMode = darkMode == 'dark' ? 'dark:bg-[#0f0d58]' : '';
    const cssPositionTogglerDarkMode = darkMode == 'dark' ? 'ml-[60px]' : '';
    const cssColorTogglerDarkMode = darkMode == 'dark' ? 'bg-[#fff]' : '';
    const cssTextDarkMode = darkMode == 'dark' ? 'dark:text-[#fff]' : 'text-[#333]';

    return (
        // <div className="travel pt-12">
        //     <h1 className="text-center text-[#ffa400] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
        //         Live anywhere
        //     </h1>
        //     <h2 className="text-center font-light text-xl text-[#07a787] mb-35">
        //         Keep calm & travel on
        //     </h2>
        //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 max-w-6xl mx-auto px-4 gap-y-7 lg:gap-y-0">
        //         <div>
        //             <div className="h-96 mb-5">
        //                 <img
        //                     src="https://i.pinimg.com/236x/98/44/d1/9844d17f8efec6a4e5f537ae569a31c0.jpg"
        //                     alt=""
        //                     className="w-full h-full rounded-lg object-cover"
        //                 ></img>
        //             </div>
        //             <h3 className="font-medium text-center text-lg mb-3">
        //                 Enjoy the great cold
        //             </h3>
        //             <span className="block text-center text-gray-400 text-sm">
        //                 6,789 properties
        //             </span>
        //         </div>

        //         <div>
        //             <div className="h-96 mb-5">
        //                 <img
        //                     src="https://i.pinimg.com/236x/98/44/d1/9844d17f8efec6a4e5f537ae569a31c0.jpg"
        //                     alt=""
        //                     className="w-full h-full rounded-lg object-cover"
        //                 ></img>
        //             </div>
        //             <h3 className="font-medium text-center text-lg mb-3">
        //                 Enjoy the great cold
        //             </h3>
        //             <span className="block text-center text-gray-400 text-sm">
        //                 6,789 properties
        //             </span>
        //         </div>

        //         <div>
        //             <div className="h-96 mb-5">
        //                 <img
        //                     src="https://i.pinimg.com/236x/98/44/d1/9844d17f8efec6a4e5f537ae569a31c0.jpg"
        //                     alt=""
        //                     className="w-full h-full rounded-lg object-cover"
        //                 ></img>
        //             </div>
        //             <h3 className="font-medium text-center text-lg mb-3">
        //                 Enjoy the great cold
        //             </h3>
        //             <span className="block text-center text-gray-400 text-sm">
        //                 6,789 properties
        //             </span>
        //         </div>
        //     </div>
        // </div>

        // hover: bg-red
        // lg:hover:bg-blue -> breakpoint:hover:class
        // parent:group
        // children:group-hover:bg-red

        // <div>
        //     <div className="group p-10 border border-red-50">
        //         <button
        //             className="inline-block py-3 px-10 m-5 text-white bg-[#6a5af9] lg:group-hover:bg-red-600 rounded-lg transition-all motion-safe:hover:scale-110 disabled:opacity-50"
        //             disabled
        //         >
        //             Confirm
        //         </button>
        //     </div>
        //     <input
        //         type="text"
        //         className="py-3 px-3 border border-[#333] outline-none rounded-xl m-3 focus:border-[#ffa400]"
        //     ></input>

        //     <input
        //         type="checkbox"
        //         className="appearance-none checked:bg-blue-600 checked:border-transparent w-5 h-5 border border-[#eee]"
        //     ></input>

        //     <ul>
        //         <li className="odd:bg-red-400">abc</li>
        //         <li className="odd:bg-red-400">abc</li>
        //         <li className="odd:bg-red-400">abc</li>
        //         <li className="odd:bg-red-400">abc</li>
        //         <li className="odd:bg-red-400">abc</li>
        //     </ul>
        // </div>

        // <div
        //     before=""
        //     className="w-10 h-10 flex items-center justify-center text-[#00eefd] mx-auto my-5 border border-[#eee] before:content-[attr(before)] "
        // >
        //     <ion-icon name="airplane-outline"></ion-icon>
        // </div>

        // dark mode

        // <div>
        //     <div
        //         className={`w-[100px] h-[40px] border [#ccc] rounded-full fixed right-5 bottom-5 z-50 p-[5px] inline-block cursor-pointer ${cssBackGroundDarkMode} `}
        //         onClick={() => {
        //             if (darkMode == 'light') {
        //                 setDarkMode('dark');
        //             } else {
        //                 setDarkMode('light');
        //             }
        //         }}
        //     >
        //         <div
        //             className={`w-7 h-7 bg-[#ccc] rounded-full transition-all ${cssPositionTogglerDarkMode} ${cssColorTogglerDarkMode}`}
        //         ></div>
        //     </div>
        //     <div className=" max-w-[1200] grid grid-cols-4 gap-x-5 mx-5 mt-5">
        //         <div className={`px-5 py-8 rounded-lg border border-[#eee] ${cssBackGroundDarkMode} transition-all`}>
        //             <img
        //                 src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
        //                 className="object-fill mb-5"
        //             ></img>

        //             <h3 className={`text-lg font-semibold mb-6 ${cssTextDarkMode}`}>Recommendation</h3>
        //             <div className={`text-sm leading-normal ${cssTextDarkMode} font-normal`}>
        //                 It is generally considered healthy to include fish in your diet a few times a week, as fish are
        //                 rich in essential proteins, healthy fats, and valuable minerals. Since your family eats mostly
        //                 meat, it would be beneficial to increase the frequency of fish meals. Ideally, you should
        //                 consume fish at least two to three times per week, with each meal containing 100-120 grams of
        //                 fish.
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className={`max-w-[1140px] mx-auto p-5 flex items-center`}>
        //     <div className="w-full max-w-[555px]">
        //         <h1 className="text-[#0B132A] text-[50px] font-medium ">
        //             Want anything to be easy with <strong>LaslesVPN</strong>
        //         </h1>
        //         <p className="text-[#4F5665] mb-[50]">
        //             Provide a network for all your needs with ease and fun using
        //             <strong> LaslesVPN</strong> discover interesting features form us
        //         </p>
        //         <a
        //             href="#"
        //             className="inline-block text-white font-bold p-4 w-full max-w-[250px] bg-[#F53838] rounded-[10px] text-center"
        //         >
        //             Get started
        //         </a>
        //     </div>
        //     <div className="pl-10">
        //         <img src={images.image1} alt="anh1"></img>
        //     </div>
        // </div>

        // <div className="m-5 grid auto-cols-[90%] grid-flow-col overflow-x-auto scroll-snap-mandatory scroll-snap-always  gap-x-5">
        //     <div className="h-[200px] scroll-snap-start">
        //         <img
        //             src="https://static.toiimg.com/photo/80387978.cms"
        //             className="w-full h-full object-cover"
        //         ></img>
        //     </div>
        //     <div className="h-[200px] scroll-snap-start">
        //         <img
        //             src="https://static.toiimg.com/photo/80387978.cms"
        //             className="w-full h-full object-cover"
        //         ></img>
        //     </div>
        //     <div className="h-[200px] scroll-snap-start">
        //         <img
        //             src="https://static.toiimg.com/photo/80387978.cms"
        //             className="w-full h-full object-cover"
        //         ></img>
        //     </div>
        //     <div className="h-[200px] scroll-snap-start">
        //         <img
        //             src="https://static.toiimg.com/photo/80387978.cms"
        //             className="w-full h-full object-cover"
        //         ></img>
        //     </div>
        // </div>

        <div className="bg-grayDark min-h-96">
            <p>aaaa</p>
        </div>
    );
}

export default Home;
