import { ReadMoreForm } from "@/components/read-more-form";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { DialogDescription } from "@radix-ui/react-dialog";
import Image from "next/image";
import backgroundImage from "@/public/bg.png"; // Add the correct path to your image

const CONTENT = {
  en: {
    tag: "Revolution in cancer treatment",
    headline: "Nanoparticle-based Radiopharmaceutical",
    subheadline:
      "We develop the world first universal nanoparticle platform that embeds radioactive materials to deliver targeted radiation to cancer cells.",
    cta: "Read more",
    dialog: {
      title: "Get the full report about aken medical technology in your inbox",
      description:
        "You will receive a detailed report about our technology, the science behind it, and the impact it has on cancer treatment.",
    },
  },
  fr: {},
};

const SETTINGS = {
  "read-more-form-id": "read-more",
};

const local = "en";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <header className="relative z-0 flex h-screen w-full flex-col items-stretch justify-center gap-12 overflow-hidden px-4 sm:max-w-lg">
        <Image
          src={backgroundImage}
          alt=""
          className="absolute -left-24 -top-24 -z-10 max-h-[70vh] rotate-45 dark:opacity-10"
          draggable="false"
          layout=""
          objectFit={"cover"}
        />
        <Image
          src={backgroundImage}
          alt=""
          className="absolute -bottom-24 -right-24 -z-10 max-h-[70vh] rotate-[135deg] dark:opacity-10"
          draggable="false"
          layout=""
          objectFit="cover"
        />
        <hgroup className="flex flex-col items-center gap-2 text-center">
          <p className="text-small radius rounded-md bg-muted px-4 py-2 font-medium">
            {CONTENT[local].tag}
          </p>
          <h1 className="text-3xl font-bold">{CONTENT[local].headline}</h1>
          <p className="text-xl">{CONTENT[local].subheadline}</p>
        </hgroup>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-20 rounded-full text-lg">
              {CONTENT[local].cta}
            </Button>
          </DialogTrigger>
          <DialogContent className="flex flex-col gap-12">
            <DialogHeader>
              <DialogTitle>{CONTENT[local].dialog.title}</DialogTitle>
              <DialogDescription>
                {CONTENT[local].dialog.description}
              </DialogDescription>
            </DialogHeader>
            <ReadMoreForm formId={SETTINGS["read-more-form-id"]} />
            <DialogFooter>
              <Button
                type="submit"
                form={SETTINGS["read-more-form-id"]}
                className="h-20 w-full rounded-full text-lg font-semibold"
              >
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>
    </main>
  );
}
