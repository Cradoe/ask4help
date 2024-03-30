"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { ReactElement, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { GrAttachment } from "react-icons/gr";

export const FileDropZone = ({
  onSelectFile,
  onSelectMultipleFiles,
  accept,
  showPreview = true,
  placeholder,
  children,
  multiple = false,
}: {
  onSelectFile?: Function;
  onSelectMultipleFiles?: Function;
  accept?: Accept;
  showPreview?: boolean;
  placeholder?: string;
  children?: ReactElement;
  multiple?: boolean;
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setUploadedFiles(acceptedFiles);

      onSelectFile?.(acceptedFiles?.[0]);
      onSelectMultipleFiles?.(acceptedFiles);
    },
    accept,
    multiple,
  });

  return (
    <div
      {...getRootProps()}
      className={clsx(
        "text-center h-72 text-gray-400 rounded grid grid-cols-1 items-center justify-center cursor-pointer ease-in-out duration-200 border border-dashed border-4 rounded-xl",
        isDragActive ? "bg-blue-200" : "bg-white hover:bg-gray-100"
      )}
    >
      <div>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-center text-xl">
            Drop your media file here in this box
          </p>
        ) : children ? (
          children
        ) : (
          <p className="text-center text-sm">
            {placeholder
              ? placeholder
              : "Drag and drop file here, or click to select file"}
          </p>
        )}
      </div>
      {uploadedFiles?.length > 0 && showPreview && (
        <ul className="flex flex-wrap justify-center items-center">
          {uploadedFiles?.map((file: File) => (
            <li key={file.name} className="flex items-center gap-2 text-black">
              <GrAttachment />
              <span>
                {" "}
                {file.name?.substring(0, 20)}
                {file?.name?.length > 20 && "..."}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
