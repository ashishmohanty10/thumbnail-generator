"use client";

import { useState } from "react";
import { Dropzone } from "../dropzone";
import { Style } from "../style";

export function ThumbnailCreator() {
  const [selectedStyle, setSelectedStyle] = useState<string>("style1");
  const [loading, setLoading] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const setSelectedImage = async (file?: File) => {
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const src = e.target?.result as string;
        setImageSrc(src);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {imageSrc ? (
        <>
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-dashed border-gray-800"></div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div className="flex flex-col space-y-5">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Hi, there
            </h1>
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Want to create thumnail?
            </p>

            <p className="pb-2 pt-4 leading-7 text-muted-foreground">
              Use one of these templates below
            </p>

            <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
              <Style
                image="https://images.unsplash.com/photo-1732192548772-edf8ce6a4712?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                isSelected={selectedStyle === "style1"}
                selectStyle={() => {}}
              />
              <Style
                image="https://images.unsplash.com/photo-1732192548772-edf8ce6a4712?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                isSelected={selectedStyle === "style2"}
                selectStyle={() => setSelectedStyle("style2")}
              />
              <Style
                image="https://images.unsplash.com/photo-1732192548772-edf8ce6a4712?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                isSelected={selectedStyle === "style3"}
                selectStyle={() => setSelectedStyle("style3")}
              />
            </div>
          </div>
          <Dropzone setSelectedImage={setSelectedImage} />;
        </div>
      )}
    </>
  );
}
