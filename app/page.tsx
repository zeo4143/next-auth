import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <div>
          <LoginButton asChild>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
        <p className="text-white text-lg">
          created a simple dashboard for the understanding how the
          auhtentication will work for both userrs and ADMIN After login
        </p>

        <p className="text-white text-lg">
         Right Now Credentials(email & password) work only for my email as we dont a domain to send email for different users
        </p>

        <p className="text-white text-lg">
         Test Credentials for email & password:-
         <p>heatblast4143@gmail.com</p>
         <p>12345678</p>
        </p>
        
      </div>
    </main>
  );
}
