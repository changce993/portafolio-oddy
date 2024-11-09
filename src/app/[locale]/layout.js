import "@/theme/index.scss";
import { Footer, Navbar } from "@/components";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from "next-intl/server";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages({ locale });
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
