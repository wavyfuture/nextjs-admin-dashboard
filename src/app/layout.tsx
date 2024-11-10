"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

// import and add authenticator 
import {Amplify} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

// configure amplify 
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

// layout 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Authenticator>
          {({ signOut, user }) => (
            <>
              {loading ? <Loader /> : children}
              {/* Optional: Add a sign-out button */}
              <button onClick={signOut} style={{ position: 'absolute', top: '10px', right: '10px' }}>
                Sign out
              </button>
            </>
          )}
        </Authenticator>
      </body>
    </html>
  );
}



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [loading, setLoading] = useState<boolean>(true);

//   // const pathname = usePathname();

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return (
//     <html lang="en">
//       <Authenticator>
//       <body suppressHydrationWarning={true}>
//         {loading ? <Loader /> : children}
//       </body>
//       </Authenticator>
//     </html>
//   );
// }
