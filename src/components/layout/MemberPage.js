import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Login from '../elements/login';
import Footer from '../elements/footer';
import '../../global.css';

const MemberPage = () => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { isLoggedIn, userType } = authState;
 

  useEffect(() => {
    if (isLoggedIn) {
      navigate(userType === 1030 ? '/adminLayout' : userType === 1020 ? '/userLayout' : '/memberPage');
    }
  }
  , [isLoggedIn, navigate, userType]);
  
  return (
    <>
      <div className='memberPage'>
        <div className='page-container'>
          {!isLoggedIn && <Login />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberPage;
