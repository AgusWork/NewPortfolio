import React from "react";

const GralLayout = ({ children, className }: { children: React.ReactNode, className: string }) => {
	return <div className={`${className}  w-full px-[10vw] h-full`}>{children}</div>;
};

export default GralLayout;
