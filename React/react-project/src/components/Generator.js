import { useState } from "react";

const Generator = ({ generate }) => <div>Random String: {generate}</div>;

const GenerateButton = ({ setGenerate }) => (
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

export default function GenerateWithUseState() {
  const [generate, setGenerate] = useState(null);
  return (
    <div>
      <GenerateButton setGenerate={setGenerate} />
      <Generator generate={generate} />
    </div>
  );
}
