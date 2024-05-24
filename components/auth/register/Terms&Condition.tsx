import Link from "next/link";

export default function TermsAndCondition() {
  return (
    <span className="flex items-center text-sm gap-2">
      <p className="text-regularText">
        By signing up, you agree to our{" "}
        <Link className="text-blue-500 font-medium" href={"/terms-of-service"}>
          Terms and Conditions , Privacy Policy
        </Link>
        , and consent to receive emails from us regarding account updates,
        promotions, and more.
      </p>
    </span>
  );
}
