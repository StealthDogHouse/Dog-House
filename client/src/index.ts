const example = 'world';

export function hello(world: string = example): string {
  return `Hello ${world}! `;
}