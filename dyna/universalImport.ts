export const importUniversal = <TModule>(moduleName: string): TModule => {
  const universalImports =
    (typeof process !== "undefined" && (process as any).universalImports) ||
    (typeof window !== "undefined" && (window as any).universalImports);

  if (!universalImports) {
    console.error(`importUniversal error: no exports found, use exportUniversalNode/exportUniversalWeb to export universal modules`);
  }

  const runningEnvironment: string =
    process && (process as any).universalImports
      ? "node"
      : "web";

  if (!universalImports[moduleName]) {
    console.error(`importUniversal error: module [${moduleName}] not found, seems that is not exported for running Environment [${runningEnvironment}]`);
  }

  return universalImports[moduleName];
};

export const exportNode = (modules: { [moduleName: string]: any }): void => {
  (process as any).universalImports = {
    ...((process as any).universalImports || {}),
    ...modules,
  };
};


export const exportWeb = (modules: { [moduleName: string]: any }): void => {
  (window as any).universalImports = {
    ...((window as any).universalImports || {}),
    ...modules,
  };
};

