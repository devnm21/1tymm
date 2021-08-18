import 'tailwindcss/tailwind.css'
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
  <Auth0Provider
    domain="dev-g5tixfvv.us.auth0.com"
    clientId="KTM54PyPJW4562BrfNTMBzf7KKyga8QO"
    redirectUri={'http://localhost:3000'}
    // useRefreshTokens={true}
  >
    <ChakraProvider>
      <Navbar />
      <div style={{ marginTop: '8em'}}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
    </Auth0Provider>
  )
}

export default MyApp
