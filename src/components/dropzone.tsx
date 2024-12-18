import { ImageUp } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function Dropzone({
  setSelectedImage,
}: {
  setSelectedImage: (file?: File) => void;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Input
        onChange={(e) => setSelectedImage(e.target.files?.[0])}
        className="hidden"
        type="file"
        id="upload-file"
        accept="image/*"
      />

      <Label
        className="relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border bg-white p-10 shadow-lg"
        htmlFor="upload-file"
      >
        <div className="absolute inset-4 rounded-xl border border-dashed"></div>
        <p>Upload Image</p>
        <ImageUp size={32} />
      </Label>
    </div>
  );
}
