import { useNavigate } from "react-router-dom";
import { User } from "../App";
import "./SignUp.css";

export type Props = {
  signIn: (user: User) => void;
};

export function SignUp({ signIn }: Props) {

    let navigate = useNavigate()

  return (
      <div className="signup">
        <h1>Create a new account</h1>
        <form
            onSubmit={(event) => {
            event.preventDefault();
            const newUser = {
                username: event.target.username.value,
                email: event.target.email.value,
                password: event.target.password.value,
                transactions: []
            };

            fetch("http://localhost:4000/signup", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then((r) => r.json())
                .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    signIn(data);
                }
                });
            }}
        >
            <input type="text" name="username" placeholder="username..." required />
            <input type="text" name="email" placeholder="email..." required />
            <input
            type="password"
            name="password"
            placeholder="password..."
            required
            />
            <button>Sign Up</button>
        </form>
        <div className="signup-login">
                    <span>Already have an account?</span>
                    <button onClick={() => {
                        navigate('/login')
                    }}>Login</button>
            </div>
      </div>
  );
}
