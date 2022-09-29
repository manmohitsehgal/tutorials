import { useState, createContext, useContext } from "react";

const RandomGeneratorContext = createContext(null);

const RandomGeneratorContextProvider = ({ children }) => (
  <RandomGeneratorContext.Provider value={useState(null)}>
    {children}
  </RandomGeneratorContext.Provider>
);

{
  /* <Provider>
  <Component1>
  </Component1>
  <Component2></Component2>
  <ComponentX></ComponentX>
</Provider> */
}

const GenerateButton = () => {
  const [, setGenerate] = useContext(RandomGeneratorContext);
  return (
    <div>
      <button
        onClick={() =>
          setGenerate(v => (v = (Math.random() + 1).toString(36).substring(1)))
        }
      >
        Generate
      </button>
    </div>
  );
};

const Generator = () => {
  const [generate] = useContext(RandomGeneratorContext);
  return <div>Random String: {generate}</div>;
};

function GenerateContextProvider() {
  return (
    <div>
      <RandomGeneratorContextProvider>
        <GenerateButton />
        <Generator />
      </RandomGeneratorContextProvider>
    </div>
  );
}

export default function GenerateWithUseContext() {
  return (
    <div>
      <GenerateContextProvider />
    </div>
  );
}
