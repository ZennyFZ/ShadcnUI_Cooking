"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface LoadingProps {
  content: string;
  src?: string;
  ImageWidth: number;
  Imageheight: number;
  containerCSS?: string;
  titleCSS?: string;
}

export const Loading = (props: LoadingProps) => {
  const { content, src, ImageWidth, Imageheight, containerCSS, titleCSS } =
    props;

  return (
    <div
      className={`flex justify-center items-center text-black ${containerCSS}`}
    >
      <Image
        unoptimized
        src={src ?? ""}
        alt="ArisuImage"
        width={ImageWidth}
        height={Imageheight}
      />
      <span className={`font-semibold ${titleCSS}`}>{content}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0,
        }}
      >
        .
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.2,
        }}
      >
        .
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.4,
        }}
      >
        .
      </motion.span>
    </div>
  );
};
