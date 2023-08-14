/* eslint-disable no-shadow */
// @ts-nocheck
function template(variables, { tpl }) {
  const { imports, interfaces } = variables;

  console.log('interfaces', interfaces);

  // React import 제거
  const newImports = imports
    .map(imp => {
      if (imp.source.value === 'react') {
        return null; // React import 제거
      }
      const specifiers = imp.specifiers.map(spec => spec.local.name).join(', ');
      return `import { ${specifiers} } from '${imp.source.value}';`;
    })
    .filter(Boolean) // null 제거
    .join('\n');

  return tpl`
${newImports}

type Props = React.SVGProps<SVGSVGElement>;

const ${variables.componentName}: React.FC<Props> = (props:Props) => ${variables.jsx};

${variables.exports}
  `;
}

module.exports = template;
