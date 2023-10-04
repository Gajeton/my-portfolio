import Link from 'next/link'
import style from './styles.module.css'
import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion';
import { EventHandler, MouseEventHandler, useState } from 'react';

export default function Header() {
  interface NavigationItem {
    id:number
    name: string;
    href: string;
    current: boolean;
  }

  const navigation: NavigationItem[] = [
    { id: 1, name: "Summary.", href: "#summary-section", current: false },
    { id: 2, name: "Skills.", href: "#skills-section", current: false },
    { id: 3, name: "Projects.", href: "#project-section", current: false },
    { id: 4, name: "Ongoing project.", href: "#ongoing-section", current: false },
    { id: 5, name: "Experience.", href: "#experience-section", current: false },
    { id: 6, name: "Education.", href: "#education-section", current: false },
    { id: 7, name: "Other.", href: "#other-section", current: false },
  ];


  return (
      <div className="flex md:flex-col font-rocletteBold text-2xl md:mt-[-1em] md:leading-tight lowercase md:w-1/4 resp:px-2 resp:text-lg resp:justify-between resp:mt-5">
          {navigation.map((el, i) => (
            <a
              href={el.href}
              key={el.id}
              className={`${style.hover_underline_animation}`}>
              {el.name}
              </a>
          ))}
      </div>
  );
}


// interface MenuItempProps {
//   text:string,
//   selected: boolean,
//   onClick: MouseEventHandler,
//   href: string,
// }

// const MenuItem = ({ text, selected, onClick, href }: MenuItempProps) => (
//   <motion.div 
//     className="relative" 
//     whileHover={{ opacity: selected ? 1 : .5}} 
//   >
//     <a href={href}>{text}</a>
//     {selected && (
//       <motion.div 
//         className="absolute t-[100%] left-0 w-[100%] h-4px bg-black opacity-80"  
//         layoutId="underline" 
//       />
//     )}
//   </motion.div>
// )

// const UnderlinedMenu = () => {
  
//   return (
//     <div className="underlined-menu">
//       <div className="wrapper">
//         <AnimateSharedLayout>
//           {menuItems.map((el, i) => (
//             <MenuItem 
//               text={el} 
//               key={i}
//               selected={selected === i}
//               onClick={() => setSelected(i)}
//             /> 
//           ))}
//         </AnimateSharedLayout>
//       </div>
//     </div>
//   )
// }