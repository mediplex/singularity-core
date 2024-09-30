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
    <main className="flex flex-col justify-center items-center">
      <header className="flex flex-col items-stretch justify-center gap-12 w-full h-screen sm:max-w-lg relative z-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt=""
          className="absolute -z-10 -top-24 -left-24 rotate-45 max-h-[70vh] dark:opacity-10"
          draggable="false"
          layout=""
          objectFit={"cover"}
        />
        <Image
          src={backgroundImage}
          alt=""
          className="absolute -z-10 -bottom-24 -right-24 rotate-[135deg] max-h-[70vh] dark:opacity-10"
          draggable="false"
          layout=""
          objectFit="cover"
        />
        <hgroup className="text-center flex flex-col items-center gap-2">
          <p className="text-small font-medium rounded-md py-2 px-4 radius bg-muted">
            {CONTENT[local].tag}
          </p>
          <h1 className="text-3xl font-bold">{CONTENT[local].headline}</h1>
          <p className="text-xl">{CONTENT[local].subheadline}</p>
        </hgroup>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-lg h-20 rounded-full">
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
                className="text-lg font-semibold h-20 rounded-full w-full"
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
