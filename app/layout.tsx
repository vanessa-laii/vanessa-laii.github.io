import type { Metadata } from "next";
import { Arapey } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "./(home)/components/LoadingScreen";

const arapey = Arapey({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
	metadataBase: new URL("https://vanessalai.vercel.app/"),

	title: "Vanessa Lai",
	authors: {
		name: "Vanessa Lai",
	},

	description:
  "Software Engineering Student at McMaster University. I'm passionate about designing for accessibility!",
	openGraph: {
		title: "Personal Website",
		description:
			"Software Engineering Student at McMaster University. I'm passionate about designing for accessibility!",
		url: "https://vanessalai.vercel.app/",
		siteName: "Vanessa Lai",
		images: "/profilePhoto.jpg",
		type: "website",
	},
	keywords: ["Vanessa Lai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const hasVisited = sessionStorage.getItem('hasVisited');
                  if (!hasVisited) {
                    document.body.classList.add('loading-active');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={arapey.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <LoadingScreen />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
