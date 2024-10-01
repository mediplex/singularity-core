"use client";

import { zodResolver } from "@hookform/resolvers/zod";

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
import {
  Book,
  Check,
  Euro,
  FlaskRound,
  LucideProps,
  Mail,
  Stethoscope,
  User,
} from "lucide-react";
import {} from "../ui/toggle-group";
import { cn } from "@/lib/utils";
import { readMoreFormSchema, ReadMoreFormType } from "./read-more-form-schema";
import { ForwardRefExoticComponent, RefAttributes } from "react";

function ReadMoreForm({ formId }: { formId: string }) {
  const form = useForm<ReadMoreFormType>({
    resolver: zodResolver(readMoreFormSchema),
    defaultValues: {
      qualification: [],
      name: "",
      email: "",
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
                <FormDescription className="font-normal">
                  Click on or more qualification that best describes you.
                </FormDescription>
              </FormLabel>
              <FormControl>
                <ToggleGroup
                  // size={"lg"}
                  type="multiple"
                  {...field}
                  onValueChange={(value) => field.onChange(value)}
                  className="grid grid-cols-2 justify-start gap-2"
                >
                  {/* Doctor */}
                  <IconToggleGroupItem
                    checked={field.value?.includes("doctor")}
                    label="Doctor"
                    value={"doctor"}
                    Icon={Stethoscope}
                  />

                  {/* Scientist */}
                  <IconToggleGroupItem
                    checked={field.value?.includes("scientist")}
                    label="Scientist"
                    value="scientist"
                    Icon={FlaskRound}
                  />

                  {/* Investor */}
                  <IconToggleGroupItem
                    checked={field.value?.includes("investor")}
                    label="Investor"
                    value="investor"
                    Icon={Euro}
                  />

                  {/* Other */}
                  <IconToggleGroupItem
                    checked={field.value?.includes("other")}
                    label="Other"
                    value="other"
                    Icon={Book}
                  />
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
              <div className="flex h-10 w-full items-center rounded-md border border-input bg-background px-1 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 has-[input:focus]:outline-none has-[input:focus]:ring-2 has-[input:focus]:ring-ring has-[input:focus]:ring-offset-2">
                <User className="text-muted-foreground" />
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="rounded-none border-none bg-transparent outline-none ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
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
              <div className="flex h-10 w-full items-center rounded-md border border-input bg-background px-1 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 has-[input:focus]:outline-none has-[input:focus]:ring-2 has-[input:focus]:ring-ring has-[input:focus]:ring-offset-2">
                <Mail className="text-muted-foreground" />
                <FormControl>
                  <Input
                    placeholder="Your best email"
                    {...field}
                    className="rounded-none border-none bg-transparent outline-none ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
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

const IconToggleGroupItem: React.FC<{
  checked?: boolean;
  label: string;
  value: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}> = ({ checked, label, value, Icon }) => {
  return (
    <ToggleGroupItem
      className={cn(
        "flex items-center justify-start gap-2 border border-input",
        {
          "ring-1 ring-ring ring-offset-input": checked,
        },
      )}
      value={value}
    >
      <Icon />
      <span className="flex flex-1">{label}</span>
      <Check
        className={cn("opacity-0", {
          "opacity-100": checked,
        })}
      />
    </ToggleGroupItem>
  );
};
