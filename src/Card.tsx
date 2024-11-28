import { cubicBezier } from "motion";
import { useTime, useTransform } from "motion/react"
import { motion } from "motion/react"

const randomPosition = (min = 0, max = 50) => Math.random() * (max - min) + min;

const randomPositionArray = () => [0, randomPosition(), randomPosition(), randomPosition(), randomPosition(), randomPosition(), randomPosition(), randomPosition(), randomPosition(), randomPosition(), 0];
const randomTimeArray = () => [0, Math.random() * 150, Math.random() * 300, Math.random() * 450, Math.random() * 600, Math.random() * 750, Math.random() * 900, Math.random() * 1050, Math.random() * 1200, Math.random() * 1350, 1500].sort((a, b) => a - b);

export default function Card(){
  const time = useTime();

const x = useTransform(time, randomTimeArray(), randomPositionArray(), { ease: cubicBezier(0, 0.78, 0.5, 1) });
const y = useTransform(time, randomTimeArray(), randomPositionArray(), { ease: cubicBezier(0, 0.78, 0.5, 1) });

const scale = useTransform(time, [0,750,1500], [1, 1.1, 1.25], { ease: cubicBezier(0, 0.78, 0.5, 1) });

  return <motion.img style={{
    x,
    y,
    scale
  }} src="./card-back.png" width={200} className='relative z-10' />
}