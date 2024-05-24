import { Suspense } from "react";
import Form from "./Form";

export default function RegisterComponent() {
  return (
    <Suspense>
      <section className="flex justify-center items-center mb-10">
        <Form />
      </section>
    </Suspense>
  );
}
