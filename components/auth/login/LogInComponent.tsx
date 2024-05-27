import RegisterIcon from "../register/RegisterIcon";
import Form from "./Form";

export default function LogInComponent() {
  return (
    <section className="flex justify-evenly items-center">
      <Form />
      <div className="hidden lg:block">
        <RegisterIcon />
      </div>
    </section>
  );
}
