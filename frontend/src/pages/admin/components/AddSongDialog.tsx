import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "@/lib/axios";
import { useMusicStore } from "@/stores/useMusicStore";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Upload } from "lucide-react";

const songSchema = z.object({
  title: z.string().min(1, "Title is required"),
  artist: z.string().min(1, "Artist is required"),
  album: z.string().optional(),
  duration: z.string().regex(/^\d+$/, "Duration must be a number"),
});

type SongFormData = z.infer<typeof songSchema>;

const AddSongDialog = () => {
  const { albums } = useMusicStore();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const audioRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<SongFormData>({
    resolver: zodResolver(songSchema),
    defaultValues: {
      title: "",
      artist: "",
      album: "",
      duration: "0",
    },
  });

  const onSubmit = async (data: SongFormData) => {
    if (!audioFile || !imageFile) {
      toast.error("Both image and audio are required");
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("artist", data.artist);
      formData.append("duration", data.duration);
      if (data.album && data.album !== "none") {
        formData.append("albumId", data.album);
      }
      formData.append("audioFile", audioFile);
      formData.append("imageFile", imageFile);

      await axiosInstance.post("/admin/songs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Song added successfully");
      reset();
      setImagePreview(null);
      setAudioFile(null);
      setImageFile(null);
      setOpen(false);
    } catch (err: any) {
      toast.error("Upload failed: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-500 text-black">
          <Plus className="mr-2 h-4 w-4" />
          Add Song
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-zinc-900 border-zinc-700">
        <DialogHeader>
          <DialogTitle>Add New Song</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4 max-w-full truncate">
          {/* Hidden inputs for file selection */}
          <input
            ref={imageRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }
            }}
          />
          <input
		  	// className="bg-zinc-800 border-zinc-700 max-w-full truncate"
            ref={audioRef}
            type="file"
            accept="audio/*"
            hidden
            onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
          />

          {/* Image preview */}
          <div onClick={() => imageRef.current?.click()} className="cursor-pointer border-2 border-dashed  text-center rounded">
            {imagePreview ? (
              <img src={imagePreview} alt="preview" className="w-32 h-32 object-cover mx-auto mb-2 rounded" />
            ) : (
              <>
                <div className="p-3 bg-zinc-800 rounded-full inline-block mb-2">
                  <Upload className="h-6 w-6 text-zinc-400" />
                </div>
                <div className="text-sm text-zinc-400">Click to upload artwork</div>
              </>
            )}
          </div>

          {/* Audio file */}
          <Button variant="outline" onClick={() => audioRef.current?.click()}>
            {audioFile ? audioFile.name : "Choose Audio File"}
          </Button>

          {/* Title */}
          <Input placeholder="Title" {...register("title")} className="bg-zinc-800" />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

          {/* Artist */}
          <Input placeholder="Artist" {...register("artist")} className="bg-zinc-800" />
          {errors.artist && <p className="text-red-500 text-sm">{errors.artist.message}</p>}

          {/* Duration */}
          <Input type="number" placeholder="Duration in seconds" {...register("duration")} className="bg-zinc-800" />
          {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}

          {/* Album */}
          <Select
            onValueChange={(value) => setValue("album", value)}
            value={watch("album")}
          >
            <SelectTrigger className="bg-zinc-800 border-zinc-700">
              <SelectValue placeholder="Select album (optional)" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800">
              <SelectItem value="none">No Album</SelectItem>
              {albums.map((album) => (
                <SelectItem key={album._id} value={album._id}>
                  {album.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Uploading..." : "Add Song"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSongDialog;
