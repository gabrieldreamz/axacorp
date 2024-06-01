export default function AboutTextSection({ text }: { text: string }) {
  return (
    <section>
      <p className="text-base text-center lg:text-start lg:mx-0 max-w-xl lg:max-w-max inline-block text-primary font-medium mx-auto ">
        {text}
      </p>
    </section>
  );
}
