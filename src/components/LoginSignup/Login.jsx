import SharedForm from "./SharedForm";

export default function Login() {
  return (
    <SharedForm
      title="Login"
      description="Welcome back! Please log in to access your account."
      submitText="Login"
      secondaryText="Sign Up"
      fields={[
        { type: "email", placeholder: "Enter your Email" },
        { type: "password", placeholder: "Enter your Password" },
      ]}
    />
  );
}
