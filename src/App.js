import React, {
  useState,
  // useEffect
} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import Logo from "./images/logo.png";
import Feed from "./images/Feed.png";
import Screenshot from "./images/Screenshot.png";
import Graph from "./images/graph.png";
import Footer from "./components/footer";
import Modal from "@mui/material/Modal";
import Waitlist from "./components/waitlist"; // Import the separate ModalContent component

// import { auth } from "../src/firebase";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [selected, setSelected] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const items = [
    {
      name: "Instant",
      content: "Detect subtle emotional cues instantly.        ",
    },
    {
      name: "Enhance",
      content: "Enhance therapeutic understanding.        ",
    },
    {
      name: "Communication",
      content: "Improve client-therapist communication.        ",
    },
  ];

  const items2 = [
    {
      name: "Accuracy",
      content: "Accurate emotional assessment using video analytics.        ",
    },
    {
      name: "Outcomes",
      content: "Reduce misinterpretations & enhance session outcomes.        ",
    },
    {
      name: "Learning",
      content: "Continual learning for consistently refined insights.        ",
    },
  ];

  const items3 = [
    {
      name: "Integration",
      content: "Easy integration with popular telehealth platforms.        ",
    },
    {
      name: "Display",
      content: "Non-intrusive insights displayed intuitively.        ",
    },
    {
      name: "Security",
      content: "Secure & compliant data handling.        ",
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
            {/* <Link to="/dashboard" className="create-account-btn">
              Dashboard
            </Link> */}
            {/* <Link to="/pricing" className="create-account-btn">
              Pricing
            </Link> */}
            <Link onClick={handleModalOpen} className="create-account-btn">
              Join Waitlist
            </Link>
            {/* <Link to="/signIn" className="sign-up-btn">
              Log In
            </Link> */}
          </div>
          {/* </>
          )} */}
        </div>
      </div>
      <div className="container1">
        <h1 className="title">Revolutionizing Online Therapy</h1>
        <h2 className="subtitle">
          AI-powered insights to elevate every therapy session. Join the
          waitlist and be the first to experience the future of therapy.
        </h2>
        <div className="btn-container">
          <button className="btn" onClick={handleModalOpen}>
            Join Now
          </button>
        </div>
      </div>
      <div className="container1b">
        <img
          width={"auto"}
          height={"80%"}
          className={"lpimage"}
          style={{
            width: "70%",
            borderWidth: "1px",
            borderColor: "gray",
            borderStyle: "solid",
            borderRadius: "10px",
          }}
          src={Screenshot}
          alt="Softkraft process"
        />
      </div>
      <div className="container2">
        <div className="problem-section">
          <div className="h3AndP">
            <h2 className="section-header">Real-time Analysis</h2>
            <h3>Insights as Conversations Unfold</h3>
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
            <button className="section-btn" onClick={handleModalOpen}>
              Join
            </button>
          </div>
          <img
            width={"auto"}
            height={"300px"}
            className={"lpimage"}
            style={{
              borderWidth: "1px",
              borderColor: "gray",
              borderStyle: "solid",
              borderRadius: "10px",
            }}
            src={Screenshot}
            alt="Softkraft process"
          />
        </div>

        <div className="problem-section2">
          <div className="h3AndP">
            <h2 className="section-header">AI-Powered Precision</h2>
            <h3>Beyond Traditional Observations</h3>
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
            <button className="section-btn" onClick={handleModalOpen}>
              Join
            </button>
          </div>
          <img
            width={"auto"}
            height={"250px"}
            className={"lpimage"}
            src={Feed}
            alt="Softkraft process"
          />
        </div>

        <div className="problem-section3">
          <div className="h3AndP">
            <h2 className="section-header">Seamless Integration</h2>
            <h3>Enhancing Virtual Sessions</h3>
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
            <button className="section-btn" onClick={handleModalOpen}>
              Join
            </button>
          </div>
          <img
            width={"auto"}
            height={"150px"}
            className={"lpimage"}
            src={Graph}
            alt="PMAI Logo"
          />
        </div>
      </div>

      <Footer />

      <Modal open={openModal} onClose={handleModalClose}>
        <Waitlist handleModalClose={handleModalClose} />
      </Modal>

      {/* <PriorityModal
        isOpen={showPriorityModal}
        onClose={() => setShowPriorityModal(false)}
        onPrioritySelect={handlePrioritySelect}
      /> */}
    </div>
  );
}

export default App;
