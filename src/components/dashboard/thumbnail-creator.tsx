"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Dropzone } from "../dropzone";
import { Style } from "../style";
import { presets } from "~/lib/presets";
import { Button } from "../ui/button";
import { ChevronLeft, Download, PencilRuler } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Select, SelectItem, SelectTrigger } from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { SelectContent, SelectValue } from "@radix-ui/react-select";

import { inter, domine, roboto_mono } from "~/lib/fonts";
import { useUploadThing } from "~/lib/uploadthing";

export function ThumbnailCreator({ children }: { children: React.ReactNode }) {
  const [selectedStyle, setSelectedStyle] = useState<string>("style1");
  const [loading, setLoading] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const { startUpload } = useUploadThing("imageUploader");

  const [text, setText] = useState("POV");
  const [font, setFont] = useState("arial");

  const [processedImgUrl, setProcessedImageUrl] = useState<string | null>(null);

  const [canvasReady, setCanvasReady] = useState(false);
  const [savedFile, setSavedFile] = useState<File | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);

  const setSelectedImage = async (file?: File) => {
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const src = e.target?.result as string;
        setImageSrc(src);

        workerRef.current?.postMessage(src);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = useCallback(
    async (canvas: HTMLCanvasElement) => {
      console.log("uploading started here");
      const blob = await new Promise<Blob>((resolve) => {
        console.log("inside the blob");
        canvas?.toBlob((blob) => {
          if (blob) resolve(blob);
        }, "image/png");
      });

      const file = new File([blob], "thumbnail.png", { type: "image/png" });
      const res = await startUpload([file]);
      if (res?.[0]) {
        console.log("uploaded");
        return res[0].url;
      }
    },
    [startUpload],
  );

  const drawCompositeImage = useCallback(() => {
    if (!canvasRef.current || !canvasReady || !imageSrc || !processedImgUrl)
      return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bgImage = new Image();

    bgImage.onload = () => {
      canvas.width = bgImage.width;
      canvas.height = bgImage.height;

      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

      let preset = presets.style1;
      switch (selectedStyle) {
        case "style2":
          preset = presets.style2;
          break;
        case "style3":
          preset = presets.style3;
          break;
      }

      ctx.save();

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      let fontSize = 100;
      let selectFont = "arial";

      switch (font) {
        case "inter":
          selectFont = inter.style.fontFamily;
          break;
        case "domine":
          selectFont = domine.style.fontFamily;
          break;
        case "roboto_mono":
          selectFont = roboto_mono.style.fontFamily;
          break;
      }

      ctx.font = `${preset.fontWeight} ${fontSize}px ${selectFont}`;

      const textWidth = ctx.measureText(text).width;
      const targetWidth = canvas.width * 0.9;

      fontSize *= targetWidth / textWidth;
      ctx.font = `${preset.fontWeight} ${fontSize}px ${selectFont}`;

      ctx.fillStyle = preset.color;
      ctx.globalAlpha = preset.opacity;

      const x = canvas.width / 2;
      const y = canvas.height / 2;

      ctx.translate(x, y);
      ctx.fillText(text, 0, 0);
      ctx.restore();

      const foreGroundImage = new Image();

      foreGroundImage.onload = async () => {
        ctx.drawImage(foreGroundImage, 0, 0, canvas.width, canvas.height);
        await handleUpload(canvas);
      };

      foreGroundImage.src = processedImgUrl;
    };

    bgImage.src = imageSrc;
  }, [
    canvasReady,
    font,
    handleUpload,
    imageSrc,
    processedImgUrl,
    selectedStyle,
    text,
  ]);

  useEffect(() => {
    if (canvasReady) {
      drawCompositeImage();
    }
  }, [canvasReady, drawCompositeImage]);

  const handleDownload = async () => {
    if (canvasRef.current) {
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  useEffect(() => {
    workerRef.current = new Worker(new URL("./worker.ts", import.meta.url));

    workerRef.current.onmessage = (event) => {
      const blob = event.data as Blob;
      const file = new File([blob], "thumbnail.png", { type: "image/png" });
      setSavedFile(file);
      const processedUrl = URL.createObjectURL(blob);

      setProcessedImageUrl(processedUrl);
      setCanvasReady(true);
      setLoading(false);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  return (
    <>
      {imageSrc ? (
        <>
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-dashed border-gray-800"></div>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center">
              <Button
                className="mb-6 flex items-center gap-3 self-end"
                onClick={() => {
                  setImageSrc(null);
                  setProcessedImageUrl(null);
                  setCanvasReady(false);
                }}
              >
                <ChevronLeft /> <p className="leading-7">Go Back</p>
              </Button>

              <div className="max-w-4xl items-center justify-between gap-10 xl:flex">
                <div className="my-4 flex w-full flex-col items-center gap-3">
                  <canvas
                    className="max-h-lg h-auto w-full max-w-lg rounded-2xl"
                    ref={canvasRef}
                  ></canvas>
                </div>

                <Card className="w-full shadow-xl">
                  <CardHeader>
                    <CardTitle>Edit</CardTitle>
                    <CardDescription>
                      Change below settings to edit your upload photo
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="grid w-full items-center gap-2">
                      <Label htmlFor="text">Edit text</Label>
                      <Input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                    <div className="grid w-full items-center gap-4">
                      <Label htmlFor="font">Select Font</Label>
                      <Select
                        value={font}
                        onValueChange={(value) => setFont(value)}
                      >
                        <SelectTrigger id="font">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          className="w-full bg-white"
                        >
                          <SelectItem value="arial">Arial</SelectItem>
                          <SelectItem value="inter">Inter</SelectItem>
                          <SelectItem value="domine">Domine</SelectItem>
                          <SelectItem value="roboto_mono">
                            Roboto_mono
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-wrap justify-between gap-2">
                    <Button
                      variant="secondary"
                      className="w-fit self-end border hover:shadow-lg"
                      onClick={() => drawCompositeImage()}
                    >
                      <PencilRuler />
                      Update
                    </Button>

                    <Button
                      className="w-fit self-end hover:shadow-lg"
                      onClick={() => handleDownload()}
                    >
                      <Download />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col space-y-5">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Hi, there
            </h1>
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Want to create thumbnail?
            </p>

            <p className="pb-2 pt-4 leading-7 text-muted-foreground">
              Use one of these templates below
            </p>

            <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
              <Style
                image="/preset1.png"
                isSelected={selectedStyle === "style1"}
                selectStyle={() => setSelectedStyle("style1")}
              />
              <Style
                image="/preset2.png"
                isSelected={selectedStyle === "style2"}
                selectStyle={() => setSelectedStyle("style2")}
              />
              <Style
                image="/preset3.png"
                isSelected={selectedStyle === "style3"}
                selectStyle={() => setSelectedStyle("style3")}
              />
            </div>
          </div>
          <Dropzone setSelectedImage={setSelectedImage} />
          <div className="mt-8">{children}</div>
        </div>
      )}
    </>
  );
}
