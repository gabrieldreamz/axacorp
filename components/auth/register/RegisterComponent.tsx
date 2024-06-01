import AuthLottie from "./AuthLottie";
import Form from "./Form";

export default function RegisterComponent() {
  return (
    <section className="flex justify-evenly items-center mb-10">
      <Form />
      <div className="hidden lg:block">
        <AuthLottie />
      </div>
    </section>
  );
}
