import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "./mode-toggle";
import { logIn } from "@/lib/auth";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const user = await logIn(email, password);
    if (user) {
      console.log("User logged in:", user);
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="grid grid-cols-2 items-center">
            <span>Login</span>
            <div className="justify-self-end">
              <ModeToggle />
            </div>
          </CardTitle>
          <CardDescription>
            Enter email & password to use your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/signup" className="underline text-sm">
            Sign up
          </Link>
          <Button type="submit" onClick={handleLogin}>
            {isLoading ? (
              <>
                Loading <Spinner />
              </>
            ) : (
              "Login"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
