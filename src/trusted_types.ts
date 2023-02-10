interface CSPTrustedHTMLToStringable {
  toString: () => string
}

interface CSPTrustedScriptToStringable {
  toString: () => string
}

interface CSPTrustedScriptUrlToStringable {
  toString: () => string
}

interface CSPTrustedTypesPolicy {
  createHTML: (s: string) => CSPTrustedHTMLToStringable
  createScript: (s: string) => CSPTrustedScriptToStringable
  createScriptURL: (s: string) => CSPTrustedScriptUrlToStringable
}

let CSPTrustedTypesPolicy: CSPTrustedTypesPolicy | null = null

export function setCSPTrustedTypesPolicy(policy: CSPTrustedTypesPolicy) {
  CSPTrustedTypesPolicy = policy
}

export { CSPTrustedTypesPolicy }
