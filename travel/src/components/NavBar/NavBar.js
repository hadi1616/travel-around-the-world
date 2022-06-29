import  "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar(){

    let navigate = useNavigate();

return(
    // <div className={NavbarContainer.NavbarContainer}>
    <div className="NavbarContainer">

    <span className="HomeButton" onClick={(e) => {navigate('/');
        document.getElementsByClassName("HomeButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("LoginButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("SignupButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("BlogButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ContactUsButton")[0].style.color='#FFFFFF';
        }}>Home
    </span>


    <span className="LoginButton" onClick={(e) => { navigate('/Login');
        document.getElementsByClassName("LoginButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("HomeButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("SignupButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("BlogButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ContactUsButton")[0].style.color='#FFFFFF';
        }}>Login
    </span>



    <span className="SignupButton" onClick={(e) => {navigate('/Signup');
        document.getElementsByClassName("SignupButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("HomeButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("LoginButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("BlogButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ContactUsButton")[0].style.color='#FFFFFF'; 
        }}>Signup
    </span>



    <span className="BlogButton" onClick={(e) => {navigate('/Blog');
        document.getElementsByClassName("BlogButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("HomeButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("LoginButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("SignupButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ContactUsButton")[0].style.color='#FFFFFF';
        }}>Blog
    </span>

    <span className="ContactUsButton" onClick={(e) => { navigate('/Contactus');
        document.getElementsByClassName("ContactUsButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("HomeButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("LoginButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("SignupButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("BlogButton")[0].style.color='#FFFFFF';
        }}>Contactus
    </span>
    </div>
)

}

export default NavBar;