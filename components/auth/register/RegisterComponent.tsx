import Form from "./Form";
import RegisterIcon from "./RegisterIcon";

export default function RegisterComponent() {
  return (
      <section className="flex justify-evenly items-center mb-10">
        <Form />
        <div className="hidden lg:block">
          <RegisterIcon />
        </div>
      </section>
  );
}
