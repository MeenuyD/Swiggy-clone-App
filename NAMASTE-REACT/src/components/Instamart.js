import { useState } from "react";

const Section = ({ title, discription }) => {
  return (
    <div className="section">
      <h3>{title}</h3>
      {isVisiable ? (
        <button onClick={() => setIsVisiable(false)} className="button">
          Hide
        </button>
      ) : (
        <button onClick={() => setIsVisiable(true)} className="button">
          Show
        </button>
      )}

      {isVisiable && <p>{discription}</p>}
    </div>
  );
};

const Instamart = () => {
  const [isVisiable, setIsVisiable] = useState(false);

  return (
    <div>
      <h1>Instamart</h1>
      <section
        title={"About Instamart"}
        discription={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "
        }
        isVisiable={true}
      ></section>
      <section
        title={"carrer Instamart"}
        discription={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "
        }
        isVisiable={true}
      ></section>
      <section
        title={"Team Instamart"}
        discription={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "
        }
        isVisiable={true}
      ></section>
      <h1>100 of Componenet inside it</h1>
    </div>
  );
};
export default Instamart;
