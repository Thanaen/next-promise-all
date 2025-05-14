// Fake data loading functions
export async function loadDataA() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return `DataA`;
}

export async function loadDataB() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return `DataB`;
}
