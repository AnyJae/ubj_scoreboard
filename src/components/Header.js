import './styles/Header.css';
import tapLogo from '../assets/tap로고(black).png'
import { Link } from 'react-router-dom';

function Header({ mat }) {
  return (
    <>
      <div className="header">
        <div className='logo'>
          <Link to={"/"}><img src={tapLogo} alt="tap 로고" /></Link>
        </div>
        <p className='title'>2025 제12회 전국대학생주짓수대회</p>
        <p className='mat'>{mat}</p>
      </div>
    </>
  );
}

export default Header;