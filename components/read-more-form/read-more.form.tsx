"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Input,
  ToggleGroup,
  ToggleGroupItem,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { useForm } from "react-hook-form";
import { Book, Euro, FlaskRound, Mail, Stethoscope, User } from "lucide-react";
import {} from "../ui/toggle-group";
import { cn } from "@/lib/utils";

const readMoreFormSchema = z.object({
  qualification: z.array(z.string()).optional(),
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email").min(1, "Email is required"),
});

type ReadMoreFormType = z.infer<typeof readMoreFormSchema>;

function ReadMoreForm({ formId }: { formId: string }) {
  const form = useForm<ReadMoreFormType>({
    resolver: zodResolver(readMoreFormSchema),
    defaultValues: {
      qualification: ["scientist"],
      name: "Mehdi Karim",
      email: "contact@mehdikarim.com",
    },
  });
  function onSubmit(values: ReadMoreFormType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        id={formId}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="qualification"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                Tell us about yourself to personalize your report
                <FormDescription className="font-medium">
                  Click on or more qualification that best describes you.
                </FormDescription>
              </FormLabel>
              <FormControl>
                <ToggleGroup
                  type="multiple"
                  {...field}
                  onValueChange={(value) => field.onChange(value)}
                  className="flex gap-2 justify-start"
                >
                  <ToggleGroupItem
                    className={cn("flex gap-1", {
                      "ring-1 ring-ring ring-offset-input":
                        field.value?.includes("doctor"),
                    })}
                    value="doctor"
                  >
                    <Stethoscope />
                    <span>Doctor</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className={cn("flex gap-1", {
                      "ring-1 ring-ring ring-offset-input":
                        field.value?.includes("scientist"),
                    })}
                    value="scientist"
                  >
                    <FlaskRound />
                    <span>Scientist</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className={cn("flex gap-1", {
                      "ring-1 ring-ring ring-offset-input":
                        field.value?.includes("investor"),
                    })}
                    value="investor"
                  >
                    <Euro />
                    <span>Investor</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className={cn("flex gap-1", {
                      "ring-1 ring-ring ring-offset-input":
                        field.value?.includes("other"),
                    })}
                    value="other"
                  >
                    <Book />
                    <span>Other</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                How do you want us to call you?
              </FormLabel>
              <div className="flex items-center h-10 w-full rounded-md border border-input bg-background ring-offset-background has-[input:focus]:outline-none has-[input:focus]:ring-2 has-[input:focus]:ring-ring has-[input:focus]:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  px-1">
                <User className="text-muted-foreground" />
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className=" border-none bg-transparent rounded-none ring-0 focus-visible:outline-none focus-visible:ring-0 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
              </div>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                Where do you want to receive the report?
              </FormLabel>
              <div className="flex items-center h-10 w-full rounded-md border border-input bg-background ring-offset-background has-[input:focus]:outline-none has-[input:focus]:ring-2 has-[input:focus]:ring-ring has-[input:focus]:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  px-1">
                <Mail className="text-muted-foreground" />
                <FormControl>
                  <Input
                    placeholder="Your best email"
                    {...field}
                    className=" border-none bg-transparent rounded-none ring-0 focus-visible:outline-none focus-visible:ring-0 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
              </div>
              {/* <FormDescription>This is your email.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export { ReadMoreForm };
