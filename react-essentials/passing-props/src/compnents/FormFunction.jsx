import FormInput from "./FormInput";

export default function FormFunction() {
  return (
    <form>
      <FormInput
        labelText="Email"
        inputId="email"
        inputType="email"
        placeholder="you@example.com"
        inputDescription="We'll only use this for spam."
      />
    </form>
  );
}
