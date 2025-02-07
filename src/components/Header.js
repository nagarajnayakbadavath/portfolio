import {NavLink,useNavigate} from 'react-router-dom';


const Header=()=>{
    return(
        <div className="flex justify-between">

            <div className="flex p-4 m-4">
                <h1 className="font-semibold font-serif text-4xl italic uppercase">Nagaraju Badavath</h1>
            </div>

            <div className="flex">
                <ul className="flex p-4 m-4 cursor-grab">
                <NavLink to="/about"><li className="px-4 hover:bg-slate-400 font-extrabold">About</li></NavLink>
                <NavLink to="/experience"><li className="px-4  hover:bg-slate-400 font-extrabold">Experience</li></NavLink>
                <NavLink to="/projects"><li className="px-4  hover:bg-slate-400 font-extrabold">Projects</li></NavLink>
                <NavLink to="/contact"><li className="px-4  hover:bg-slate-400 font-extrabold">Contact</li></NavLink>
                </ul>
            </div>

        </div>
    )
};

export default Header;