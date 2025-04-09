
import './App.css';
import "@suki-sdk/react/style.css";
import {use, useEffect, useState} from 'react';
import {SukiProvider, SukiAssistant, useSuki } from '@suki-sdk/react';


const App = () => {
  
  const [tokenModel, setTokenModel] = useState({
    accessToken: "",
    idToken: "",
    expiresIn: 0,
    tokenType: "",
    scope: "",
    uuid: ""
  });


  const { init, isInitialized } = useSuki();

  useEffect(() => {
    const initializeSuki = async () => {
      if (!isInitialized) {
       
          init({
            partnerId: "sdpa-2zDdh6SeETNbPLvbxagB6QD-4KwRs_o1kIkcpDwnqfM=",
            partnerToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSIsImtpZCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSJ9.eyJhdWQiOiIxYWFkZTgwYS0zYjJiLTRmMzYtOTk3Zi1hZTAxMTBhOTdiZGUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iMzFkZmUwNi02MmJmLTQ3OWUtYjA2YS1mMTlmOWNjMGZkZjUvIiwiaWF0IjoxNzQyNDUxMjg3LCJuYmYiOjE3NDI0NTEyODcsImV4cCI6MTc0MjQ1NTE4NywiYWlvIjoiQVVRQXUvOFpBQUFBTWJ1Z3ZrbzJqOGdqMjFsZnQ4ZVlJMXozTnVHaDFyVzF4dXFFOGhSUXh0dzZEVm8wQSsrRmlmRVRFcXM5TmozR0k1c3NvS01BQitreWZvR25WaHhTRHc9PSIsImFtciI6WyJwd2QiXSwiY19oYXNoIjoibHlXWll4RGtGMmpFREw2UzNYUXgwdyIsImNjIjoiQ2dFQUVoSnpZbTk0Y0hKdmRuUmxibUZ1ZEM1amIyMGFFZ29RU0Z5cjVtaXpwVU9WQ1dVcXNHaGdGeUlTQ2hBY0hobzJHdDFFUlpEcFVkem4wZ01BTWdKT1FUZ0EiLCJmYW1pbHlfbmFtZSI6IldpbnN0b24iLCJnaXZlbl9uYW1lIjoiSGFycnkiLCJpcGFkZHIiOiIxOTguMzYuMTI2LjE3IiwibmFtZSI6IkhhcnJ5IFdpbnN0b24iLCJub25jZSI6ImMxZGU1NTk2LTAwODgtNDA3MC1iZGRlLTI4MmYwNmIzMWRmOCIsIm9pZCI6IjhkYmYxNjk4LTU2MDgtNDFmNS05M2YwLWU2Njg4MjMyZTJmNCIsInJoIjoiMS5BUzRBQnY0ZHM3OWlua2V3YXZHZm5NRDk5UXJvclJvck96WlBtWC11QVJDcGU5NjVBSUF1QUEuIiwic2lkIjoiMDAyMDNhMTktOTg2ZS01ZDIxLTVkNTUtYzc1ZGZjMTNjYWVjIiwic3ViIjoiQU15bUpGNG51VmE5enlMczc4Q1FEdG5VZzRhdFk5MFVXUlZzS2xIa0ZoWSIsInRpZCI6ImIzMWRmZTA2LTYyYmYtNDc5ZS1iMDZhLWYxOWY5Y2MwZmRmNSIsInVuaXF1ZV9uYW1lIjoiaHdpbnN0b25Ac2JveHByb3Z0ZW5hbnQuY29tIiwidXBuIjoiaHdpbnN0b25Ac2JveHByb3Z0ZW5hbnQuY29tIiwidXRpIjoiSEI0YU5ocmRSRVdRNlZIYzU5SURBQSIsInZlciI6IjEuMCJ9.WEirddaVtpeJxdXkcpJN6CpjKABaF4Oh0YVHaty14FdBxpC9c8r6YnWBLq1xMybaTyGgkyKwIg74FnCVOBQfcPx0nfh9cJNx2nyO3cDlSXID6xS-vpaF5m6Vg42VV03OTaScdpf7Gm9l0IC4iLwij3Xyx8s5cat_gM5PlcpVw02tMrdrYA5Y-5lw76pTghy968qVMmv7LrQcyvQHLAZrmchN97i5RKv1s0EMcKC8n6dydJZShVm2JoDEB9YLPYZII6c55KRteWEw8CYXNZ6RRn2z7gU8OojBxpQIN19R4vMFUMRG6VJLY2i3u2MCT_aA7ijC8vorDwgixH-jIXczlw",
            providerName: "Harry Winston",
            providerOrgId: "Demo",
            isTestMode : true,
            enableDebug: true,
            logLevel: "info",
            theme: {
              primary: "rgb(255, 0, 34)",
              background: "#FFFFFF",
              secondaryBackground: "#F5F5F5",
              foreground: "#000000",
              warning: "#FFA500"
            }
          });
     
      }

      console.log('Exiting value ' + isInitialized);
    };

    initializeSuki(); // Call the async function
  }, [init, isInitialized]);

 return <div>Suki-aF/aP Integration Trial</div>;
};

export default App;