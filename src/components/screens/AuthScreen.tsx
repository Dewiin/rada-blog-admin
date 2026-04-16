import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"

// Components
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export function AuthScreen() {
    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onChange"
    });

    function onLoginSubmit(data: z.infer<typeof loginSchema>) {
        // ... loading and signin
        // ... return error messages if fail

        console.log(data);
    }

    return (
        <div className="h-9/10 flex justify-center items-center">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost">Log In</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                <DialogHeader>
                        <DialogTitle>Welcome Admin</DialogTitle>
                        <DialogDescription>Enter your credentials to access your account.</DialogDescription>
                    </DialogHeader>
                    <form 
                    onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                    className="flex flex-col gap-4"
                    >
                        <FieldGroup className="gap-3">
                            <Controller
                                name="username"
                                control={loginForm.control}
                                render={({ field, fieldState }) => (
                                    <Field 
                                    data-invalid={fieldState.invalid} 
                                    className="gap-1"
                                    >
                                        <FieldLabel>
                                            Username
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="password"
                                control={loginForm.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} className="gap-1">
                                        <FieldLabel>
                                            Password
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            type="password"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="new-password"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                        <Button className="w-full">Log In</Button>
                    </form>
                    <DialogFooter className="sm:justify-center">
                        <p className="text-muted-foreground text-sm">
                            Not an admin?{" "}
                            <button className="font-medium underline cursor-pointer" type="button"
                            >
                                User Dashboard
                            </button>
                        </p>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
