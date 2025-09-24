export function printTree(node, prefix = "") {
  const nodes = Array.isArray(node) ? node : [node]

  nodes.forEach((nd, i) => {
    const isLast = i === nodes.length - 1
    const connector = isLast ? '└── ' : '├── '
    console.log(`${prefix}${connector}${nd.name}`)

    if (nd.items && nd.items.length > 0) {
      const newPrefix = `${prefix}${isLast ? '    ' : '│   '}`
      printTree(nd.items, newPrefix)
    }
  })
}