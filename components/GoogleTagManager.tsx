import Script from "next/script";

const GTAG_ID = process.env["NEXT_PUBLIC_GTAG_ID"];

if (typeof window !== "undefined") {
  // Store the env variable as global var so it can be accessed in /public/gtm.js
  // @ts-ignore-next-line
  window["NEXT_PUBLIC_GTAG_ID"] = GTAG_ID;
}

export const GoogleTagManager: React.FC = () => {
  return (
    <>
      <Script
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
      />
      <Script strategy="worker" src="/gtm.js" />
    </>
  );
};
