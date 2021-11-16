export interface AmountCurrency {
  amount: number
  currency: string
}

export interface IProjectDetails {
  date: string
  gateway?: string
  transactionId: string
  amount: AmountCurrency
}

export interface ProjectProps {
  description: string
  gatewayIds: string[]
  image: string
  industry: string
  name: string
  projectId: string
  rule: string
  structure: string
  userIds: string[]
  website: string
}

export interface GatewayProps {
  apiKey: string
  description: string
  gatewayId: string
  name: string
  secondaryApiKey: string
  type: string
  userIds: string[]
}
export interface mutateReportsBody {
  from: string
  to: string
  projectId: string
  gatewayId: string
}

export interface IReportsData {
  amount: number
  created: string
  gatewayId: string
  modified: string
  paymentId: string
  projectId: string
  userIds: string[]
}
