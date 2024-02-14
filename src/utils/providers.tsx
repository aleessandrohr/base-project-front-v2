import { ToastContainer } from "react-toastify";

interface Props {
	children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
	return (
		<>
			{children}
			<ToastContainer />
		</>
	);
};

export default Providers;
