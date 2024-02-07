"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AXIOS } from "@/lib/constant";
import { toast } from "sonner";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();

  const createTodoMutation = useMutation({
    mutationKey: ["createTodo"],
    mutationFn: async (data: { title: string; description: string }) => {
      const response = await AXIOS.post("/api/todos", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Todo created successfully");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      toast.error("Failed to create todo");
    },
  });

  const handleCreateTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createTodoMutation.mutate({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
      </CardHeader>
      <form className='' onSubmit={handleCreateTodo}>
        <CardContent>
          <Label htmlFor='title'>Title</Label>
          <Input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label htmlFor='description'>Description</Label>
          <Input
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </CardContent>

        <CardFooter>
          <Button type='submit' className='px-10'>
            Create
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreateTodo;
