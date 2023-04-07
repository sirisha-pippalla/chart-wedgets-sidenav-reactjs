import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaLock, FaMoneyBill, FaBars } from 'react-icons/fa';
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { BiCog } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import "./Style.css"
const routes = [
    {
        path: '/',   //home
        name: "Home",
        icon: <FaHome />
    },
    {
        path: "/users",
        name: "Users",
        icon: <FaUser />,
    },
    {
        path: "/messages",
        name: "Messages",
        icon: <MdMessage />,
    },
    {
        path: "/analytics",
        name: "Analytics",
        icon: <BiAnalyse />,
    },
    {
        path: "/file-manager",
        name: "File Manager",
        icon: <AiTwotoneFileExclamation />,
        subRoutes: [
            {
                path: "/settings/profile",
                name: "profile",
                icon: <FaUser />
            },
            {
                path: "/settings/2fa",
                name: "2FA",
                icon: <FaLock />
            },
            {
                path: "/settings/billing",
                name: "Billing",
                icon: <FaMoneyBill />
            }

        ]
    },
    {
        path: "/order",
        name: "Order",
        icon: <BsCartCheck />,
    },
    {
        path: "/settings",
        name: "Settings",
        icon: <BiCog />,
        exact: true,
        subRoutes: [
            {
                path: "/settings/profile",
                name: "Profile ",
                icon: <FaUser />,
            },
            {
                path: "/settings/2fa",
                name: "2FA",
                icon: <FaLock />,
            },
            {
                path: "/settings/billing",
                name: "Billing",
                icon: <FaMoneyBill />,
            },
        ]
    },
    {
        path: "/saved",
        name: "Saved",
        icon: <AiFillHeart />
    }
]
const SideMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        let rightContent = document.getElementById('right-content')
        let leftContent = document.getElementById('left-content')
        if(!isOpen) {
            rightContent.classList.remove('col-md-10')
            rightContent.classList.add('col-md-12')
            leftContent.classList.remove('col-md-2')
            console.log(rightContent)
        } else {
            leftContent.classList.add('col-md-2')
            rightContent.classList.add('col-md-10')

        }

    },[])

    const toggle = () => {
        let rightContent = document.getElementById('right-content')
        let leftContent = document.getElementById('left-content')
        if(isOpen) {
            rightContent.classList.remove('col-md-10')
            rightContent.classList.add('col-md-11')
            leftContent.classList.remove('col-md-2')
            leftContent.classList.add('col-md-1')

            console.log(rightContent)
        } else {
            leftContent.classList.add('col-md-2')
            rightContent.classList.add('col-md-10')
            rightContent.classList.remove('col-md-11')
            leftContent.classList.remove('col-md-1')


        }

        setIsOpen(!isOpen)
    }

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity : 0
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            opacity : 1,
            transition: {
                duration: 0.2
            }
        }
    }
    return (
        <div className="main-container">
            <motion.div animate={{ width: isOpen ? "200px" : "37px" }} className="sbar">
                <div className="top_section">
                    {isOpen && <img className="logo" src='https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63f816e85cfb9e8d98853178_Screenshot%202023-02-23%20at%209.43.21%20PM.png' />}
                    <div className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                <div className="search">
                    <div className="search_icon">
                        <BiSearch />
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.input 
                            initial = "hidden"
                            animate = "show"
                            exit = "hidden"
                            variants={inputAnimation} 
                            placeholder="Search..." />
                        )}
                    </AnimatePresence>
                </div>
                <section className="routes">
                    {routes.map((route) => (
                        <NavLink to={route.path} key={route.name} className="link">
                            <div className="icon">{route.icon}</div>
                            <AnimatePresence>
                            {isOpen && <motion.div className="link_text">{route.name}</motion.div>}
                            </AnimatePresence>
                        </NavLink>
                    ))}
                </section>
            </motion.div>
        </div>
    )
}

export default SideMenu
