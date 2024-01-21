import React from "react";

export type CardProps = {
	title?: React.ReactNode;
	description?: React.ReactNode;
	className?: string;
	children: React.ReactNode;
};

export type CardHeaderProps = {
	title?: React.ReactNode;
	description?: React.ReactNode;
};
