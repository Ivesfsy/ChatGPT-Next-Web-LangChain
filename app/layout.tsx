/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT 进阶版",
  description: "ChatGPT进阶版是OpenAI基于GPT-4架构的升级型语言生成模型。它继承了GPT-3的强大生成能力，并通过更大的模型规模和优化的算法，实现了更高质量的文本生成、更准确的信息获取和更自然的对话交互。蓝衫ChatGPT进阶版能更好地理解和生成复杂、多样化的文本，为用户提供更加丰富和个性化的体验。",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "蓝衫ChatGPT 进阶版",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
