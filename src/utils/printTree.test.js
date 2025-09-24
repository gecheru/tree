import { beforeEach, describe, it, test, jest, afterEach, expect } from '@jest/globals'
import { printTree } from "./printTree.js";

describe('printTree', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })
  
  afterEach(() => {
    consoleSpy.mockRestore()
  })

  it('should render single node', () => {
    const data = {
      name: 1
    }

    printTree(data)

    expect(consoleSpy).toHaveBeenCalledWith('└── 1')
  })

  it('should render child node', () => {
    const data = {
      name: 1,
      items: [
        { name: 2 }
      ]
    }

    printTree(data)

    expect(consoleSpy).toHaveBeenCalledWith('└── 1')
    expect(consoleSpy).toHaveBeenCalledWith('    └── 2')
    expect(consoleSpy).toHaveBeenCalledTimes(2)
  })

  it('should render child node with siblings', () => {
    const data = {
      name: 1,
      items: [
        { name: 2 },
        { name: 3 },
      ]
    }

    printTree(data)

    expect(consoleSpy).toHaveBeenCalledWith('└── 1')
    expect(consoleSpy).toHaveBeenCalledWith('    ├── 2')
    expect(consoleSpy).toHaveBeenCalledWith('    └── 3')
    expect(consoleSpy).toHaveBeenCalledTimes(3)
  })

  it('should render siblings with child node', () => {
    const data = {
      name: 1,
      items: [
        { name: 2,
          items: [
            { name: 4 },
          ]
        },
        { name: 3 },
      ]
    }

    printTree(data)

    expect(consoleSpy).toHaveBeenCalledWith('└── 1')
    expect(consoleSpy).toHaveBeenCalledWith('    ├── 2')
    expect(consoleSpy).toHaveBeenCalledWith('    │   └── 4')
    expect(consoleSpy).toHaveBeenCalledWith('    └── 3')
    expect(consoleSpy).toHaveBeenCalledTimes(4)
  })

  it('should render nodes if data is array', () => {
    const data = [
      {
        name: 1,
        items: [
          { name: 2,
            items: [
              { name: 4 },
            ]
          },
          { name: 3 },
        ]
      },
      {
        name: 5,
        items: [
          { name: 6 },
          { name: 7 } 
        ]
      }
    ]

    printTree(data)

    expect(consoleSpy).toHaveBeenCalledWith('├── 1')
    expect(consoleSpy).toHaveBeenCalledWith('│   ├── 2')
    expect(consoleSpy).toHaveBeenCalledWith('│   │   └── 4')
    expect(consoleSpy).toHaveBeenCalledWith('│   └── 3')
    expect(consoleSpy).toHaveBeenCalledWith('└── 5')
    expect(consoleSpy).toHaveBeenCalledWith('    ├── 6')
    expect(consoleSpy).toHaveBeenCalledWith('    └── 7')
    expect(consoleSpy).toHaveBeenCalledTimes(7)
  })

  it('should render top level nodes without children', () => {
    const data = [
      { name: 1 },
      { name: 2 },
      { name: 3 }
    ]

    printTree(data)

    expect(consoleSpy).toHaveBeenCalledWith('├── 1')
    expect(consoleSpy).toHaveBeenCalledWith('├── 2')
    expect(consoleSpy).toHaveBeenCalledWith('└── 3')
    expect(consoleSpy).toHaveBeenCalledTimes(3)
  })
})