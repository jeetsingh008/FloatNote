"use client";
import React from "react";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FormSchemaType } from "@/Schema/CreateNoteFormSchema";
import formSchema from "@/Schema/CreateNoteFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { addNote } from "@/redux/features/NoteSlice";
import { closeModal } from "@/redux/features/ModalFunctionsSlice";

const CreateNoteForm = () => {
  const dispatch = useAppDispatch();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (data: FormSchemaType) => {
    const newNote = { id: Math.random(), ...data };
    dispatch(addNote(newNote));
    dispatch(closeModal());
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 pt-8 font-sans w-full"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Title</FormLabel>
              <FormControl>
                <Input
                  className="text-white/80"
                  placeholder="Enter Title"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Content</FormLabel>
              <FormControl>
                <Textarea
                  className="text-white/80 h-28 sm:h-44 md:h-48 xl:h-52 2xl:h-56 resize-none custom-scroll"
                  placeholder="Content Here.."
                  {...field}
                ></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center">
          <Button
            className="text-[19px] border border-emerald-600 bg-emerald-800/20 hover:bg-emerald-900/20"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateNoteForm;
