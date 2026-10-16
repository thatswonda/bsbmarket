import { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { APP_STORE_URL, PLAY_STORE_URL, detectStore } from "@/lib/appLinks";

interface GetAppLinkProps {
  className?: string;
  children: ReactNode;
}

/**
 * Sends iPhone/iPad visitors to the App Store and Android visitors to Google Play.
 * On a computer it opens the Download page, which shows both stores.
 */
const GetAppLink = ({ className, children }: GetAppLinkProps) => {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const store = detectStore();
    if (!store) return;
    e.preventDefault();
    window.location.href = store === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
  };

  return (
    <Link to="/download" onClick={onClick} className={className}>
      {children}
    </Link>
  );
};

export default GetAppLink;
