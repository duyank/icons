const path = require('path')

function defaultIndexTemplate(filePaths) {
    const entries = filePaths.map((originalPath) => {
        const originalFileName = path.basename(
            originalPath,
            path.extname(originalPath),
        )
        const {name} = path.parse(originalPath);
        const exportName = /^\d/.test(name) ? `Svg${name}` : name
        const importLine = `import ${exportName} from './${name}';`
        const mapLine = `${
            /.*[.-].*/.test(originalFileName)
                ? `'${originalFileName}'`
                : originalFileName
        }: ${exportName}`
        return { importLine, mapLine }
    })
    return `${entries.map(({ importLine }) => importLine).join('\n')}
export default {
${entries.map(({ mapLine }) => mapLine).join(',\n')}
}
`
}

module.exports = defaultIndexTemplate
