// builds a lookup based on key
function buildTreeFromList(nodes, parentKey = null) {
  // get matching nodes
  const matchingNodes = Object.keys(nodes).reduce((all, next) => {
    if (nodes[next].parentKey === parentKey) {
      all.push(nodes[next]);
    }

    return all;
  }, []);

  if (!matchingNodes) {
    return null;
  }

  matchingNodes.forEach(n => {
    const children = buildTreeFromList(nodes, n.key);
    if (children && children !== []) {
      n.children = children;
    }
  });

  return matchingNodes;
}

export const buildFrontmatterLookup = (
  nodes,
  includeFields = false,
  asTree = false
) => {
  const list = nodes.reduce((all, { node: nextNode }) => {
    if (!nextNode.frontmatter) {
      return all;
    }

    const additional = includeFields ? { ...nextNode.fields } : {};
    return {
      ...all,
      [nextNode.frontmatter.key]: { ...nextNode.frontmatter, ...additional }
    };
  }, {});

  return asTree ? buildTreeFromList(list) : list;
};
