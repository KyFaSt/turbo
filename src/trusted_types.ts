interface CSPTrustedHTMLToStringable {
  toString: () => string
}

interface CSPTrustedTypesPolicy {
  createHTML: (s: string) => CSPTrustedHTMLToStringable
}

let CSPTrustedTypesPolicy: CSPTrustedTypesPolicy | null = null

export function setCSPTrustedTypesPolicy(policy: CSPTrustedTypesPolicy) {
  CSPTrustedTypesPolicy = policy
}

export { CSPTrustedTypesPolicy }
