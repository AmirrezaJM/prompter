"use client";

import {
  EditFavoritePrompt,
  deletePrompt,
  EditPrompt,
} from "@/app/actions/actionPrompt";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Star, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PromptItemProps {
  id: number;
  title: string;
  description: string;
  mood: string;
  favorite: boolean;
}

export function PromptItem({
  id,
  title,
  description,
  mood,
  favorite,
}: PromptItemProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFavorite, setisFavorite] = useState(favorite);
  const [editTitle, setEditTitle] = useState(title);
  const [editdescription, setEditDescription] = useState(description);
  const [editmood, setEditMood] = useState(mood);

  const handleDeletePrompt = async (id: number) => {
    const { message, error } = await deletePrompt(id);

    if (error) {
      toast.error(error);
    }

    toast.success(message ?? "Prompt deleted successfully.");
  };

  const handleFavoritePrompt = async (id: number, isFav: boolean) => {
    console.log(id, isFav);
    console.log(id, isFavorite);
    const { message, error } = await EditFavoritePrompt(id, isFav);
    if (error) {
      toast.error(error);
    }

    toast.success(message ?? "changed favorite successfully.");
  };

  const handleDialogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { message, error } = await EditPrompt(
      id,
      editTitle,
      editdescription,
      editmood
    );
    if (error) {
      toast.error(error);
    }

    toast.success(message ?? "Prompt added to favorite successfully.");
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border rounded-2xl bg-slate-50 px-4 py-4 my-3 hover:bg-slate-100 transition-colors">
      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-1">
          <div>
            <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">
              title:{title}
            </p>
          </div>
          <div>
            <p className="text-[#4e7397] text-sm font-normal leading-normal line-clamp-2">
              {mood}
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <p className="text-[#4e7397] text-sm font-normal leading-normal line-clamp-2">
            description: {description}
          </p>
        </div>
      </div>
      <div className="shrink-0 self-end sm:self-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#0e141b] h-7 w-7"
            >
              <MoreHorizontal size={24} />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => {
                const newFav = !isFavorite;
                setisFavorite(newFav);
                handleFavoritePrompt(id, newFav);
              }}
            >
              <Star size={16} />
              <span>Favorite</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setIsDialogOpen(true)}
            >
              <Pencil size={16} />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2 text-destructive"
              onClick={() => handleDeletePrompt(id)}
            >
              <Trash2 size={16} />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Prompt</DialogTitle>
            <DialogDescription>
              Make changes to your prompt here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleDialogSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={editdescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Select value={editmood} onValueChange={setEditMood}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Mood" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CHILL">Chill</SelectItem>
                      <SelectItem value="HAPPY">Happy</SelectItem>
                      <SelectItem value="SAD">Sad</SelectItem>
                      <SelectItem value="STUDENT">Student</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="mood" value={editmood} />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
