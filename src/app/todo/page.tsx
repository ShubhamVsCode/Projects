"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const BASE_URL = "https://api.shubhamvscode.online";

const TodoPage = () => {
  const { data, isLoading, isSuccess, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get(BASE_URL + "/api/todos");
      return response.data;
    },
  });

  return (
    <div>
      <h1>Todo Page</h1>
      {isFetching && <div>Loading...</div>}

      {isSuccess && (
        <ul>
          {data?.map((todo: any) => (
            <Card key={todo.id}>
              <CardHeader>{todo.title}</CardHeader>
              <CardContent>{todo.description}</CardContent>
            </Card>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoPage;
