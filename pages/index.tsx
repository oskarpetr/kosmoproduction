import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "backInOut" }}
      >
        <Image
          src={"/images/Logo.png"}
          alt="Kosmo Production Logo"
          width={200}
          height={200}
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
      >
        <h1 className="text-center text-white text-5xl font-semibold">
          Coming Soon
        </h1>
        <p className="text-center text-white text-xl text-opacity-40 w-[32rem]">
          We are coming soon! Currently, we are working hard to give you the
          best experience! See you soon!
        </p>
      </motion.div>

      <motion.div
        className="flex gap-4 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, ease: "easeInOut" }}
      >
        <Link
          href="https://www.facebook.com/profile.php?id=61551983007702"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="fill-neutral-300"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
          </svg>
        </Link>

        <Link href="mailto:hello@kosmoproduction.eu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="fill-neutral-300"
          >
            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
