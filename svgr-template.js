const template = (variables, { tpl }) => {
    const componentName = variables.componentName.replace(/^Svg/, '') + 'Icon';
    return tpl`
${variables.imports};

${variables.interfaces};

const ${componentName} = (${variables.props}) => (
  ${variables.jsx}
);

export default ${componentName};
`
}

module.exports = template
