/** @format */
import { useForm } from "react-hook-form";
function App() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">UserName</label>
          <input placeholder="username" type="text" {...register("username")} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input placeholder="email" type="text" {...register("email")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
export default App;
