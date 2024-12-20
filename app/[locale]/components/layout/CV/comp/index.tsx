import { Download } from "lucide-react";
import React, { useState } from "react";

export const Button = ({ href }: { href?: string }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2500);
	};

	return (
        <a href={href} target="_blank" download={href}>
		<button
			onClick={handleClick}
			disabled={isLoading}
            
			className={`
        relative overflow-hidden
        bg-green-400 hover:bg-green-500
        text-white font-medium
        px-4 py-2 rounded-lg
        flex items-center justify-center
        w-full  h-10
        transition-all duration-200
        ${isLoading ? "cursor-wait" : "cursor-pointer"}
      `}
		>
			<Download className="h-5 w-5 " />

			{isLoading && (
				<>
					<div className="absolute inset-0 bg-green-600 animate-slide-right" />
					<svg
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-white animate-fadeIn"
						viewBox="0 0 24 24"
					>
						<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
					</svg>
				</>
			)}
		</button>
        </a>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => <div className={`rounded-lg ${className}`}>{children}</div>;

export const CardContent = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => <div className={`p-4 ${className}`}>{children}</div>;
