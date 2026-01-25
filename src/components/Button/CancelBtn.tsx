import type { CancelBtnProps } from "@/types/Button/CancelBtn";

const CancelBtn = (props: CancelBtnProps) => {
	return (
		<button
			type="button"
			onClick={props.onClick}
			className={`border border-[#D3D3D3] cursor-grab hover:bg-gray-50 bg-white py-2.25 px-6 rounded-lg text-base font-medium leading-6 text-[#7C7C7C] ${props.className}`}
		>
			{props.label}
		</button>
	);
};

export default CancelBtn;
