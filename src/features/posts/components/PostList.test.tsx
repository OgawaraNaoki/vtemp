import { expect, it } from "vitest";
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from "@/test/test-utils";
import { PostsList } from "./PostsList";
import { posts } from "@/mocks/handlers";

it("Should return posts when clicking fetch button", async () => {
  render(<PostsList />);

  expect(
    screen.getByRole("heading", {
      name: "MSW Testing Library Example",
      level: 1,
    }),
  ).toBeDefined();

  userEvent.click(screen.getByRole("button", { name: "Fetch Posts" }));

  await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"));

  posts.forEach((post) => {
    expect(
      screen.getByRole("heading", { name: post.title, level: 2 }),
    ).toBeDefined();
    expect(screen.getByText(post.body)).toBeDefined();
  });
});
