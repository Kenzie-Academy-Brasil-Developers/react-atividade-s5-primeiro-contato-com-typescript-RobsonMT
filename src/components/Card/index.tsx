import { FaUserAlt } from "react-icons/fa";
import "./styles.scss";
interface User {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: User) => (
  <li className="Card">
    <i>
      <FaUserAlt />
    </i>

    <div>
      <p>{name}</p>
      <p>hobby: {hobby}</p>
      <p>age: {age}</p>
    </div>
  </li>
);
