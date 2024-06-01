import AuthLottie from "../register/AuthLottie";
import Form from "./Form";

export default function LogInComponent() {
  return (
    <section className="flex justify-evenly items-center">
      <Form />
      <div className="hidden lg:block">
        <AuthLottie />
      </div>
    </section>
  );
}
