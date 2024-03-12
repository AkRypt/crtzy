import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="text-center">
        <h1 className="text-8xl font-serif mb-8 text-black">crtzy</h1>
        <SignUpForm />
      </div>
    </div>
  );
}
