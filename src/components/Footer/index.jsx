"use client"

import { clsx } from "clsx"
import s from "./styles.module.scss"

const Footer = ({ className }) => {
  return (
    <nav className={clsx(s["wrapper"], className)}>
      Footer
    </nav>
  )
}

export default Footer