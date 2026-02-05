import SharedForm from "./SharedForm";

export default function Signup() {
  return (
    <SharedForm
      title="Sign Up"
      description="Join our community today! Create an account to unlock exclusive features and personalized experiences."
      submitText="Sign Up"
      secondaryText="Login"
      fields={[
        { type: "text", placeholder: "Enter First Name" },
        { type: "text", placeholder: "Enter Last Name" },
        { type: "email", placeholder: "Enter your Email" },
        { type: "password", placeholder: "Enter your Password" },
      ]}
    />
  );
}
