const getHelpTableStructure = <Flag extends string, Description extends string>(structureData: [Flag, Description]) => {
  const [flag, description] = structureData;

  return {
    index: '',
    flag,
    description,
  };
};

export const helpTableStructure = [
  getHelpTableStructure(['-h, -help', 'show help']),
  getHelpTableStructure(['-net', 'generate base network folder structure with axios client (singleton)']),
  getHelpTableStructure(['-api', 'generate base query hook folder structure with react-query']),
];
