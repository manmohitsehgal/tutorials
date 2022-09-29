import { useReducer } from "react";
import { reducers } from "../store/reducers/index";
import { addHero } from "../store/actions/heroActions";

export function Hero() {
  let name = null;
  const [heros, dispatch] = useReducer(reducers, { hero: [{}] });

  const handleFormValue = e => {
    const { target } = e;
    if (target.name === "heroName") {
      name = target.value;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addHero(name));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        name="heroName"
        onChange={handleFormValue}
      />
      <button type="button" onClick={handleSubmit}>
        Add Name
      </button>
      {heros.hero?.map((item, i) => {
        if (!!item.name) {
          return <div key={i}>Hero Name: {item.name}</div>;
        }
      })}
      <br />
    </div>
  );
}
