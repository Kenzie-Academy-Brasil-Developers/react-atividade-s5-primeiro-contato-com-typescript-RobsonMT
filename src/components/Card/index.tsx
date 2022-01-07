interface User {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: User) => (
  <li>
    <h3>{name}</h3>
    <p>{age}</p>
    <p>{hobby}</p>
  </li>
);
