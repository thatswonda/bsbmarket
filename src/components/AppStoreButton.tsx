import { ReactNode } from "react";
import { APP_STORE_URL } from "@/lib/appLinks";

interface AppStoreButtonProps {
  className?: string;
  children: ReactNode;
}

/** Link to Bsb Market on the Apple App Store. */
const AppStoreButton = ({ className, children }: AppStoreButtonProps) => (
  <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);

export default AppStoreButton;
