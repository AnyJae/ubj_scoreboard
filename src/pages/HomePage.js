import { Link } from 'react-router-dom';
import Container from '../components/Container';
import MatButton from '../components/MatButton'
import './styles/HomePage.css'

function MatButtons() {
  const mats = ['A', 'B', 'C', 'D'];
  return (
    <ul className='buttons'>
      {mats.map((mat) => (
        <li key={mat} className='btn'>
          <Link to={`/scoreboard/${mat}`}>
            <MatButton mat={mat}/>
          </Link>
        </li>
      ))}
    </ul>
  );
}


function HomePage() {
  return (
    <>
      <div>
        <Container>
          <div className='title align-col'>
            <p>전국대학생주짓수대회</p>
            <p>Score Board</p>
          </div>
            <MatButtons />
        </Container>
      </div>
    </>
  );
}

export default HomePage;