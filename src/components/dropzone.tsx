"use client";

import { ImageUp } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export function Dropzone({
  setSelectedImage,
}: {
  setSelectedImage: (file?: File) => void;
}) {
  const [errormessage, setErrorMessage] = useState("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const MAX_FILE_UPLOAD_SIZE = 2 * 1024 * 1024;
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > MAX_FILE_UPLOAD_SIZE) {
        setErrorMessage("File size exceeds 2MB. Please upload a smaller file.");
        e.target.value = "";
        setSelectedImage(undefined);
        return;
      }

      setErrorMessage("");
      setSelectedImage(file);
    }
  };

  return (
    <>
      <div className="flex h-full w-full items-center justify-center dark:bg-black">
        <Input
          onChange={handleUpload}
          className="hidden"
          type="file"
          id="upload-file"
          accept="image/*"
        />

        <Label
          className="relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border bg-white p-10 shadow-lg dark:bg-black/70"
          htmlFor="upload-file"
        >
          <div className="absolute inset-4 rounded-xl border border-dashed"></div>
          <p className="dark:text-white">Upload Image</p>
          <ImageUp size={32} className="dark:text-white" />
        </Label>
      </div>
      <div className="text-center">
        {errormessage && (
          <p className="mt-2 text-sm text-red-500">{errormessage}</p>
        )}
      </div>
    </>
  );
}
