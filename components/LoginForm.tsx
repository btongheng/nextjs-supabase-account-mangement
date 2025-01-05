"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {login, signup} from "@/app/login/actions"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [isView, setIsView] = useState(false);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="enter email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={isView ? "text" : "password"}
                    placeholder="enter password"
                    required />
                  {isView ? (
                    <Eye size={18}
                      className="absolute right-2 top-2 z-10 cursor-pointer"
                      onClick={() => setIsView(!isView)}
                    />
                  ) : (
                    <EyeOff size={18}
                      className="opacity-40 absolute right-2 top-2 z-10 cursor-pointer "
                      onClick={() => setIsView(!isView)}
                    />
                  )}
                </div>
              </div>
              <Button className="w-full" formAction={login}>
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href={'#'} className="underline underline-offset-4">
                Sign up
              </Link>
              <Button className="w-full" formAction={signup}>
                Signup
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
