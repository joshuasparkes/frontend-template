import React, {
  useState,
  // useEffect
} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import Logo from "./images/logo.png";
import Screenshot1 from "./images/Screenshot1.png";
import Footer from './components/footer' ;
// import { auth } from "../src/firebase";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [selected, setSelected] = useState(0);

  const items = [
    {
      name: "Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        ",
    },
    {
      name: "Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        ",
    },
    {
      name: "Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        ",
    },
  ];

  const items2 = [
    {
      name: "Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        ",
    },
    {
      name: "Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        ",
    },
    {
      name: "Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        ",
    },
  ];

  const items3 = [
    {
      name: "Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        ",
    },
    {
      name: "Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.      .        ",
    },
    {
      name: "Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user && !user.isAnonymous) {
  //       setLoggedIn(true);
  //       sessionStorage.setItem("uid", user.uid);
  //       console.log("User is logged in:", user.uid);
  //     } else {
  //       setLoggedIn(false);
  //       sessionStorage.removeItem("uid");
  //       console.log("User is logged out or anonymous");
  //     }
  //   });
  // const timer = setTimeout(() => {a
  //   setShowPriorityModal(true);
  // }, 100000);
  // return () => clearTimeout(timer);
  // }, []);

  // const handlePrioritySelect = async (priority) => {
  //   console.log("Selected priority:", priority);
  // };

  return (
    <div>
      <div>
        <img src={Logo} alt="PMAI Logo" className="spinning-logo" />
        <div className="login-btn-container">
          {/* {loggedIn ? (
            <Link to="/listOfFeatures" className="dashboard-btn">
              Dashboard
            </Link>
          ) : (
            <> */}
          <div style={{ marginTop: "10px" }}>
          <Link to="/dashboard" className="create-account-btn">
              Dashboard
            </Link>
          <Link to="/pricing" className="create-account-btn">
              Pricing
            </Link>
            <Link to="/signUp" className="create-account-btn">
              Sign Up
            </Link>
            <Link to="/signIn" className="sign-up-btn">
              Log In
            </Link>
          </div>
          {/* </>
          )} */}
        </div>
      </div>
      <div className="container1">
        <h1 className="title">Heading</h1>
        <h2 className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <div className="btn-container">
          <button className="btn">CTA</button>
        </div>
      </div>
      {/* <div className="container1b">
        <video
          src="/ScreenRecording1.mp4"
          autoPlay
          className="lpVid"
          loop
          muted
          playsInline
          style={{
            width: "75%",
            height: "auto",
            borderWidth: "1px",
            borderColor: "gray",
            borderStyle: "solid",
            borderRadius: "10px",
          }}
          type="video/mp4"
          onError={(e) => {
            console.error("Video error:", e);
          }}
        />
      </div> */}
      <div className="container2">
        <div className="problem-section">
          <div className="h3AndP">
            <h2 className="section-header">Section</h2>
            <h3>Add Text Here</h3>
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      selected === index ? "#fff" : "rgba(255,255,255,.2)",
                  }}
                  onClick={() => setSelected(index)}
                >
                  <strong
                    style={{
                      fontSize: "1.4rem",
                    }}
                  >
                    {item.name}
                  </strong>
                  <div
                    className="bubble-body"
                    style={{ display: selected === index ? "block" : "none" }}
                  >
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
            <button className="section-btn">CTA</button>
          </div>
          <img
            width={"auto"}
            height={"250px"}
            className={"lpimage"}
            style={{
              borderWidth: "1px",
              borderColor: "gray",
              borderStyle: "solid",
              borderRadius: "10px",
            }}
            src="https://www.softkraft.co/static/cee02d36ebf9d0d4af095be15317b27b/c74de/steps-process.webp"
            alt="Softkraft process"
          />
        </div>

        <div className="problem-section2">
          <div className="h3AndP">
            <h2 className="section-header">Section</h2>
            <h3>Add Text Here.</h3>
            <ul>
              {items2.map((item, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      selected === index ? "#fff" : "rgba(255,255,255,.2)",
                  }}
                  onClick={() => setSelected(index)}
                >
                  <strong
                    style={{
                      fontSize: "1.4rem",
                    }}
                  >
                    {item.name}
                  </strong>
                  <div
                    className="bubble-body"
                    style={{ display: selected === index ? "block" : "none" }}
                  >
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
            <button className="section-btn">CTA</button>
          </div>
          <img
            width={"auto"}
            height={"250px"}
            className={"lpimage"}
            style={{
              borderWidth: "1px",
              borderColor: "gray",
              borderStyle: "solid",
              borderRadius: "10px",
            }}
            src="https://www.explorium.ai/wp-content/uploads/2019/12/Decision-Trees-2.png"
            alt="Softkraft process"
          />
        </div>

        <div className="problem-section3">
          <div className="h3AndP">
            <h2 className="section-header">Section</h2>
            <h3>Add Text here.</h3>
            <ul>
              {items3.map((item, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      selected === index ? "#fff" : "rgba(255,255,255,.2)",
                  }}
                  onClick={() => setSelected(index)}
                >
                  <strong
                    style={{
                      fontSize: "1.4rem",
                    }}
                  >
                    {item.name}
                  </strong>
                  <div
                    className="bubble-body"
                    style={{ display: selected === index ? "block" : "none" }}
                  >
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
            <button className="section-btn">CTA</button>
          </div>
          <img
            width={"auto"}
            height={"250px"}
            className={"lpimage"}
            style={{
              borderWidth: "1px",
              borderColor: "gray",
              borderStyle: "solid",
              borderRadius: "10px",
            }}
            src={Screenshot1}
            alt="PMAI Logo"
          />
        </div>
      </div>

      <Footer />
      {/* <PriorityModal
        isOpen={showPriorityModal}
        onClose={() => setShowPriorityModal(false)}
        onPrioritySelect={handlePrioritySelect}
      /> */}
    </div>
  );
}

export default App;
