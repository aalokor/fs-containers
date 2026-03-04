import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Todo from "./Todo";

test("renders todo", () => {
  const todo = { _id: "1", text: "Test todo", done: false };
  const deleteTodo = vi.fn();
  const completeTodo = vi.fn();

  render(
    <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />,
  );

  expect(screen.getByText("Test todo")).toBeInTheDocument();
  expect(screen.getByText("Delete")).toBeInTheDocument();
  expect(screen.getByText("Set as done")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Delete"));
  expect(deleteTodo).toHaveBeenCalledWith(todo);

  fireEvent.click(screen.getByText("Set as done"));
  expect(completeTodo).toHaveBeenCalledWith(todo);
});
