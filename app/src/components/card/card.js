import Car from "../images/gray-car.png"
import HappyBirthday from "../images/happy-birthday.png"

const Card = () => {

  return (
    <div className="card">
      <img src={Car} alt="car on top left" className="car top-left" />
      <img src={Car} alt="car on top right" className="car top-right" />
      <img src={Car} alt="car on bottom left" className="car bottom-left"/>
      <img src={Car} alt="car on bottom right" className="car bottom-right"/>

      <img src={HappyBirthday} alt="happy birthday" className="hb" />
        <div className="text">
          <h1>Happy Birthday Brittany!</h1>
          <p>I hope you have the most wonderful of birthdays</p>
          <p className="muted">-  Aldair</p>
        </div>
    </div>
  )
}

export default Card;