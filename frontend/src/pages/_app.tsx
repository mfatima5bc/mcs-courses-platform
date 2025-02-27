import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppProps } from "next/app";
import '../styles/global.css'

// import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp