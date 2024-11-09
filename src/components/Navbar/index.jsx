"use client"

import { clsx } from "clsx"
import s from "./styles.module.scss"
import { useTranslations, useLocale } from "next-intl"
import { Link, usePathname } from "@/navigation"

const Navbar = ({ className }) => {
  const t = useTranslations()
  const router = usePathname()
  
  return (
    <nav className={clsx(s["wrapper"], className)}>
      <p>{t("navbar_test")}</p>

      <div className={s["group"]}>
        <Link href={router} locale="en">EN</Link>
        <Link href={router} locale="es">ES</Link>
      </div>

      <div className={s["group"]}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar