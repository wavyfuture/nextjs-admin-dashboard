// layout.tsx
"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { Amplify } from 'aws-amplify';
import { Authenticator, Button, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../../aws-exports';
import SigninWithPassword from "@/components/Auth/SigninWithPassword";
import { customTheme } from '../app/auth/customTheme';

Amplify.configure(awsconfig);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider theme={customTheme} colorMode="light">
          <Authenticator
            initialState="signIn"
            loginMechanisms={['username']}
            formFields={{
              signIn: {
                username: { placeholder: "Enter your username" },
                password: { placeholder: "Enter your password" },
              }
            }}
            components={{
              SignIn: {
                Header() { return <h3> Login To Wavetech App </h3>; },
                Footer() {
                  return <a href="/forgot-password" style={{ color: '#0066cc' }}>Forgot your password?</a>;
                },
              },
            }}
            hideSignUp={true}
          >
            {({ signOut, user }) => (
              <>
                {user ? (loading ? <Loader /> : children) : <SigninWithPassword />}
                <Button 
                  variation="primary"
                  onClick={signOut}>
                  Sign out
                </Button>
              </>
            )}
          </Authenticator>
        </ThemeProvider>
      </body>
    </html>
  );
}


//------------
// "use client";
// import "jsvectormap/dist/css/jsvectormap.css";
// import "flatpickr/dist/flatpickr.min.css";
// import "@/css/satoshi.css";
// import "@/css/style.css";
// import React, { useEffect, useState } from "react";
// import Loader from "@/components/common/Loader";

// // import and add authenticator 
// import {Amplify} from 'aws-amplify';
// import { Authenticator } from '@aws-amplify/ui-react';

// // configure amplify 
// import awsconfig from '../../aws-exports';
// Amplify.configure(awsconfig);

// //import sign-in libraries from auth/signin
// import SignIn from "@/components/Auth/Signin";

// // layout 
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return (
//     <html lang="en">
//       <body suppressHydrationWarning={true}>
//         <Authenticator>
//           {({ signOut, user }) => (
//             <>
//               {user ? 
//                 (
//                   loading ? <Loader/> : children
//                 ) : 
//                 (
//                   <SignIn/>
//                 )
//               }
              
//               <button onClick={signOut} style={{ position: 'absolute', top: '10px', right: '10px' }}>
//                 Sign out
//               </button>
//             </>
//           )}
//         </Authenticator>
//       </body>
//     </html>
//   );
// }

