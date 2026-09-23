import menu from "../../assets/Menu.svg";
function Navbar(){
    return<nav className="bg-secondary text-white  fixed top-0 left-0 w-full z-50">
        <div className="container row justify-between py-4 ">
        <h2 className=" text-lg  font-bold ">START BOOTSTRAP</h2>
        <ul className="hidden md:row  gap-6 p-1.5 ">
            <li><a href="#" className="nav_link">Portfolio</a></li>
            <li><a href="#"className="nav_link">About</a></li>
            <li><a href="#" className="nav_link">Contact</a></li>
            
        </ul>
        <button
            type="button"
            className="bg-primary rounded-lg row  gap-2 p-2 text-sm uppercase md:hidden">
            Menu
            <img src={menu} alt="" className="w-4 h-4 brightness-0 invert" />
        </button>
        </div>
    </nav>
     
}

export default Navbar;
