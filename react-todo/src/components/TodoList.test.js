import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter a new todo...");
    const addButton = screen.getByText("Add");

    // Simulate user typing and clicking "Add"
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    // Verify the new task appears
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo's completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Click to toggle completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to undo completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoText = screen.getByText("Learn React");
    const deleteButton = screen.getAllByText("Delete")[0];

    // Click delete and verify item is removed
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});