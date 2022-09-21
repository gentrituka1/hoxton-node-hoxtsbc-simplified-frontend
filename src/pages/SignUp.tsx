import { User } from "../App";
import "./SignUp.css";

export type Props = {
  signIn: (user: User) => void;
};

export function SignUp({ signIn }: Props) {
  return (
      <div className="signup">
        <h1>Create a new account</h1>
        <form
            onSubmit={(event) => {
            event.preventDefault();
            const newUser = {
                username: event.target.username.value,
                email: event.target.email.value,
                password: event.target.password.value
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
            <button>Submit</button>
        </form>
      </div>
  );
}
