"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CreateTodo from "./create-todo";
import { AXIOS } from "@/lib/constant";

const TodoPage = () => {
  const { data, isLoading, isSuccess, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await AXIOS.get("/api/todos");
      return response.data;
    },
  });

  return (
    <div className='py-5 space-y-5 xl:px-20'>
      <div className='max-w-xl mx-auto'>
        <CreateTodo />
      </div>

      {isFetching && <div>Loading...</div>}

      {isSuccess && (
        <>
          <h1 className='text-3xl font-semibold'>Todos</h1>
          <ul className='grid xl:grid-cols-3 gap-3'>
            {data?.map((todo: any) => (
              <Card key={todo._id}>
                <CardHeader>
                  <CardTitle>{todo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{todo.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TodoPage;
