import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FacebookLogo, PaperPlaneTilt } from "@phosphor-icons/react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center select-none">
      <Head>
        <title>Kosmo Production</title>
      </Head>

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
          className="w-40 md:w-60"
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
      >
        <h1 className="text-center text-white text-3xl md:text-4xl font-semibold tracking-wide">
          Coming Soon
        </h1>
        <p className="text-center text-white text-lg md:text-lg text-opacity-40 w-[20rem] md:w-[32rem] tracking-wide">
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
          className="w-12 h-12 flex justify-center items-center bg-white bg-opacity-20 rounded-full"
        >
          <FacebookLogo
            className="text-white opacity-80 text-3xl"
            weight="bold"
          />
        </Link>

        <Link
          href="mailto:hello@kosmoproduction.eu"
          className="w-12 h-12 flex justify-center items-center bg-white bg-opacity-20 rounded-full"
        >
          <PaperPlaneTilt
            className="text-white opacity-80 text-2xl"
            weight="bold"
          />
        </Link>
      </motion.div>
    </div>
  );
}
