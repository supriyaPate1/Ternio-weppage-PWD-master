import React, { useState } from "react";
import "./ternio.css";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
export default function Ternio() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="ternioNav">
        <div className="ternioCont">
          <div className="logo">
            <img src="image (4) (1).png" alt="ternio" />
          </div>
          <div className="midspa"></div>
          <div className="otherlinks">
            <div>
              <a href="#">How it Works</a>
            </div>
            <div>
              <a href="#">Roadmap</a>
            </div>
            <div>
              <a href="#">Whitepaper</a>
            </div>
            <div>
              <a href="#">Contact</a>
            </div>
            <div>
              <a href="#">Advertising</a>
            </div>
            <div>
              <button>Dashboard Login</button>
            </div>
          </div>
          <div id="otherlink2">
            <MenuIcon
              onClick={() => {
                setOpen(true);
              }}
              sx={{ fontSize: "40px",color:"white" }}/>
          </div>
        </div>
        <div className="textImg">
          <div className="text">
            <h4>THE FUTURE IS NOW</h4>
            <h1>The World's Fastest Blockchain</h1>
            <h6>
              TERNIO provides the only socalable and decentralized blockckain
              framework capable of over 1 millin transactions per second.
            </h6>
            <button>Receive Email Updates</button>
          </div>
        </div>
        <div className="belowText">
          <div className="textDiv">
            <p>TERNIO Third-party verified run over 1 million</p>
          </div>
          <div className="divVoice">
            <KeyboardVoiceOutlinedIcon sx={{ fontSize: "40px" }} />
          </div>
          <div className="arrow">
            <div>
              {" "}
              <p>
                &emsp;&emsp;Next&emsp;
                <ArrowForwardOutlinedIcon sx={{ fontSize: "40px" }} />
              </p>
            </div>
            <div className="num">
              <h1>
                01/{" "}
                <ArrowCircleRightOutlinedIcon
                  sx={{ fontSize: "40px", cursor: "pointer" }}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="cards3">
        <div className="logoheading">
          <img
            src="https://assets.coingecko.com/coins/images/2534/large/darkblue-darkblue.png?1547036649"
            alt="ternio"
          />
          <h5>ONE BLOCK AT A TIME</h5>
          <h2>One Blockchain To Meet All the Needs </h2>
          <h5>
            Decentralized solution, Secure and Flexible. The total inventory of
            record set of meaningful units.
          </h5>
        </div>
        <div className="dispCards">
          <div>
            <img src="image (4) (5).png" alt="card" />
            <h3>100% Decentralized</h3>
            <p>
              Use the online image color picker above to select a color and get
              the HTML Color Code of this pixel.
            </p>
          </div>
          &emsp;
          <div>
            <img src="image (4) (6).png" alt="card" />
            <h3>100% On-Chain</h3>
            <p>
              Use the online image color picker above to select a color and get
              the HTML Color Code of this pixel.
            </p>
          </div>
          &emsp;
          <div>
            {" "}
            <img src="image (4) (7).png" alt="card" />
            <h3>100% Verified</h3>
            <p>
              Use the online image color picker above to select a color and get
              the HTML Color Code of this pixel.
            </p>
          </div>
        </div>
      </div>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchor="right"
        PaperProps={{ sx: { width: "50%",backgroundColor:"  rgba(230, 224, 238)"} }}
      >
        <div className="paperNav">
          <div>
            <a href="#">How it Works</a>
          </div>
          <div>
            <a href="#">Roadmap</a>
          </div>
          <div>
            <a href="#">Whitepaper</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
          <div>
            <a href="#">Advertising</a>
          </div>
          <div>
            <button>Dashboard Login</button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
