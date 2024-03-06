type TableColumns = 'format' | 'flag' | 'description';
type TableStructure = { [key in TableColumns]: string };

export const consoleHelpTable = () => {
  console.table(helpTableStructure, ['flag', 'format', 'description'] as TableColumns[]);
};

/**
 * @helpers
 */
export const helpTableStructure = [
  getHelpTableStructure(['-h, -help', '-h', 'show help']),
  getHelpTableStructure(['-net', '-net', 'generate base network folder structure with axios client (singleton)']),
  getHelpTableStructure([
    '-api',
    'folderName fileName -api',
    'generate base query hook folder structure with react-query',
  ]),
];

function getHelpTableStructure<Flag extends string, Format extends string, Description extends string>(
  structureData: [Flag, Format, Description],
): TableStructure {
  const [flag, format, description] = structureData;

  return {
    flag,
    format,
    description,
  };
}
