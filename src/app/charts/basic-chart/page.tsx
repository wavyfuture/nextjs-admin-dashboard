import BasicChart from "@/components/Charts/BasicChart";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from 'react';



export const metadata: Metadata = {
  title: "Next.js Basic Chart Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Basic Chart page for NextAdmin Dashboard Kit",
  // other metadata1
};

const BasicChartPage: React.FC = () => {

  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Replace with your WebSocket API Gateway URL
    const apiUrl = 'wss://{api-id}.execute-api.{region}.amazonaws.com/{stage}';
    
    const ws = new WebSocket(apiUrl);

    ws.onopen = () => {
      console.log("Connected to WebSocket API");
    };

    ws.onmessage = (event) => {
      console.log("Message received from server:", event.data);
      setMessage(event.data);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket API");
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Basic Chart" />

      <BasicChart />

      {/* Test the connection */}
      <div>
        <h1>WebSocket Message</h1>
        {message ? <pre>{JSON.stringify(JSON.parse(message), null, 2)}</pre> : <p>Waiting for message...</p>}
      </div>
    </DefaultLayout>
  );
};

export default BasicChartPage;
