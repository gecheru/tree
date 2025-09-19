import { printTree } from "./printTree.js";

export const data = { 
  name: 1, 
  items: [ 
    { 
      name: 2, 
      items: [{ name: 3 }, { name: 4 }] 
    }, 
    { 
      name: 5, 
      items: [{ name: 6 }] 
    } 
  ] 
};

test('printTree', () => {
  printTree(data)
  expect(1).toBe(1)
})