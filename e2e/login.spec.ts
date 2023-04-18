import { test, expect } from "@playwright/test";

test("invalid email", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const emailInput = page.getByTestId("email");
  const passInput = page.getByTestId("password");

  await emailInput.type("test");
  await passInput.type("Teste1");

  await page.getByRole("button").click();
  await expect(page.getByTestId("email-error")).toContainText(
    "Insira um e-mail válido"
  );
});

test("invalid password", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const emailInput = page.getByTestId("email");
  const passInput = page.getByTestId("password");

  await emailInput.type("tech@nave.rs");
  await passInput.type("");

  await page.getByRole("button").click();
  await expect(page.getByTestId("password-error")).toContainText(
    "A senha deve ter pelo menos 6 caracteres"
  );
});

test("passed login", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const emailInput = page.getByTestId("email");
  const passInput = page.getByTestId("password");

  await emailInput.type("tech@nave.rs");
  await passInput.type("Teste1");

  await page.getByRole("button").click();
  await expect(page).toHaveTitle("Login");
});
