export default Navbar;
import "./style.css";
import CartWidget  from './Cartwidget';

function Navbar(){
return(
    <nav className='navbar'>
        <ul className='list' >
            <li className='icon' >Inicio</li>
            <li className='icon' >Productos</li>
            <li className='icon' >Nosotros</li>
            <li className='icon'>Contactenos</li>
        </ul>
        <CartWidget/>
    </nav>
)
}