import logo from "./logo.svg";
import "./App.css";
import { Products } from "./components/Products";
import { InputForm } from "./components/Form/InputForm";
import { useForm } from "react-hook-form";
// import GenerateWithUseState from "./components/Generator";
import GenerateWithUseContext from "./components/GeneratorContext";

function App() {
  return <GenerateWithUseContext />;
  // return <Products productId={1} />;
  // return <InputForm />;
  // return <FormNew />;
  // const { register, handleSubmit } = useForm();
  // const onSubmit = formData => {
  //   console.log(formData);
  // };
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     Name
  //     <input
  //       {...register("userName", {
  //         required: "Please enter your name."
  //       })}
  //     />
  //     <br />
  //     Age
  //     <input {...register("userAge", { required: "Please enter your age." })} />
  //     <br />
  //     Color
  //     <input {...register("userColor", { required: "Please enter color." })} />
  //     <input type="submit" />
  //   </form>
  // );
}

export default App;
