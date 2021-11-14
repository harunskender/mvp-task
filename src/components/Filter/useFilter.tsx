import { mutateReports } from 'api'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { dateToString } from 'utils'
import { ProjectProps, GatewayProps } from 'models/project'
interface useFilterProps {
  projects: ProjectProps[]
  gateways: GatewayProps[]
}

export default function useFilter({ projects, gateways }: useFilterProps) {
  const [project, setProject] = useState('All projects')
  const [gateway, setGateway] = useState('All gateways')
  const [fromDate, setFromDate] = useState<Date | string>(
    'From date' || new Date()
  )
  const [toDate, setToDate] = useState<Date | string>('To date' || new Date())

  const onProjectClickHandler = (value: string): void => {
    setProject(value)
  }
  const onGatewayClickHandler = (value: string): void => {
    setGateway(value)
  }
  const onFromDateClickHandler = (value: Date): void => {
    setFromDate(value)
  }
  const onToDateClickHandler = (value: Date): void => {
    setToDate(value)
  }
  const { mutate, data: mutateReportsData } = useMutation(mutateReports)

  const onGenerateHandler = (): void => {
    const projectId = projects?.find(
      (p: ProjectProps) => p.name === project
    )?.projectId
    const gatewayId = gateways?.find(
      (g: GatewayProps) => g.name === gateway
    )?.gatewayId

    if (typeof projectId !== 'undefined' && typeof gatewayId !== 'undefined') {
      const body = {
        projectId,
        gatewayId,
        from: dateToString(fromDate),
        to: dateToString(toDate),
      }
      mutate(body)
    }
  }

  return {
    project,
    gateway,
    fromDate,
    toDate,
    onProjectClickHandler,
    onGatewayClickHandler,
    onFromDateClickHandler,
    onToDateClickHandler,
    onGenerateHandler,
    mutateReportsData
  }
}
