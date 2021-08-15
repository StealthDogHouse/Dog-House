const example = 'world';

function hello(world: string = example): string {
  return `Hello ${world}! `;
}

export default hello;
