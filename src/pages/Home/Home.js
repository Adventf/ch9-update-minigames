import React from "react";
import { CardGroup, Card, CardImg, Button, CardTitle } from "reactstrap";
import "./Home.css";
import img1 from "./assets/Crazy-Roll-3D.jpg";
import img2 from "./assets/Bullet-Force.jpg";
import img3 from "./assets/Highway-Racer.png";
import img4 from "./assets/air-wars-3.jpg";
import img5 from "./assets/bounce-blocku-golf.jpg";
import img6 from "./assets/bullet-bonanza.png";
import img7 from "./assets/flyordieio.jpg";
import img8 from "./assets/rockpaperstrategy-1600.jpg";
import img9 from "./assets/getting-over-it.jpg";
import img10 from "./assets/infiltrating-the-airship.jpg";
import img11 from "./assets/rocket-bot-royale.jpg";
import img12 from "./assets/soccer-legends-2021.jpg";
import img13 from "./assets/stabfish-io.jpg";
import img14 from "./assets/the-mage.jpg";

export default function () {
  return (
    <div className="home-body">
      <CardGroup>
        <Card>
          <CardTitle>
            <h1>COMING SOON</h1>
          </CardTitle>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={img1} top width="100%" />
          <Button className="button1">Crazy Roll 3D</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img2} top width="100%" />
          <Button className="button2">Bullet Force</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img3} top width="100%" />
          <Button className="button1">Highway Racer</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img4} top width="100%" />
          <Button className="button2">Air Wars 3</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img5} top width="100%" />
          <Button className="button1">Bounce Blocku Golf</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img6} top width="100%" />
          <Button className="button2">Bullet Bonanza</Button>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="category">
          <CardTitle>
            <h1>TOP GAMES</h1>
          </CardTitle>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={img7} top width="100%" />
          <Button className="button1">Fly Ordie.io</Button>
        </Card>
        <Card>
          <CardImg className="image" alt="Card image cap" src={img8} top width="100%" />
          <Button className="button3" href="/gamedetail">
            Rock-Paper-Scissors
          </Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img9} top width="100%" />
          <Button className="button1">Getting Over It</Button>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <CardTitle>
            <h1>GAME LIST</h1>
          </CardTitle>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={img10} top width="100%" />
          <Button className="button1">Infiltrating The Airship</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img11} top width="100%" />
          <Button className="button2">Rocket Bot Royale</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img12} top width="100%" />
          <Button className="button1">Soccer Legends 2021</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img13} top width="100%" />
          <Button className="button2">Stabfish.io</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img14} top width="100%" />
          <Button className="button1">The Mage</Button>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={img1} top width="100%" />
          <Button className="button2">Crazy Roll 3D</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img2} top width="100%" />
          <Button className="button1">Bullet Force</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img3} top width="100%" />
          <Button className="button2">Highway Racer</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img4} top width="100%" />
          <Button className="button1">Air Wars 3</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img5} top width="100%" />
          <Button className="button2">Bounce Blocku Golf</Button>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={img10} top width="100%" />
          <Button className="button1">Infiltrating The Airship</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img11} top width="100%" />
          <Button className="button2">Rocket Bot Royale</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img12} top width="100%" />
          <Button className="button1">Soccer Legends 2021</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img13} top width="100%" />
          <Button className="button2">Stabfish.io</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img14} top width="100%" />
          <Button className="button1">The Mage</Button>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={img1} top width="100%" />
          <Button className="button2">Crazy Roll 3D</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img2} top width="100%" />
          <Button className="button1">Bullet Force</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img3} top width="100%" />
          <Button className="button2">Highway Racer</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img4} top width="100%" />
          <Button className="button1">Air Wars 3</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img5} top width="100%" />
          <Button className="button2">Bounce Blocku Golf</Button>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={img10} top width="100%" />
          <Button className="button1">Infiltrating The Airship</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img11} top width="100%" />
          <Button className="button2">Rocket Bot Royale</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img12} top width="100%" />
          <Button className="button1">Soccer Legends 2021</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img13} top width="100%" />
          <Button className="button2">Stabfish.io</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img14} top width="100%" />
          <Button className="button1">The Mage</Button>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={img1} top width="100%" />
          <Button className="button2">Crazy Roll 3D</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img2} top width="100%" />
          <Button className="button1">Bullet Force</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img3} top width="100%" />
          <Button className="button2">Highway Racer</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img4} top width="100%" />
          <Button className="button1">Air Wars 3</Button>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={img5} top width="100%" />
          <Button className="button2">Bounce Blocku Golf</Button>
        </Card>
      </CardGroup>
    </div>
  );
}
