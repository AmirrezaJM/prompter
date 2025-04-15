"use client";

import { useActionState, useEffect, useState } from "react";
import { addPrompt } from "@/app/actions/actionPrompt";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PromptForm() {
  const initialState = { message: "", error: undefined };
  const [state, dispatch] = useActionState(addPrompt, initialState);
  const [hasShownToast, setHasShownToast] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mood, setMood] = useState("CHILL");
  const [isDynamicInput, setDynamicInput] = useState([]);


  useEffect(() => {
    const regex = /{{\s*([^{}]+?)\s*}}/g;
    const matches = [...description.matchAll(regex)];
    const variables = matches.map((match) => match[1]);
    setDynamicInput(variables)
  }, [description]);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message, {
        description: "Prompt created successfully.",
        duration: 3000,
      });
      setTitle("");
      setDescription("");
      setMood("CHILL");
    }
    setHasShownToast(true);
  }, [state?.message, hasShownToast]);

  useEffect(() => {
    setHasShownToast(false);
  }, [state]);

  const isDisabled =
    title.trim() === "" || description.trim() === "" || mood.trim() === "";
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 flex justify-center">
      <Card className="w-full max-w-md min-w-md border-none shadow-md bg-white dark:bg-[#1e1e1e] transition-colors">
        <CardHeader className="px-4 pb-2 pt-5">
          <CardTitle className="text-[#0e141b] dark:text-white text-2xl font-bold leading-tight">
            Create a new prompt
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div>
            <form action={dispatch} className="flex flex-col space-y-2">
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <div className="block w-full">
                  <Input
                    placeholder="enter your title"
                    name="title"
                    id="title"
                    className="py-2"
                    aria-describedby="title-error"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <div id="title-error" className="px-1">
                    {state?.errors?.title &&
                      state.errors.title.map((err: string) => (
                        <p key={err} className="text-xs text-red-500">
                          {err}
                        </p>
                      ))}
                  </div>
                </div>
                <div className="w-full block">
                  <Textarea
                    placeholder="enter your description"
                    name="description"
                    id="description"
                    className="py-2"
                    aria-describedby="description-error"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div id="description-error" className="px-1">
                    {state?.errors?.description &&
                      state.errors.description.map((err: string) => (
                        <p key={err} className="text-xs text-red-500">
                          {err}
                        </p>
                      ))}
                  </div>
                </div>
                <div className="w-full">
                  <Select value={mood} onValueChange={setMood}>
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
                  <input type="hidden" name="mood" value={mood} />
                </div>
                      
                {isDynamicInput.map((item,index) => {
                  return (
                    <Input
                      key={index}
                      placeholder={`write your input`}
                      name={`dynamic-${item}`}
                      id={`dynamic-${item}`}
                      className="py-2"
                      aria-describedby="title-error"
                      value={item}
                      onChange={(e) => {
                        const newInputs = [...isDynamicInput];
                        newInputs[index] = e.target.value;
                        setDynamicInput(newInputs);
                      }}
                    />
                  );
                })}
              </div>

              <div className="flex px-4 py-3 justify-center">
                <Button
                  disabled={isDisabled}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer transition-all hover:scale-110 text-white font-semibold"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
