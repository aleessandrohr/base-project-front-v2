import Providers from "@/utils/providers";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

interface Props {
	children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="pt-br">
			<body className={roboto.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};

export default RootLayout;